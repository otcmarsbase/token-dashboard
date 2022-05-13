import React from "react"

import { FC, ReactNode, useContext } from "react"
import { style } from "typestyle"
import { Text } from "../atoms"
import { DictionaryContext } from "../../contexts/DictionaryContext"

interface TablePaginationProps {
	prevText: ReactNode
	nextText: ReactNode
	startNumbers: ReactNode[]
	endNumbers: ReactNode[]
}

export const TablePagination: FC<TablePaginationProps> = ({ prevText, nextText, startNumbers, endNumbers }) => {
	const container = style({})

	return (
		<div className={container}>
			<Text>{prevText}</Text>
			{startNumbers?.map((prevNumber, index) => (
				<Text key={index}>{prevNumber}</Text>
			))}
			<Text>...</Text>
			{endNumbers?.map((prevNumber, index) => (
				<Text key={index}>{prevNumber}</Text>
			))}
			<Text>{nextText}</Text>
		</div>
	)
}


type TablePaginationLocalizedProps = Omit<TablePaginationProps, "prevText" | "nextText">

export const TablePaginationLocalized: FC<TablePaginationLocalizedProps> = (props) => {
	const { nft } = useContext(DictionaryContext)

	return <TablePagination {...props} prevText={nft.dashboard.pagination.prev}
													nextText={nft.dashboard.pagination.next} />
}

interface TablePaginationWrapperProps {
	startNumbers: number[];
	endNumbers: number[];
}

export const TablePaginationWrapper: FC<TablePaginationWrapperProps> = (props) => {
	return <TablePaginationLocalized {...props} startNumbers={props.startNumbers} endNumbers={props.endNumbers}/>
}
