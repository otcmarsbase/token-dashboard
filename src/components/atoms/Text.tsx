import React, {FC, ReactNode} from "react"
import PlasmicText, {TextProps} from '../Text';

export const Text: FC<{children: ReactNode} & TextProps> = ({children, ...props}) => {
	return <PlasmicText {...props}>{children}</PlasmicText>
}