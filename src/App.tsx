import React from "react"

import TokenDashboard from "./components/pages/TokenDashboard"

import { AppStateProvider } from "./contexts/AppStateContext"
import { DictionaryProvider } from "./contexts/DictionaryContext"
import { MetaMaskProvider } from "metamask-react"

import "./styles.css"

declare global {
	interface Window {
		ethereum: any
	}
}

export default function App() {
	return (
		<DictionaryProvider lang="en">
			<AppStateProvider>
				<MetaMaskProvider>
					<TokenDashboard />
				</MetaMaskProvider>
			</AppStateProvider>
		</DictionaryProvider>
	)
}
