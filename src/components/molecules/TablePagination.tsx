import React from "react"

import { FC, ReactNode, useContext } from "react"
import { style } from "typestyle"
import { BodyText } from "../atoms"
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
			<BodyText>{prevText}</BodyText>
			{startNumbers?.map((prevNumber, index) => (
				<BodyText key={index}>{prevNumber}</BodyText>
			))}
			<BodyText>...</BodyText>
			{endNumbers?.map((prevNumber, index) => (
				<BodyText key={index}>{prevNumber}</BodyText>
			))}
			<BodyText>{nextText}</BodyText>
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
