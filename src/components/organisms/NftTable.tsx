import React from "react"

import {FC} from "react"
import {NftTableProps} from "./types";
import TableSorterState from "../stateful/TableSorterState";
import {NftsContainer} from "../stateful/NftContainer";
import Container from "../Container";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

export const NftTable: FC<NftTableProps> = ({nfts, onClaim, onActions}) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    const isNotDesktop = (isMobile || isTablet);

    return (
        <Container backgroud={isNotDesktop ? undefined : 'dark2'} padding={'_10'} borderRadius={'_8'}>
            {!isNotDesktop && <TableSorterState/>}
            <NftsContainer
                nfts={nfts}
                onClaim={onClaim}
                onActions={onActions}
            />
        </Container>
    )
}

