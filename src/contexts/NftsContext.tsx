import React, { PropsWithChildren, useMemo, useState } from "react"
import { nftDataToView } from "../api"
import { INft } from "../components/organisms/NftTable"
import { useTokenInfo } from "../hooks/mbase-contract"
import { useInterval } from "../hooks/useInterval"
import { useNfts } from "../hooks/useNfts"

export type NftsContextType = {
    nftsG: INft[]
    loading: boolean
}

export const NftsContext = React.createContext<NftsContextType>({ nftsG: [], loading: false })

export const NftsContextProvider: React.FC<PropsWithChildren<{}>> = props => {

    const { data: nfts } = useNfts()
	const token = useTokenInfo()
	const [currentTime, setCurrentTime] = useState<number>(Date.now())

	const nftsG = useMemo(() =>
	{
		if (!token || !nfts)
			return undefined

		return nftDataToView(nfts, token.decimals, token.symbol, currentTime)
	}, [nfts, token, currentTime])

    useInterval(() => setCurrentTime(Date.now()), 500)

    return (
        <NftsContext.Provider value={{ nftsG: nftsG || [], loading: !nftsG }}>
            {props.children}
        </NftsContext.Provider>
    )
}