import { useConnectedMetaMask } from "metamask-react"
import { useContext, useEffect, useState } from "react"
import useSWR, { Fetcher, Key } from "swr"
import { getNftList, NftData } from "../api"
import { MarsbaseVestingContext, useMarsbaseContracts } from "./mbase-contract"

export const useNfts = () => {
    const {account} = useConnectedMetaMask()
    const {vesting} = useMarsbaseContracts()

	const response = useSWR(account, () => getNftList(account, vesting))

    return response
}
