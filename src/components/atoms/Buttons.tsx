import React from "react"

import {ButtonHTMLAttributes, FC, ReactNode} from "react"
import {style} from "typestyle"

const styledButtonRed = style({
    padding: "5px",
    backgroundColor: "darkred",
    borderRadius: "5px",
    color: "white"
})
export const ButtonRed: FC<{ children: ReactNode, onClick: () => void }> = ({children, onClick}) => {
    return <button onClick={onClick} className={styledButtonRed}>{children}</button>
}

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
