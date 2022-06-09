import React from "react"

export const GlobalErrorHandlersContext = React.createContext({
	log: (err: unknown) =>
	{
		console.error(err)
	},
	critical: (err: unknown) =>
	{
		throw err
	}
})

export const useErrorHandlers = () => React.useContext(GlobalErrorHandlersContext)
