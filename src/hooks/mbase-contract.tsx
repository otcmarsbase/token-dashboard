import React, { useEffect, useState } from "react"

import { MarsbaseVesting__factory, MarsbaseVesting, MarsbaseToken__factory, MarsbaseToken } from "@otcmarsbase/token-contract-types"

import { useEthProvider } from "./jrpc-provider"
import { useErrorHandlers } from "./errors"
import { BigNumber } from "ethers"

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
	const errors = useErrorHandlers()
	const token = React.useContext(MarsbaseTokenContext)
	const vesting = React.useContext(MarsbaseVestingContext)

	if (!token || !vesting)
		return errors.critical(new Error("useMarsbaseContracts must be used within a MarsbaseTokenProvider and MarsbaseVestingProvider"))

	return { token, vesting }
}

export const useTokenInfo = () =>
{
	const {token} = useMarsbaseContracts()

	const [info, setInfo] = useState<{
		decimals: number,
		symbol: string,
		name: string,
		totalSupply: BigNumber
	}>()

	// useEffect hook to load decimals from MarsbaseToken contract
	useEffect(() =>
	{
		if (!token)
			return
		
		Promise.all([
			token.decimals(),
			token.symbol(),
			token.name(),
			token.totalSupply()
		]).then(([decimals, symbol, name, totalSupply]) =>
		{
			setInfo({
				decimals,
				symbol,
				name,
				totalSupply,
			})
		})
	}, [token])

	return info
}
