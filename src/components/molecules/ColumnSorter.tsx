import React from "react"

import { FC, ReactNode } from "react"
import { style } from "typestyle"
import {IconExtraSmall, Text} from "../atoms"

interface ColumnSorterProps {
	text: ReactNode
	icon?: ReactNode
}

export const ColumnSorter: FC<ColumnSorterProps> = ({ text }) => {
	const container = style({
		display: "flex",
		gap: "5px"
	})

	return (
		<div className={container}>
			<Text colors={'red'}>{text}</Text>
			<IconExtraSmall />
		</div>
	)
}
