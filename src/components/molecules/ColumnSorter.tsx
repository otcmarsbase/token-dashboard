import React from "react"

import { FC, ReactNode } from "react"
import { style } from "typestyle"
import {IconExtraSmall, Text} from "../atoms"
import sorterIcon from '../../assets/sorterIcon.png';

interface ColumnSorterProps {
	text: ReactNode;
	index: number;
}

export const ColumnSorter: FC<ColumnSorterProps> = ({ text, index }) => {
	return (
		<div className={container(index)}>
			<Text colors={'gray'} size={'_12'}>{text}</Text>
			<img src={sorterIcon} style={{height: '12px'}} alt=""/>
		</div>
	)
}

const container = (index: number) => style({
	display: "flex",
	gap: "5px",
	alignItems: 'center',
	justifyContent: index === 2 ? 'end' : 'start',
	marginRight: index === 2 ? '180px' : 'unset',
})
