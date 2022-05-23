import React from "react"
import PlasmicButton, {ButtonProps} from "../Button"

import {FC, ReactNode} from "react"

export const Button: FC<{ children: ReactNode} & ButtonProps> = ({children, onClick, ...props}) => {
    return <PlasmicButton {...props} onClick={onClick}>{children}</PlasmicButton>
}
