import React, { PropsWithChildren } from "react"
import { EvmNetwork } from "../../config"
import { AppStateProvider } from "../../contexts/AppStateContext"
import { NftsContextProvider } from "../../contexts/NftsContext"
import { MarsbaseTokenProvider, MarsbaseVestingProvider } from "../../hooks/mbase-contract"
import TokenDashboard from "../pages/TokenDashboard"

export const MetamaskConnected: React.FC<{ network: EvmNetwork }> = props => (
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


export const MetaMaskNotInstalled: React.FC = () => (
	<div>
		Metamask is not installed
	</div>
)

export const MetaMaskIgnored: React.FC<PropsWithChildren<{}>> = props => (
	<>
		<div>
			IDK about metamask
		</div>
		{props.children}
	</>
)

export const MetaMaskNotConnected: React.FC<{ onConnect: () => void }> = props => (
	<div>
		Metamask is not connected
		<button onClick={props.onConnect}>Connect</button>
	</div>
)

export const MetaMaskWrongChainId: React.FC<{ currentChainId: string, targetChainId: string, requestSwitch: () => void }> = props => (
	<div>
		Chain id incorrect
		<button onClick={props.requestSwitch}>Switch chain id</button>
	</div>
)
