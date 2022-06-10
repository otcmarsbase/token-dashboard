import React, { PropsWithChildren, StrictMode } from "react"
import TokenDashboard from "./components/pages/TokenDashboard"
import { AppStateProvider } from "./contexts/AppStateContext"
import { DictionaryProvider } from "./contexts/DictionaryContext"
import { MetaMaskProvider, useMetaMask } from "metamask-react"
import { JrpcProviderPrivnet, EthersSignerMetamaskProvider } from "./hooks/jrpc-provider"
import { MarsbaseTokenProvider, MarsbaseVestingProvider } from "./hooks/mbase-contract"
import { PRIVNET } from "./config"
import "./styles.css"
import { NftsContextProvider } from "./contexts/NftsContext"

declare global {
	interface Window {
		ethereum: any;
	}
}

const MetaMaskChecker: React.FC<{
	chainId: string,
	incorrectChainId: React.ElementType<{ targetChainId: string, currentChainId: string, requestSwitch: () => void }>
	metamaskNotInstalled: React.ElementType,
	metamaskNotConnected: React.ElementType<{ onConnect: () => void }>,
	metamaskConnected: React.ElementType<{ address: string }>
}> = props => {
	const { account, chainId, status, connect, addChain, switchChain } = useMetaMask()

	if ((status === 'unavailable') || (status === 'initializing'))
		return <props.metamaskNotInstalled />

	if ((status === 'notConnected') || (status === 'connecting'))
		return <props.metamaskNotConnected onConnect={connect} />

	if (props.chainId !== chainId)
		return <props.incorrectChainId
			currentChainId={chainId}
			targetChainId={props.chainId}
			requestSwitch={async () => {
				const parameters: Parameters<typeof addChain>[0] = {
					chainId: props.chainId,
					rpcUrls: [PRIVNET.rpcUrl],
					chainName: 'Privnet',
					nativeCurrency: {
						name: 'MBeth',
						symbol: 'MBeth',
						decimals: 18
					},
					blockExplorerUrls: ['https://localhost']
				}
				/* await window?.ethereum.request({
					method: 'wallet_addEthereumChain',
					params: [parameters],
				}) */
			await switchChain(props.chainId)
				console.log(chainId)
				console.log(await window.ethereum.request({method:'eth_chainId', params: []}))
			}} />

	return <props.metamaskConnected address={account} />

}

export default function App() {
	return (
		<StrictMode>
			<DictionaryProvider lang="en">
				<JrpcProviderPrivnet>
					<MetaMaskProvider>

						<MetaMaskIgnored>
							<MetaMaskChecker
								metamaskConnected={MetamaskConnected}
								metamaskNotConnected={MetaMaskNotConnected}
								metamaskNotInstalled={MetaMaskNotInstalled}
								chainId={"0x" + PRIVNET.chainId.toString(16)}
								incorrectChainId={MetaMaskWrongChainId}
							/>
						</MetaMaskIgnored>

					</MetaMaskProvider>
				</JrpcProviderPrivnet>
			</DictionaryProvider>
		</StrictMode>
	)
}

const MetamaskConnected: React.FC<{ address: string }> = props => (
	<EthersSignerMetamaskProvider chainId={"0x" + PRIVNET.chainId.toString(16)}>
		<MarsbaseTokenProvider address={PRIVNET.mbaseTokenAddress}>
			<MarsbaseVestingProvider address={PRIVNET.mbaseVestingAddress}>
				<AppStateProvider>
					<NftsContextProvider>
						<TokenDashboard />
					</NftsContextProvider>
				</AppStateProvider>
			</MarsbaseVestingProvider>
		</MarsbaseTokenProvider>
	</EthersSignerMetamaskProvider>
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

