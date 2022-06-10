import { useConnectedMetaMask, useMetaMask } from "metamask-react"
import useSWR from "swr"
import { getNftList } from "../api"
import { useMarsbaseContracts } from "./mbase-contract"

export const useNfts = () => {
    const {account} = useConnectedMetaMask()
    const {vesting} = useMarsbaseContracts()
    
	const response = useSWR(account, () => getNftList(account, vesting))

    return response
}
