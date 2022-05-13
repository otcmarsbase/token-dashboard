import React, {FC, ReactNode} from "react"
import PlasmicCount, {CountProps} from '../Count';

export const Count: FC<{children: ReactNode} & CountProps> = ({children, ...props}) => {
	return (
		<PlasmicCount {...props}>
			{children}
		</PlasmicCount>
	)
}
