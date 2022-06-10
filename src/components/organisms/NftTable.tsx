import React from "react"

import {FC} from "react"
import {NftTableProps} from "./types";
import {Table} from "../templates/TokenDashboardTemplate";
import TableSorterRow from "../stateful/TableSorterRow";
import StyledTBody from "../molecules/StyledTBody";
import NftCardDesktopData from "../stateful/NftCardDesktopData";
import {MobileNftsContainer} from "../stateful/MobileNftContainer";

export const NftTable: FC<NftTableProps> = ({nfts, onClaim, onActions}) => {
    return (
        <>
            <Table>
                <thead>
                <TableSorterRow/>
                </thead>
                <StyledTBody>
                    <NftCardDesktopData nfts={nfts} onClaim={onClaim} onActions={onActions}/>
                </StyledTBody>
            </Table>
            <MobileNftsContainer
                nfts={nfts}
                onClaim={onClaim}
                onActions={onActions}
            />
        </>
    )
}

