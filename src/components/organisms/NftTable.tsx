import React from "react"

import { useContext, FC, ReactNode } from "react"
import { DictionaryContext } from "../../contexts/DictionaryContext"
import {
	ColumnSorter,
	NftOverviewWrapper,
	NftProgressWrapper,
	NftAvailableClaimWrapper,
	TablePaginationWrapper
} from "../molecules"
import { Table, TableRow, TableHead, TableData, TableFooter } from "../templates/TokenDashboardTemplate"
import { TagLabelColors } from "../atoms"
import { BigNumber } from "ethers"

export interface INft {
	id: string
	kind: TagLabelColors
	amount: BigNumber
	amountUsd: BigNumber
	token: string
	price: BigNumber
	started: string
	locked: BigNumber
	unclaimed: BigNumber
	percentComplete: number
	timePassed: string
	timeLeft: string
	available: BigNumber
	availableUsd: BigNumber
}

interface NftTableProps {
	columnsSorterNames: ReactNode[]
	nfts: INft[]
	onClaim: (nftId: string) => void
	onActions: (nftId: string) => void
}

export const NftTable: FC<NftTableProps> = ({ columnsSorterNames, nfts, onClaim, onActions }) => {
	const startNumbers = nfts.map((nft, index) => index).slice(1, 4)
	const endNumbers = nfts.map((nft, index) => index).slice(nfts.length - 3, nfts.length)

	return (
		<Table>
			<thead>
				<TableRow main={false}>
					{columnsSorterNames?.map((columnSorterName, index) => (
						<TableHead key={index}>
							<ColumnSorter text={columnSorterName} />
						</TableHead>
					))}
				</TableRow>
			</thead>
			<tbody>
				{nfts?.map((nft) => (
					<TableRow key={nft.id}>
						<TableData justifyContent={'start'}>
							<NftOverviewWrapper
								amount={nft.amount.toString()}
								token={nft.token}
								buyPrice={nft.price.toString()}
								unvestStartTimestamp={Date.now()}
								kind={'purple'}
								usdValue={nft.availableUsd.toString()}
							/>
						</TableData>
						<TableData justifyContent={'center'}>
							<NftProgressWrapper
								amount={nft.amount.toString()}
								token={nft.token}
								locked={nft.locked.toString()}
								percentComplete={nft.percentComplete}
								timePassed={nft.timePassed}
								timeLeft={nft.timeLeft}
								progressValue="80"
								progressMax="100"
							/>
						</TableData>
						<TableData justifyContent={'end'}>
							<NftAvailableClaimWrapper
								onClaim={() => onClaim(nft.id)}
								onActions={() => onActions(nft.id)}
								amount={nft.amount.toString()}
								amountUsd={nft.amountUsd.toString()}
								token={nft.token}
							/>
						</TableData>
					</TableRow>
				))}
			</tbody>
			<TableFooter>
				<TableRow main={false}>
					<TableData justifyContent={'center'}>
						<TablePaginationWrapper startNumbers={startNumbers} endNumbers={endNumbers} />
					</TableData>
				</TableRow>
			</TableFooter>
		</Table>
	)
}

type NftTableLocalizedProps = Omit<NftTableProps, "columnsSorterNames">

export const NftTableLocalized: FC<NftTableLocalizedProps> = (props) => {
	const { nft } = useContext(DictionaryContext)

	return <NftTable {...props} columnsSorterNames={nft.dashboard.nft_table.headers} />
}

interface NftTableWrapperProps {
	nfts: INft[]
	onClaim: (nftId: string) => void
	onActions: (nftId: string) => void
}

export const NftTableWrapper: FC<NftTableWrapperProps> = (props) => {
	return <NftTableLocalized {...props} />
}

export default NftTable
