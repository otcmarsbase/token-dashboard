import React from "react"

import TokenDashboard from "./components/pages/TokenDashboard"

import { AppStateProvider } from "./contexts/AppStateContext"
import { DictionaryProvider } from "./contexts/DictionaryContext"
import { MetaMaskProvider } from "metamask-react"

import "./styles.css"

import { useMetamask } from "use-metamask"
import { EthersSignerFakeProvider, JrpcProviderPrivnet } from "./hooks/jrpc-provider"
import { MarsbaseTokenProvider, MarsbaseVestingProvider } from "./hooks/mbase-contract"
import { PRIVNET } from "./config"
import VestingSplit from "./components/pages/VestingSplit";

declare global {
	interface Window {
		ethereum: any
	}
}

export default function App() {
	return (
		<DictionaryProvider lang="en">
			<MetaMaskProvider>
				{/* <TokenDashboard /> */}
				<JrpcProviderPrivnet>
					<EthersSignerFakeProvider address="0x60c56553495612d4b93b6BC1deffE937223eaF51">
						<MarsbaseTokenProvider address={PRIVNET.mbaseTokenAddress}>
							<MarsbaseVestingProvider address={PRIVNET.mbaseVestingAddress}>
								<AppStateProvider>
									{/*<TokenDashboard />*/}
									<VestingSplit/>
								</AppStateProvider>
							</MarsbaseVestingProvider>
						</MarsbaseTokenProvider>
					</EthersSignerFakeProvider>
				</JrpcProviderPrivnet>
			</MetaMaskProvider>
		</DictionaryProvider>
	)
}
