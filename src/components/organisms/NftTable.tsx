import React, { PropsWithChildren } from "react"

import {useContext, FC, ReactNode} from "react"
import {DictionaryContext} from "../../contexts/DictionaryContext"

import {Table, TableRow, TableHead, TableData} from "../templates/TokenDashboardTemplate"
import {TagLabelColors} from "../atoms/Label"
import ConnectWallet from "../molecules/ConnectWallet";
import {style} from "typestyle";
import NftCardMobile from "../molecules/NftCardMobile";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import TableLoading from "../molecules/TableLoading";
import { ColumnSorter } from "../molecules/ColumnSorter"
import { NftAvailableClaimWrapper } from "../molecules/NftAvailableClaim"
import { NftOverviewWrapper } from "../molecules/NftOverview"
import { NftProgressWrapper } from "../molecules/NftProgress"


export type INftStatic = {
	id: string
	kind: TagLabelColors
	amount: string
	amountUsd: string
	token: string
	price: string
	started: string
    end: string
}
export type INftDynamic = {
	locked: string
	unclaimed: string
	percentComplete: number
	timePassed: string
	timeLeft: string
	available: string
	availableUsd: string
}
export type INft = INftStatic & INftDynamic

interface NftTableProps {
    columnsSorterNames: ReactNode[]
    nfts: INft[]
    onClaim: (nftId: string) => void
    onActions: (nftId: string) => void
}

const MobileNftContainer: React.FC<PropsWithChildren<{}>> = props =>
{
	const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

	return (
		<div className={mobileNftContainer(isMobile, isTablet)}>
			{props.children}
		</div>
	)
}

export const NftCardDesktop: FC<{ nft: INft, onClaim: () => void, onActions: () => void }> = ({ nft, ...props }) => (
	<TableRow key={nft.id}>
		<TableData justifyContent={'start'}>
			<NftOverviewWrapper
				amount={nft.amount}
				token={nft.token}
				buyPrice={nft.price}
				unvestStartTimestamp={nft.started}
				kind={nft.kind}
				usdValue={nft.amountUsd}
			/>
		</TableData>
		<TableData justifyContent={'center'}>
			<NftProgressWrapper
				amount={nft.amount}
				token={nft.token}
				locked={nft.locked}
				percentComplete={nft.percentComplete}
				timePassed={nft.timePassed}
				timeLeft={nft.timeLeft}
			/>
		</TableData>
		<TableData justifyContent={'end'}>
			<NftAvailableClaimWrapper
				onClaim={props.onClaim}
				onActions={props.onActions}
				available={nft.unclaimed}
				availableUsd={nft.availableUsd}
				token={nft.token}
			/>
		</TableData>
	</TableRow>
)

export const NftTable: FC<NftTableProps> = ({columnsSorterNames, nfts, onClaim, onActions}) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    if (isMobile || isTablet) {
        return (
            <MobileNftContainer>
                {nfts.map((nft) =>
                    <NftCardMobile
                        key={nft.id}
                        onClaim={onClaim}
                        onActions={onActions}
                        {...nft}
                    />
                )}
            </MobileNftContainer>
        )
    }

    return (
        <Table>
            <thead>
				<TableRow main={false}>
					{columnsSorterNames.map((name, index) => (
						<TableHead key={index}>
							<ColumnSorter text={name}/>
						</TableHead>
					))}
				</TableRow>
            </thead>
            <tbody className={styledTBody}>
				{nfts.map((nft) => (
					<NftCardDesktop
						key={nft.id}
						nft={nft}
						onClaim={() => onClaim(nft.id)}
						onActions={() => onActions(nft.id)}
					/>
				))}
            </tbody>
        </Table>
    )
}

const styledTBody = style({
    display: 'flex',
    flexDirection: 'column'
})

const mobileNftContainer = (isMobile: boolean, isTablet: boolean) => style({
    display: 'grid',
    gridTemplateColumns: `repeat(${isMobile ? '1' : '2'}, 1fr)`,
    gap: isTablet ? '16px' : '32px',
})

type NftTableLocalizedProps = Omit<NftTableProps, "columnsSorterNames">

export const NftTableLocalized: FC<NftTableLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext)

    return <NftTable {...props} columnsSorterNames={nft.dashboard.nft_table.headers}/>
}

interface NftTableWrapperProps {
    nfts: INft[]
    onClaim: (nftId: string) => void
    onActions: (nftId: string) => void
    loading: boolean;
}

export const NftTableWrapper: FC<NftTableWrapperProps> = (props) => {
    const walletExist = true;

    if (!walletExist) {
        return <ConnectWallet/>
    }

    if (props.loading) {
        return (
            <TableLoading/>
        )
    }

    return <NftTableLocalized {...props} />
}



export default NftTable
