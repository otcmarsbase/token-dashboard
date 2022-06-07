import React from "react"

import { FC, ReactNode } from "react"
import { style } from "typestyle"
import {IconExtraSmall, Text} from "../atoms"
import sorterIcon from '../../assets/sorterIcon.png';

interface ColumnSorterProps {
	text: ReactNode;
}

export const ColumnSorter: FC<ColumnSorterProps> = ({ text }) => {
	return (
		<div className={container}>
			<Text colors={'gray'} size={'_12'}>{text}</Text>
			<img src={sorterIcon} style={{height: '12px'}} alt=""/>
		</div>
	)
}

const container = style({
	display: "flex",
	gap: "5px",
	alignItems: 'center',
	justifyContent: 'start',
})
