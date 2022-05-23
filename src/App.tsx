import React, { useContext, useEffect, useState } from "react"

import TokenDashboard from "./components/pages/TokenDashboard"
import 'regenerator-runtime'

import { AppStateContext, AppStateProvider } from "./contexts/AppStateContext"
import { DictionaryProvider } from "./contexts/DictionaryContext"
import { MetaMaskProvider, useMetaMask } from "metamask-react"

import "./styles.css"
import { useMetamask } from "use-metamask"

declare global {
	interface Window {
		ethereum: any
	}
}

/* сейчас проблема в том, что изменение статуса метамаска не ререндерит компонент, из за этого после подключения надо обновлять страницу, в следующем пуше я это поправлю */

const Display: React.FC = props => { /* Template test component for metamask authentication */
	const { status } = useMetaMask()

	const [render, setRender] = useState(<div>Connect meta</div>)

	useEffect(() => {
		if (status == 'connected')
			setRender(<TokenDashboard />)
	})
	 
	return (
		render
	)
}

export default function App() {
	return (
		<DictionaryProvider lang="en">
			<AppStateProvider>
				<MetaMaskProvider>
					{/* <TokenDashboard /> */}
					<Display />
				</MetaMaskProvider>
			</AppStateProvider>
		</DictionaryProvider>
	)
}
