import React, { PropsWithChildren, StrictMode } from "react"
import TokenDashboard from "./components/pages/TokenDashboard"
import { AppStateProvider } from "./contexts/AppStateContext"
import { DictionaryProvider } from "./contexts/DictionaryContext"
import { MetaMaskProvider, useMetaMask } from "metamask-react"
import { EthersSignerMetamaskProvider, EthersSignerMetamaskProviderWrongChainId, JrpcProviderNode, MetamaskProviderOverride, Web3ProviderOverride } from "./hooks/jrpc-provider"
import { MarsbaseTokenProvider, MarsbaseVestingProvider } from "./hooks/mbase-contract"
import { DEFAULT_NETWORK, EvmNetwork } from "./config"
import "./styles.css"
import { NftsContextProvider } from "./contexts/NftsContext"
import { AddEthereumChainParameter } from "metamask-react/lib/metamask-context"
import { ethers } from "ethers"

declare global {
	interface Window {
		ethereum: any
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

const MetaMaskChecker: React.FC<{
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

export default function App() {
	return (
		<StrictMode>
			<DictionaryProvider lang="en">
				<JrpcProviderNode network={DEFAULT_NETWORK}>
					<MetaMaskProvider>
						<MetaMaskIgnored>
							<MetaMaskChecker
								metamaskConnected={MetamaskConnected}
								metamaskNotConnected={MetaMaskNotConnected}
								metamaskNotInstalled={MetaMaskNotInstalled}
								incorrectChainId={MetaMaskWrongChainId}
								network={DEFAULT_NETWORK}
							/>
						</MetaMaskIgnored>
					</MetaMaskProvider>
				</JrpcProviderNode>
			</DictionaryProvider>
		</StrictMode>
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


const MetamaskConnected: React.FC<{ network: EvmNetwork }> = props => (
	<MarsbaseTokenProvider address={props.network.mbaseTokenAddress}>
		<MarsbaseVestingProvider address={props.network.mbaseVestingAddress}>
			<AppStateProvider>
				<NftsContextProvider>
					<TokenDashboard />
				</NftsContextProvider>
			</AppStateProvider>
		</MarsbaseVestingProvider>
	</MarsbaseTokenProvider>
)


const MetaMaskNotInstalled: React.FC = () => (
	<div>
		Metamask is not installed
	</div>
)

const MetaMaskIgnored: React.FC<PropsWithChildren<{}>> = props => (
	<>
		<div>
			IDK about metamask
		</div>
		{props.children}
	</>
)

const MetaMaskNotConnected: React.FC<{ onConnect: () => void }> = props => (
	<div>
		Metamask is not connected
		<button onClick={props.onConnect}>Connect</button>
	</div>
)

const MetaMaskWrongChainId: React.FC<{ currentChainId: string, targetChainId: string, requestSwitch: () => void }> = props => (
	<div>
		Chain id incorrect
		<button onClick={props.requestSwitch}>Switch chain id</button>
	</div>
)

