import { useEffect, useState } from "react"
import { ethers } from "ethers"

export const useMetamask = () => {
	const [balance, setBalance] = useState<string | undefined>()
	const [currentAccount, setCurrentAccount] = useState<string | undefined>()
	const [chainId, setChainId] = useState<number | undefined>()
	const [chainname, setChainName] = useState<string | undefined>()

	useEffect(() => {
		if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return
		if (!window.ethereum) return
		const provider = new ethers.providers.Web3Provider(window.ethereum)
		provider.getBalance(currentAccount).then((result) => {
			setBalance(ethers.utils.formatEther(result))
		})
		provider.getNetwork().then((result) => {
			setChainId(result.chainId)
			setChainName(result.name)
		})
	}, [currentAccount])

	return {
		balance,
		currentAccount,
		chainId,
		chainname,
		setCurrentAccount,
		setBalance
	}
}
