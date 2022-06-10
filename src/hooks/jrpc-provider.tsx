import React, { PropsWithChildren } from "react"
import { ethers } from "ethers"
import { EvmNetwork } from "../config"
import { useConnectedMetaMask, useMetaMask } from "metamask-react"
import { useErrorHandlers } from "./errors"

export const Web3ProviderContext = React.createContext<ethers.providers.JsonRpcProvider | undefined>(undefined)

export const useEthProvider = () => {
	const err = useErrorHandlers()
	const provider = React.useContext(Web3ProviderContext)

	if (!provider)
		return err.critical(new Error("useJsonRpcProvider must be used within a JRPCProviderContext"))

	return provider
}

export const JrpcProviderNode: React.FC<PropsWithChildren<{ network: EvmNetwork }>> = props => {
	const provider = React.useMemo(() => new ethers.providers.JsonRpcProvider(props.network.rpcUrl), [])

	return (
		<Web3ProviderContext.Provider value={provider}>{props.children}</Web3ProviderContext.Provider>
	)
}
export const MetamaskProviderOverride: React.FC<PropsWithChildren<{ ethereum: any }>> = props =>
{
	const provider = React.useMemo(() => new ethers.providers.Web3Provider(props.ethereum), [props.ethereum])

	return (
		<Web3ProviderContext.Provider value={provider}>{props.children}</Web3ProviderContext.Provider>
	)
}
export const Web3ProviderOverride: React.FC<PropsWithChildren<{ provider: ethers.providers.Web3Provider }>> = props =>
{
	return (
		<Web3ProviderContext.Provider value={props.provider}>{props.children}</Web3ProviderContext.Provider>
	)
}

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

export const EthersSignerMetamaskProvider: React.FC<PropsWithChildren<{ }>> = props =>
{
	const provider = useEthProvider()
	const metamask = useConnectedMetaMask()

	const ctx = React.useMemo<LoggedInUser>(() => ({
		address: metamask.account,
		signAndSendTx: signAndSendTxFactory(provider.getSigner()),
	}), [metamask.account, provider])

	return (
		<LoggedInUserContext.Provider value={ctx}>{props.children}</LoggedInUserContext.Provider>
	)
}
export const EthersSignerMetamaskProviderWrongChainId: React.FC<PropsWithChildren<{ network: EvmNetwork }>> = props =>
{
	const provider = useEthProvider()
	const metamask = useConnectedMetaMask()

	const ctx = React.useMemo<LoggedInUser>(() => ({
		address: metamask.account,
		// TODO: handle errors
		signAndSendTx: tx => provider.getSigner().signTransaction(tx)
			// TODO: populate all necessary fields
			.then(stx => provider.sendTransaction(stx)
			.then(sent => ({ type:"success", hash: sent.hash }))),
	}), [metamask.account, provider])

	return (
		<LoggedInUserContext.Provider value={ctx}>{props.children}</LoggedInUserContext.Provider>
	)
}
