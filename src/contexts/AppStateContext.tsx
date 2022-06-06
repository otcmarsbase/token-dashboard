import { useMetaMask } from "metamask-react"
import React, { ReactNode, useContext, useEffect, useState } from "react"
import { NftData } from "../api"
import { SCREEN_DATA, HANDLERS, IScreenData } from "../data"
import { useEthersAccount, WalletContext } from "../hooks/jrpc-provider"
import { useMarsbaseContracts } from "../hooks/mbase-contract"

export type AppStateContext = {
    data: IScreenData,
    handlers: {
        onClaim: (nftId: string) => void;
        onActions: (nftId: string) => void;
        onClaimAll: () => void;
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
    let state = React.useMemo(() => ({
        data: SCREEN_DATA,
        handlers: HANDLERS,
        nftsData: []
    }), [])

    const provider = useContext(WalletContext)?.value

    let contracts = useMarsbaseContracts()

    useEffect(() => {

        const signer = provider?.getSigner()

        state.handlers.onClaim = async nftId => {
            const tx = await contracts.vesting.populateTransaction["unvest(uint256)"](nftId)

            signer?.sendTransaction(tx)
                .then(res => alert('tx confirmed'))
                .catch((err) => alert('tx denied'))

        }
    }, [])
    /* let acc = account

    let account = useEthersAccount()
    state.handlers.onClaim = async nftId =>
    {
        let tx = await contracts.vesting.populateTransaction["unvest(uint256)"](nftId)
        acc.signAndSendTx(tx)
    } */

    // state.handlers.onClaimAll = api.requestClaimAllSignature

    return (
        <AppStateContext.Provider value={state}>
            {/* {status == 'connected' ? props.children : render} */}
            {props.children}
        </AppStateContext.Provider>
    )
}
