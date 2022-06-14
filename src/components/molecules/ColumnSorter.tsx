import React from "react"

import { FC } from "react"
import {Text} from "../atoms/Text"
import sorterIcon from '../../assets/sorterIcon.png';
import Container from "../Container";
import {ColumnSorterProps} from "./types";

export const ColumnSorter: FC<ColumnSorterProps> = ({ text, onSort }) => {
	return (
		<Container gap={"_5"} direction={'horizontal'} justify={'start'}>
			<Text colors={'gray'} size={'_12'}>{text}</Text>
			<img onClick={onSort} src={sorterIcon} style={{height: '12px'}} alt=""/>
		</Container>
	)
}
