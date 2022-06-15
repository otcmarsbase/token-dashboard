import React, { ReactNode } from "react"
import { IScreenData, SCREEN_DATA } from "../data"
import { useCurrentUser } from "../hooks/jrpc-provider"
import { useMarsbaseContracts } from "../hooks/mbase-contract"

export type AppStateContext = {
    data: IScreenData,
}

export const AppStateContext = React.createContext<AppStateContext>({
    data: SCREEN_DATA,
})

export const AppStateProvider: React.FC<{ children: ReactNode }> = props => {

    let user = useCurrentUser()
    let contracts = useMarsbaseContracts()

    let state = React.useMemo(() => ({
        data: SCREEN_DATA,
    }), [user, contracts])

    return (
        <AppStateContext.Provider value={state}>
            {props.children}
        </AppStateContext.Provider>
    )
}
