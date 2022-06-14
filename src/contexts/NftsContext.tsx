import React, { PropsWithChildren, useMemo, useState } from "react"
import { nftDataToView } from "../api"
import { useTokenInfo } from "../hooks/mbase-contract"
import { useInterval } from "../hooks/useInterval"
import { useNfts } from "../hooks/useNfts"
import { INft } from "../components/organisms/types";
import { FullConfiguration } from "swr/dist/types"

export type NftsContextType = {
    nftsG: INft[]
    loading: boolean
    error: string | undefined
    tryAgain: () => void
}

export const NftsContext = React.createContext<NftsContextType>({ nftsG: [], loading: false, error: undefined, tryAgain: () => { } })

export const NftsContextProvider: React.FC<PropsWithChildren<{}>> = props => {

    const { data: nfts, error, mutate } = useNfts()
    const token = useTokenInfo()
    const [currentTime, setCurrentTime] = useState<number>(Date.now())

    const nftsG = useMemo(() => {
        if (!token || !nfts || error)
            return undefined

        return nftDataToView(nfts, token.decimals, token.symbol, currentTime)
    }, [nfts, token, currentTime])

    useInterval(() => setCurrentTime(Date.now()), 500)

    return (
        <NftsContext.Provider value={{ nftsG: nftsG || [], loading: !nftsG, error: error, tryAgain: () => mutate() }}>
            {props.children}
        </NftsContext.Provider>
    )
}