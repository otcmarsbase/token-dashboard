import React from "react"

import TokenDashboard from "./components/pages/TokenDashboard"

import { AppStateProvider } from "./contexts/AppStateContext"
import { DictionaryProvider } from "./contexts/DictionaryContext"
import { MetaMaskProvider } from "metamask-react"

import "./styles.css"

import { useMetamask } from "use-metamask"
import { EthersSignerFakeProvider, EthersSignerMetamaskProvider, JrpcProviderPrivnet, WalletContextProvider } from "./hooks/jrpc-provider"
import { MarsbaseTokenProvider, MarsbaseVestingProvider } from "./hooks/mbase-contract"
import { PRIVNET } from "./config"

declare global {
	interface Window {
		ethereum: any
	}
}

export default function App() {
	return (
		<DictionaryProvider lang="en">
			<MetaMaskProvider>
				<WalletContextProvider>

					<JrpcProviderPrivnet>
						<MarsbaseTokenProvider address={PRIVNET.mbaseTokenAddress}>
							<MarsbaseVestingProvider address={PRIVNET.mbaseVestingAddress}>
								<AppStateProvider>
									<TokenDashboard />
								</AppStateProvider>
							</MarsbaseVestingProvider>
						</MarsbaseTokenProvider>
					</JrpcProviderPrivnet>

				</WalletContextProvider>
			</MetaMaskProvider>
		</DictionaryProvider >
	)
}
