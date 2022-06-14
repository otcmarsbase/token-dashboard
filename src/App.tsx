import React, { StrictMode } from "react"
import { DictionaryProvider } from "./contexts/DictionaryContext"
import { MetaMaskProvider } from "metamask-react"
import { JrpcProviderNode } from "./hooks/jrpc-provider"
import { DEFAULT_NETWORK } from "./config"
import "./styles.css"
import { MetaMaskChecker } from "./components/organisms/MetaMaskChecker"
import { MetaMaskIgnored, MetamaskConnected, MetaMaskNotConnected, MetaMaskNotInstalled, MetaMaskWrongChainId } from "./components/organisms/MetaMaskStateWrappers"
declare global {
	interface Window {
		ethereum: any
	}
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

