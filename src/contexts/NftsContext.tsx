import { BigNumber, FixedNumber } from "ethers"
import React, { PropsWithChildren, useContext, useEffect, useState } from "react"
import { nftDataToView, updateNfts } from "../api"
import { INft } from "../components/organisms/NftTable"
import { useMarsbaseContracts } from "../hooks/mbase-contract"
import { useInterval } from "../hooks/useInterval"
import { useNfts } from "../hooks/useNfts"

export type NftsContextType = {
    nftsG: INft[]
    loading: boolean
}

export const NftsContext = React.createContext<NftsContextType>({ nftsG: [], loading: false })

export const NftsContextProvider: React.FC<PropsWithChildren<{}>> = props => {

    const { nfts, loading } = useNfts()
    const [viewLoading, setViewLoading] = useState<boolean>(false)
    const { token } = useMarsbaseContracts()
    const [nftsG, setNftsG] = useState<INft[]>([])

    useEffect(() => { /* конверт данных в тип для вью компонентов */
        const setViewData = async () => {
            setViewLoading(true)
            const decimals = await token.decimals()
            setNftsG(await nftDataToView(nfts, token, decimals))
            setViewLoading(false)
        }

        setViewData()
    }, [nfts])

    const foo = async () => {
        setNftsG(updateNfts(nftsG, await token.decimals()))
    }

    useInterval(foo, 1000)


    return (
        <NftsContext.Provider value={{ nftsG: nftsG, loading: loading || viewLoading }}>
            {props.children}
        </NftsContext.Provider>
    )
}