import React from "react"

import {useContext, FC, ReactNode} from "react"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {
    ColumnSorter,
    NftOverviewWrapper,
    NftProgressWrapper,
    NftAvailableClaimWrapper,
    TablePaginationWrapper
} from "../molecules"
import {Table, TableRow, TableHead, TableData, TableFooter} from "../templates/TokenDashboardTemplate"
import {TagLabelColors} from "../atoms"
import {BigNumber, FixedNumber} from "ethers"
import ConnectWallet from "../molecules/ConnectWallet";
import {style} from "typestyle";
import NftCardMobile from "../molecules/NftCardMobile";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {ClipLoader} from "react-spinners";
import TableLoading from "../molecules/TableLoading";


export interface INft {
	id: string
	kind: TagLabelColors
	amount: string
	amountUsd: string
	token: string
	price: string
	started: string
	locked: string
	unclaimed: string
	percentComplete: number
	timePassed: string
	timeLeft: string
	available: string
	availableUsd: string

    unclaimedIncPerSec?: FixedNumber
}

interface NftTableProps {
    columnsSorterNames: ReactNode[]
    nfts: INft[]
    onClaim: (nftId: string) => void
    onActions: (nftId: string) => void
}

export const NftTable: FC<NftTableProps> = ({columnsSorterNames, nfts, onClaim, onActions}) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    if (isMobile || isTablet) {
        return (
            <div className={mobileNftContainer(isMobile, isTablet)}>
                {nfts?.map((nft) =>
                    <NftCardMobile
                        key={nft.id}
                        onClaim={onClaim}
                        onActions={onActions}
                        {...nft}
                    />
                )}
            </div>
        )
    }

    return (
        <Table>
            <thead>
            <TableRow main={false}>
                {columnsSorterNames?.map((columnSorterName, index) => (
                    <TableHead key={index}>
                        <ColumnSorter text={columnSorterName}/>
                    </TableHead>
                ))}
            </TableRow>
            </thead>
            <tbody className={styledTBody}>
            {nfts?.map((nft) => (
                <TableRow key={nft.id}>
                            <span style={{color: 'white'}}>{nft.unclaimed}</span> 

                    <TableData justifyContent={'start'}>
                        <NftOverviewWrapper
                            amount={nft.amount.toString()}
                            token={nft.token}
                            buyPrice={nft.price.toString()}
                            unvestStartTimestamp={nft.started}
                            kind={nft.kind}
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
                            available={nft.available}
                            availableUsd={nft.availableUsd}
                            token={nft.token}
                        />
                    </TableData>
                </TableRow>
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
