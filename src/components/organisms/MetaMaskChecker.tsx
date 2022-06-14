import { ethers } from "ethers"
import { useMetaMask } from "metamask-react"
import { AddEthereumChainParameter } from "metamask-react/lib/metamask-context"
import React, { PropsWithChildren } from "react"
import { EvmNetwork } from "../../config"
import { Web3ProviderOverride, EthersSignerMetamaskProvider, EthersSignerMetamaskProviderWrongChainId } from "../../hooks/jrpc-provider"

export const MetaMaskChecker: React.FC<{
	network: EvmNetwork,
	metamaskNotInstalled: React.ElementType<{}>,
	metamaskNotConnected: React.ElementType<{ onConnect: () => void }>,
	incorrectChainId: React.ElementType<{ targetChainId: string, currentChainId: string, requestSwitch: () => void }>
	metamaskConnected: React.ElementType<{ network: EvmNetwork }>
}> = props => {
	const { account, chainId, status, connect, addChain, switchChain, ethereum } = useMetaMask()
	const metamaskProvider = React.useMemo(() => ethereum ? new ethers.providers.Web3Provider(ethereum) : undefined, [ethereum])

	if ((status === 'unavailable') || (status === 'initializing') || !metamaskProvider)
		return <props.metamaskNotInstalled />

	if ((status === 'notConnected') || (status === 'connecting'))
		return <props.metamaskNotConnected onConnect={connect} />

	if (props.network.chainIdStr !== chainId)
	{
		return <MetamaskIncorrectChainIdWrapper network={props.network}>
			<props.incorrectChainId
				currentChainId={chainId}
				targetChainId={props.network.chainIdStr}
				requestSwitch={trySwitchNetworkFactory(props.network, addChain, switchChain)}
			/>
		</MetamaskIncorrectChainIdWrapper>
	}

	return (
		<MetamaskCorrectChainIdWrapper address={account} network={props.network} metamaskProvider={metamaskProvider}>
			<props.metamaskConnected network={props.network} />
		</MetamaskCorrectChainIdWrapper>
	)
}

const MetamaskCorrectChainIdWrapper: React.FC<PropsWithChildren<{ address: string, network: EvmNetwork, metamaskProvider: ethers.providers.Web3Provider }>> = props => (
	<Web3ProviderOverride provider={props.metamaskProvider}>
		<EthersSignerMetamaskProvider>
			{props.children}
		</EthersSignerMetamaskProvider>
	</Web3ProviderOverride>
)

const MetamaskIncorrectChainIdWrapper: React.FC<PropsWithChildren<{ network: EvmNetwork }>> = props => (
	<EthersSignerMetamaskProviderWrongChainId network={props.network}>
		{props.children}
	</EthersSignerMetamaskProviderWrongChainId>
)

const trySwitchNetworkFactory = (
	network: EvmNetwork,
	addChain: (parameters: AddEthereumChainParameter) => Promise<void>,
	switchChain: (chainId: string) => Promise<void>,
) => async () =>
{
	try
	{
		await switchChain(network.chainIdStr)
	}
	catch (e)
	{
		if (isRpcError(e) && (e.code == 4902))
		{
			await addChain({
				chainId: network.chainIdStr,
				chainName: network.name,
				rpcUrls: [network.rpcUrl],
				blockExplorerUrls: [network.blockExplorerUrl],
			})
			await switchChain(network.chainIdStr)

			return
		}
		
		console.error(e)
	}
}

const isRpcError = (error: unknown): error is { code: number, message: string, stack?: string } =>
{
	if (typeof error !== "object")
		return false

	if (!error)
		return false
	
	let err = error as { code?: unknown, message?: unknown, stack?: unknown }
	
	if (typeof err.code !== "number")
		return false
	
	if (typeof err.message !== "string")
		return false
	
	if ((typeof err.stack !== "string") && (typeof err.stack !== "undefined"))
		return false

	return true
}
