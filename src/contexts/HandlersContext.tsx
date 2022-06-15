import { BigNumber, utils } from "ethers"
import React, { ReactNode, useContext } from "react"
import { NftData } from "../api"
import { NFTS_PER_TRANSACTION } from "../config"
import { SCREEN_DATA, HANDLERS, IScreenData } from "../data"
import { TxSasResult, useCurrentUser, useEthProvider } from "../hooks/jrpc-provider"
import { useMarsbaseContracts } from "../hooks/mbase-contract"
import { NftsContext } from "./NftsContext"

export type HandlersContext = {
    handlers: {
        onClaim: (nftId: string) => Promise<void>;
        onActions: (nftId: string) => void;
        onClaimAll: (/* nftIds: string[] */) => void;
        onSellWithPremium: () => void;
        onBuyNow: () => void;
    },
}

export const HandlersContext = React.createContext<HandlersContext>({
    handlers: HANDLERS,
})

export const HandlersProvider: React.FC<{ children: ReactNode }> = props => {

    let user = useCurrentUser()
    let contracts = useMarsbaseContracts()
    const provider = useEthProvider()
    const { nftsG } = useContext(NftsContext)

    let state = React.useMemo(() => ({
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
            },
            onClaimAll: async () => {
                let nftsToClaim = nftsG.sort((a, b) => {
                    const bigA = BigNumber.from(utils.parseUnits(a.unclaimed, 18))
                    const bigB = BigNumber.from(utils.parseUnits(b.unclaimed, 18))
                    if (bigA.eq(bigB))
                        return 0
                    if (bigA.lt(bigB))
                        return 1
                    return -1
                })

                if (nftsToClaim.length > NFTS_PER_TRANSACTION)
                    nftsToClaim = nftsToClaim.slice(NFTS_PER_TRANSACTION - 1)

                const nftIds = nftsToClaim.map(nft => nft.id)

                console.log(nftIds)

                const tx = await contracts.vesting.populateTransaction["unvest(uint256[])"](nftIds)
                let signedTx: TxSasResult | undefined = await user?.signAndSendTx(tx)
                console.log(signedTx)
            }
        },
    }), [user, contracts])

    return (
        <HandlersContext.Provider value={state}>
            {props.children}
        </HandlersContext.Provider>
    )
}
