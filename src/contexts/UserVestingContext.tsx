import { BigNumber, utils } from "ethers";
import React, { PropsWithChildren, useMemo, useState } from "react";
import { nftDataToView } from "../api";
import { NFTS_PER_TRANSACTION } from "../config";
import { HANDLERS } from "../data";
import { TxSasResult, useCurrentUser, useEthProvider } from "../hooks/jrpc-provider";
import { useMarsbaseContracts, useTokenInfo } from "../hooks/mbase-contract";
import { useInterval } from "../hooks/useInterval";
import { useNfts } from "../hooks/useNfts";
import { HandlersContext } from "./HandlersContext";
import { NftsContextType } from "./NftsContext";

export type UserVestingContext = HandlersContext & NftsContextType

export const UserVestingContext = React.createContext<UserVestingContext>({
    handlers: HANDLERS,
    nftsG: [],
    loading: false,
    error: undefined,
    repeatRequest: () => { }
})

export const UserVestingContextProvider: React.FC<PropsWithChildren<{}>> = props => {

    const { data: nfts, error, mutate } = useNfts()
    const token = useTokenInfo()
    const [currentTime, setCurrentTime] = useState<number>(Date.now())
    let user = useCurrentUser()
    let contracts = useMarsbaseContracts()
    const provider = useEthProvider()

    const nftsG = useMemo(() => {
        if (!token || !nfts || error)
            return undefined

        return nftDataToView(nfts, token.decimals, token.symbol, currentTime)
    }, [nfts, token, currentTime])

    useInterval(() => setCurrentTime(Date.now()), 500)

    const handlers = React.useMemo(() => ({
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

            if (!nftsG) return

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

        },
    }), [user, contracts])

    return (
        <UserVestingContext.Provider value={{
            handlers: handlers,
            nftsG: nftsG ? nftsG : [],
            loading: !nftsG,
            error: error,
            repeatRequest: () => mutate()
        }}>
            {props.children}
        </UserVestingContext.Provider>
    )
}