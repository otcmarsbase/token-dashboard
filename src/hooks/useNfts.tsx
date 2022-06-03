import { useMetaMask } from "metamask-react"
import { useContext, useEffect, useState } from "react"
import { getNftList } from "../api"
import { MarsbaseVestingContext } from "./mbase-contract"

export const useNfts = () => {
    const [nfts, setNfts] = useState<any[]>([])
    const {account} = useMetaMask()
    
    const vest = useContext(MarsbaseVestingContext)

    useEffect(() => {
        if (account) {
            if (vest) {
                try {
                    getNftList(account, vest)
                        .then(res => {
                            setNfts(res)
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

    return nfts 
}