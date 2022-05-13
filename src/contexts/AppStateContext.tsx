import React, { ReactNode } from "react"
import { createApi } from "../api"
import { SCREEN_DATA, HANDLERS } from "../data"

export const AppStateContext = React.createContext({
	data: SCREEN_DATA,
	handlers: HANDLERS
})

export const AppStateProvider: React.FC<{ children: ReactNode }> = props =>
{
	let state = React.useMemo(() => ({
		data: SCREEN_DATA,
		handlers: HANDLERS,
	}), [])

	let api = React.useMemo(() => createApi("0xCcb684ACA4068D75692f3414328A65A65BBc2A09", "0xcFE1A80bc0de6723c955fB496520cEF3f52072C0", window.ethereum), [window.ethereum])
	state.handlers.onClaim = api.requestClaimOneSignature
	// state.handlers.onClaimAll = api.requestClaimAllSignature

	return (
		<AppStateContext.Provider value={state}>
			{props.children}
		</AppStateContext.Provider>
	)
}
