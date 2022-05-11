import React, {ReactNode} from "react"
import { SCREEN_DATA, HANDLERS } from "../data"

export const AppStateContext = React.createContext({
  data: SCREEN_DATA,
  handlers: HANDLERS
})

export const AppStateProvider: React.FC<{children: ReactNode}> = props =>
{
  let state = React.useMemo(() => ({
    data: SCREEN_DATA,
    handlers: HANDLERS,
  }), [])

  return (
    <AppStateContext.Provider value={state}>
      {props.children}
    </AppStateContext.Provider>
  )
}
