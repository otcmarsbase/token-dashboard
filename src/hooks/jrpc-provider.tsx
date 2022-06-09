import React, { PropsWithChildren, useEffect } from "react"
import { ethers } from "ethers"
import { PRIVNET } from "../config"
import { MetaMaskProvider, useMetaMask } from "metamask-react"
import { IMetaMaskContext } from "metamask-react/lib/metamask-context"
import { useErrorHandlers } from "./errors"
import detectEthereumProvider from "@metamask/detect-provider"

export const Web3ProviderContext = React.createContext<ethers.providers.JsonRpcProvider | undefined>(undefined)

export const useEthProvider = () => {
	const err = useErrorHandlers()
	const provider = React.useContext(Web3ProviderContext)

	if (!provider)
		return err.critical(new Error("useJsonRpcProvider must be used within a JRPCProviderContext"))

	return provider
}

export const JrpcProviderPrivnet: React.FC<PropsWithChildren<{}>> = props => {
	const provider = React.useMemo(() => new ethers.providers.JsonRpcProvider(PRIVNET.rpcUrl), [])

	return (
		<Web3ProviderContext.Provider value={provider}>{props.children}</Web3ProviderContext.Provider>
	)
}

// const web3provider = (ethereum: ethers.providers.ExternalProvider | undefined) =>
// 	ethereum ? new ethers.providers.Web3Provider(ethereum) : undefined

// export const MetamaskProvider: React.FC<PropsWithChildren<{}>> = props => {
// 	const [ethereum, setEthereum] = React.useState(window.ethereum)
// 	const provider = React.useMemo(() => web3provider(ethereum), [ethereum])

// 	// maybe metamask was not yet injected, but will be later
// 	useEffect(() =>
// 	{
// 		(async () =>
// 		{
// 			let eth = await detectEthereumProvider()
// 			if (eth)
// 				setEthereum(eth as ethers.providers.ExternalProvider)
// 		})()
// 	}, [])

// 	// couldn't find metamask, revert to default provider (hopefully defined higher in the component tree)
// 	if (!provider)
// 		return <>{props.children}</>

// 	return (
// 		<Web3ProviderContext.Provider value={provider}>{props.children}</Web3ProviderContext.Provider>
// 	)
// }

export type TxSasSuccess = {
	type: "success"
	hash: string
}
export type TxSasError = {
	type: "error"
	reason: "cancel" | "error"
	error?: unknown
}
export type TxSasResult = TxSasSuccess | TxSasError
export type LoggedInUser = {
	address: string
	signAndSendTx: (tx: ethers.providers.TransactionRequest) => Promise<TxSasResult>
}
export const LoggedInUserContext = React.createContext<LoggedInUser | undefined>(undefined)

export const useCurrentUser = () =>
{
	return React.useContext(LoggedInUserContext)
}

const signAndSendTxFactory = (signer: ethers.Wallet | ethers.providers.JsonRpcSigner) =>
	async (tx: ethers.providers.TransactionRequest): Promise<TxSasResult> =>
	{
		let hash: string
		try
		{
			let res = await signer.sendTransaction(tx)
			hash = res.hash
		}
		catch (e)
		{
			return {
				type: "error",
				reason: "error",
				error: e
			}
		}
		return {
			type: "success",
			hash,
		}
	}

export const EthersSignerFakeProvider: React.FC<PropsWithChildren<{ privateKey: string } | { address: string }>> = props => {
	const provider = useEthProvider()

	const [ctx, setCtx] = React.useState<LoggedInUser>()

	const key = "privateKey" in props ? props.privateKey : props.address

	React.useEffect(() => {
		if ("privateKey" in props) {
			const signer = new ethers.Wallet(props.privateKey, provider)
			let address = ethers.utils.computeAddress(props.privateKey)
			setCtx({
				address,
				signAndSendTx: signAndSendTxFactory(signer)
			})
		}
		else {
			setCtx({
				address: props.address,
				signAndSendTx: async tx => (console.log(tx), { type: "success", hash: "test-hash" })
			})
		}
	}, [provider, key])

	return (
		<LoggedInUserContext.Provider value={ctx}>{props.children}</LoggedInUserContext.Provider>
	)
}

export const EthersSignerMetamaskProvider: React.FC<PropsWithChildren<{ chainId: string }>> = props => {
	const provider = useEthProvider()
	// console.log(provider)

	const [ctx, setCtx] = React.useState<LoggedInUser>()

	const metamask = useMetaMask()

	React.useEffect(() => {
		(async () => {
			if (metamask.status !== "connected")
				return

			if (!metamask.account)
				return

			if (metamask.chainId != props.chainId)
				return
			
			setCtx({
				address: metamask.account,
				signAndSendTx: tx => signAndSendTxFactory(provider.getSigner())(tx),
			})
		})()
	}, [provider, metamask.status, metamask.chainId, metamask.account, props.chainId])

	// cannot login with metamask for now
	if (!ctx)
		return <>{props.children}</>

	return (
		<LoggedInUserContext.Provider value={ctx}>{props.children}</LoggedInUserContext.Provider>
	)
}
