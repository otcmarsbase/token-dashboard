import React from "react"
import { useMetamask } from "use-metamask"

// react HOC that returns a placeholder if user has not connected metamask
export const withConnectedMetamask = <T extends {}>(Component: React.FC<T>, Placeholder: React.FC): React.FC<T> => (props: T) => {
	const metamask = useMetamask()
	return metamask.metaState.isConnected ? <Component {...props} /> : <Placeholder />
}

export const withInstalledMetamask = <T extends {}>(Component: React.FC<T>, Placeholder: React.FC): React.FC<T> => (props: T) => {
	const metamask = useMetamask()
	return metamask.metaState.isAvailable ? <Component {...props} /> : <Placeholder />
}
