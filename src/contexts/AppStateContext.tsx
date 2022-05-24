import React, {ReactNode, useEffect, useState} from "react"
import {SCREEN_DATA, HANDLERS} from "../data"
import { useEthersAccount } from "../hooks/jrpc-provider"
import { useMarsbaseContracts } from "../hooks/mbase-contract"

export const AppStateContext = React.createContext({
    data: SCREEN_DATA,
    handlers: HANDLERS
})

export const AppStateProvider: React.FC<{ children: ReactNode }> = props => {
    let state = React.useMemo(() => ({
        data: SCREEN_DATA,
        handlers: HANDLERS,
    }), [])

	let account = useEthersAccount()

	let contracts = useMarsbaseContracts()

	if (!account)
		return <>Not Logged in</>

	let acc = account

    state.handlers.onClaim = async nftId =>
	{
		let tx = await contracts.vesting.populateTransaction["unvest(uint256)"](nftId)
		acc.signAndSendTx(tx)
	}
    // state.handlers.onClaimAll = api.requestClaimAllSignature

    return (
        <AppStateContext.Provider value={state}>
            {props.children}
        </AppStateContext.Provider>
    )
}
