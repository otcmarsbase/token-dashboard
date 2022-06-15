import React from "react"

import {FC} from "react"
import {NftTableProps} from "./types";
import TableSorterState from "../stateful/TableSorterState";
import {NftsContainer} from "../stateful/NftContainer";
import Container from "../Container";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {HowIsLocalized} from "../molecules/HowIsDistributionDone";

export const NftTable: FC<NftTableProps> = ({nfts, onClaim, onActions}) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    const isDesktop = (!isMobile && !isTablet);

    return (
        <Container align={'start'} gapRow={'_30'}>
            <Container
                backgroud={isDesktop ? 'dark2': undefined  }
                padding={'_10'}
                borderRadius={'_8'}
            >
                {isDesktop && <TableSorterState/>}
                <NftsContainer
                    nfts={nfts}
                    onClaim={onClaim}
                    onActions={onActions}
                />
            </Container>
        </Container>

    )
}

