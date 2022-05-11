import React from "react"
import { useMetaMask } from "metamask-react"

export const ConnectWithMetamask: React.FC = () => {
	const { status, connect, account } = useMetaMask()

	if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

	if (status === "unavailable") return <div>MetaMask not available :(</div>

	if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

	if (status === "connecting") return <div>Connecting...</div>

	if (status === "connected") {
		return (
			<div>
				<address>{account}</address>
			</div>
		)
	}

	return null
}
