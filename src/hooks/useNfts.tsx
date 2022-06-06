import { useMetaMask } from "metamask-react"
import { useContext, useEffect, useState } from "react"
import useSWR, { Fetcher, Key } from "swr"
import { getNftList } from "../api"
import { MarsbaseVestingContext } from "./mbase-contract"

export const useNfts = () => {
    const [nfts, setNfts] = useState<any[]>([])
    const {account} = useMetaMask()
    const [loading, setLoading] = useState(false)    
    const vest = useContext(MarsbaseVestingContext)
    
    useEffect(() => {
        if (account) {
            if (vest) {
                try {
                    setLoading(true)
                    getNftList(account, vest)
                        .then(res => {
                            setNfts(res)
                            setLoading(false)
                        })
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
        else {
            setNfts([])
        }

    }, [account])

    return {nfts, loading} 
}