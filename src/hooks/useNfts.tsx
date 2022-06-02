import { BigNumber } from "ethers"
import { useMetaMask } from "metamask-react"
import { useContext, useEffect, useState } from "react"
import { getNftList } from "../api"
import { useEthAddress } from "./jrpc-provider"
import { MarsbaseVestingContext } from "./mbase-contract"

export const useNfts = (address: string) => {
    const [nfts, setNfts] = useState<any[]>([])

    const account = useMetaMask() /* это для теста, будет ли ререндериться дэш при смене аккаунта, это нужно, потому что сейчас используется фейковый адрес, который не меняется при смене аккаунта */

    const vest = useContext(MarsbaseVestingContext)


    useEffect(() => {
        if (vest) {
            try {
                getNftList(address, vest)
                    .then(res => {
                        setNfts(res)
                    })
            }
            catch (err) {
                console.log(err)
            }
        }

    }, [address, account])

    return nfts 
}