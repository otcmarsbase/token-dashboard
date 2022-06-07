import React from "react"

import { FC, ReactNode, useContext } from "react"
import { style } from "typestyle"
import {Count, Text} from "../atoms"
import { DictionaryContext } from "../../contexts/DictionaryContext"

interface TablePaginationProps {
	prevText: ReactNode
	nextText: ReactNode
	startNumbers: ReactNode[]
	endNumbers: ReactNode[]
}

export const TablePagination: FC<TablePaginationProps> = ({ prevText, nextText, startNumbers, endNumbers }) => {
	return (
		<div className={container}>
			<div className={numbers}>
				<Text size={'_12'} colors={'gray'}>
					<span style={{fontWeight: 600}}>Prev</span>
				</Text>
				<Text size={'_12'} colors={'gray'}>
					<span style={{fontWeight: 600}}>1</span>
				</Text>
				<Text size={'_12'} colors={'gray'}>
					<span style={{fontWeight: 600}}>2</span>
				</Text>
				<Text size={'_12'} colors={'red'}>
					<span style={{fontWeight: 600}}>3</span>
				</Text>
				<Text size={'_12'} colors={'gray'}>
					<span style={{fontWeight: 600}}>...</span>
				</Text>
				<Count>
					<Text size={'_12'} weight={'semiBold'}>25</Text>
				</Count>
				<Text size={'_12'} colors={'gray'}>
					<span style={{fontWeight: 600}}>25</span>
				</Text>
				<Text size={'_12'} colors={'gray'}>
					<span style={{fontWeight: 600}}>26</span>
				</Text>
				<Text size={'_12'} colors={'gray'}>
					<span style={{fontWeight: 600}}>Next</span>
				</Text>
			</div>
		</div>
	)
}

const container = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%'
})

const numbers = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '300px'
})


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
