import React, { PropsWithChildren } from "react"
import { ethers } from "ethers"
import { PRIVNET } from "../config"
import { MetaMaskProvider, useMetaMask } from "metamask-react"
import { IMetaMaskContext } from "metamask-react/lib/metamask-context"

export const JRPCProviderContext = React.createContext<ethers.providers.JsonRpcProvider | undefined>(undefined)

export const useEthProvider = () => {
	const provider = React.useContext(JRPCProviderContext)
	if (!provider)
		throw new Error("useJsonRpcProvider must be used within a JRPCProviderContext")
	return provider
}

export const JrpcProviderPrivnet: React.FC<PropsWithChildren<{}>> = props => {
	const provider = React.useMemo(() => new ethers.providers.JsonRpcProvider(PRIVNET.rpcUrl), [])

	return (
		<JRPCProviderContext.Provider value={provider}>{props.children}</JRPCProviderContext.Provider>
	)
}

/* export const MetamaskProvider: React.FC<PropsWithChildren<{}>> = props => {
	const provider = React.useMemo(() => new ethers.providers.Web3Provider(window.ethereum), [window.ethereum])

	return (
		<JRPCProviderContext.Provider value={provider}>{props.children}</JRPCProviderContext.Provider>
	)
} */

export type WalletContext = {
	value: ethers.providers.Web3Provider | null
}

export const WalletContext = React.createContext<WalletContext | undefined>(undefined)

export const WalletContextProvider: React.FC<PropsWithChildren<{}>> = props => {

	let provider: ethers.providers.Web3Provider | null = null

	try {
		console.log('new provider')
		provider = new ethers.providers.Web3Provider(window.ethereum)
	}
	catch (err) {
		alert('no metamask')
	}

	return (
		<WalletContext.Provider value={{ value: provider }}>
			{props.children}
		</WalletContext.Provider>
	)
}

export type EthAccountContext = {
	address: string
	signAndSendTx: (tx: ethers.providers.TransactionRequest) => void
}

export const EthAccountContext = React.createContext<EthAccountContext | undefined>(undefined)

export const useEthersAccount = () => {
	const signer = React.useContext(EthAccountContext)
	console.log(signer)
	// if (!signer)
	// 	throw new Error("useEthersSigner must be used within a EthersSignerContext")

	return signer
}

export const useEthAddress = () => {
	const signer = useEthersAccount()
	if (!signer)
		throw new Error("useEthersAddress must be used within a EthersSignerContext")

	return signer.address
}

export const EthersSignerFakeProvider: React.FC<PropsWithChildren<{ privateKey: string } | { address: string }>> = props => {
	const provider = useEthProvider()

	const [ctx, setCtx] = React.useState<EthAccountContext>()

	const key = "privateKey" in props ? props.privateKey : props.address

	React.useEffect(() => {
		if ("privateKey" in props) {
			const signer = new ethers.Wallet(props.privateKey, provider)
			let address = ethers.utils.computeAddress(props.privateKey)
			setCtx({
				address,
				signAndSendTx: tx => signer.sendTransaction(tx)
			})
		}
		else {
			setCtx({
				address: props.address,
				signAndSendTx: console.log
			})
		}
	}, [provider, key])

	return (
		<EthAccountContext.Provider value={ctx}>{props.children}</EthAccountContext.Provider>
	)
}

export const EthersSignerMetamaskProvider: React.FC<PropsWithChildren<{}>> = props => {
	const provider = useEthProvider()
	console.log(provider)

	const [ctx, setCtx] = React.useState<EthAccountContext>()

	React.useEffect(() => {
		(async () => {
			await provider.send("eth_requestAccounts", [])
			let signer = provider.getSigner()
			let address = await signer.getAddress()
			setCtx({
				address,
				signAndSendTx: tx => signer.sendTransaction(tx)
			})
		})()
	}, [provider])


	return (
		<EthAccountContext.Provider value={ctx}>{props.children}</EthAccountContext.Provider>
	)
}
