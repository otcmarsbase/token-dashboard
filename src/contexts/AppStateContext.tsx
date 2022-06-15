import React, { ReactNode } from "react"
import { NftData } from "../api"
import { SCREEN_DATA, HANDLERS, IScreenData } from "../data"
import { TxSasResult, useCurrentUser, useEthProvider } from "../hooks/jrpc-provider"
import { useMarsbaseContracts } from "../hooks/mbase-contract"

export type AppStateContext = {
    data: IScreenData,
    handlers: {
        onClaim: (nftId: string) => Promise<void>;
        onActions: (nftId: string) => void;
        onClaimAll: (/* nftIds: string[] */) => void;
        onSellWithPremium: () => void;
        onBuyNow: () => void;
    },
    nftsData: NftData[]
}

export const AppStateContext = React.createContext<AppStateContext>({
    data: SCREEN_DATA,
    handlers: HANDLERS,
    nftsData: []
})

export const AppStateProvider: React.FC<{ children: ReactNode }> = props => {

    let user = useCurrentUser()
    let contracts = useMarsbaseContracts()
    const provider = useEthProvider()

    let state = React.useMemo(() => ({
        data: SCREEN_DATA,
        handlers: {
            ...HANDLERS,
            onClaim: async (nftId: string) => {
                const tx = await contracts.vesting.populateTransaction["unvest(uint256)"](nftId)

                let signedTx: TxSasResult | undefined = await user?.signAndSendTx(tx) 

                if (signedTx?.type == 'success') {
                    let txt = await provider.getTransaction(signedTx.hash)
                    await txt.wait()
                    return Promise.resolve()
                }
                return Promise.reject('tx error')
            }
        },
        nftsData: []
    }), [user, contracts])

    return (
        <AppStateContext.Provider value={state}>
            {props.children}
        </AppStateContext.Provider>
    )
}
