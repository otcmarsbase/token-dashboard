import React, { PropsWithChildren } from "react"

import {ButtonHTMLAttributes, FC, ReactNode} from "react"
import {style} from "typestyle"

const styledButton = style({
    padding: "5px",
    borderRadius: "5px",
    backgroundColor: "black",
    color: "white"
})
export const Button: FC<{children: ReactNode, onClick: () => void }> = ({children, onClick}) => {
    return <button onClick={onClick} className={styledButton}>{children}</button>
}
export const ButtonGradient: FC<{children: ReactNode, onClick: () => void }> = ({children, onClick}) => {
    const graientButton = style({
        padding: "10px",
        borderRadius: "10px",
        background: "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
        color: "white"
    })
    return <button onClick={onClick} className={graientButton}>{children}</button>
}
