import React, { StrictMode } from "react"
import TokenDashboard from "./components/pages/TokenDashboard"
import { AppStateProvider } from "./contexts/AppStateContext"
import { DictionaryProvider } from "./contexts/DictionaryContext"
import { MetaMaskProvider } from "metamask-react"
import { JrpcProviderPrivnet, EthersSignerMetamaskProvider } from "./hooks/jrpc-provider"
import { MarsbaseTokenProvider, MarsbaseVestingProvider } from "./hooks/mbase-contract"
import { PRIVNET } from "./config"
import "./styles.css"
import { NftsContextProvider } from "./contexts/NftsContext"

export default function App() {
	return (
		<StrictMode>
			<DictionaryProvider lang="en">
				<JrpcProviderPrivnet>
					<MetaMaskProvider>
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
					</MetaMaskProvider>
				</JrpcProviderPrivnet>
			</DictionaryProvider>
		</StrictMode>
	)
}
