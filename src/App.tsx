import React from "react"
import TokenDashboard from "./components/pages/TokenDashboard"
import { AppStateProvider } from "./contexts/AppStateContext"
import { DictionaryProvider } from "./contexts/DictionaryContext"
import { MetaMaskProvider } from "metamask-react"
import { JrpcProviderPrivnet, WalletContextProvider } from "./hooks/jrpc-provider"
import { MarsbaseTokenProvider, MarsbaseVestingProvider } from "./hooks/mbase-contract"
import { PRIVNET } from "./config"
import "./styles.css"

declare global {
	interface Window {
		ethereum: any
	}
}

export default function App() {
	return (
		<DictionaryProvider lang="en">
			<JrpcProviderPrivnet>
				<MetaMaskProvider>
					<WalletContextProvider>
						<MarsbaseTokenProvider address={PRIVNET.mbaseTokenAddress}>
							<MarsbaseVestingProvider address={PRIVNET.mbaseVestingAddress}>
								<AppStateProvider>
									<TokenDashboard />
								</AppStateProvider>
							</MarsbaseVestingProvider>
						</MarsbaseTokenProvider>
					</WalletContextProvider>
				</MetaMaskProvider>
			</JrpcProviderPrivnet>
		</DictionaryProvider >
	)
}
