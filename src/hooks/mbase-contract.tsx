import React from "react"

import { MarsbaseVesting__factory, MarsbaseVesting, MarsbaseToken__factory, MarsbaseToken } from "@otcmarsbase/token-contract-types"

import { useEthProvider } from "./jrpc-provider"

export const MarsbaseVestingContext = React.createContext<MarsbaseVesting | undefined>(undefined)

export const MarsbaseVestingProvider: React.FC<React.PropsWithChildren<{ address: string }>> = props =>
{
	const provider = useEthProvider()

	const contract = React.useMemo(() => MarsbaseVesting__factory.connect(props.address, provider), [provider, props.address])

	return (
		<MarsbaseVestingContext.Provider value={contract}>
			{props.children}
		</MarsbaseVestingContext.Provider>
	)
}

export const MarsbaseTokenContext = React.createContext<MarsbaseToken | undefined>(undefined)

export const MarsbaseTokenProvider: React.FC<React.PropsWithChildren<{ address: string }>> = props =>
{
	const provider = useEthProvider()

	const contract = React.useMemo(() => MarsbaseToken__factory.connect(props.address, provider), [provider, props.address])

	return (
		<MarsbaseTokenContext.Provider value={contract}>
			{props.children}
		</MarsbaseTokenContext.Provider>
	)
}

export const useMarsbaseContracts = () =>
{
	const token = React.useContext(MarsbaseTokenContext)
	const vesting = React.useContext(MarsbaseVestingContext)

	if (!token || !vesting)
		throw new Error("useMarsbaseContracts must be used within a MarsbaseTokenProvider and MarsbaseVestingProvider")

	return { token, vesting }
}
