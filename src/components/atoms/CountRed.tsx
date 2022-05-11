import React, {FC, ReactNode} from "react"
import { style } from "typestyle"
import { COLORS } from "./colors"

export const container = style({
	backgroundColor: COLORS.red._,
	color: COLORS.red.dark,
	padding: "2px"
})

export const CountRed: FC<{children: ReactNode}> = ({ children }) => {
	return <div className={container}>{children}</div>
}
