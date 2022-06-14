import React from "react"

import {FC} from "react"
import {NftTableProps} from "./types";
import TableSorterState from "../stateful/TableSorterState";
import {NftsContainer} from "../stateful/NftContainer";
import Container from "../Container";

export const NftTable: FC<NftTableProps> = ({nfts, onClaim, onActions}) => {
    return (
        <Container backgroud={'mobileCard'} padding={'_10'}>
            <TableSorterState/>
            <NftsContainer
                nfts={nfts}
                onClaim={onClaim}
                onActions={onActions}
            />
        </Container>
    )
}

