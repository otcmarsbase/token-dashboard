import React from "react"

import {FC} from "react"
import {NftTableProps} from "./types";
import TableSorterState from "../stateful/TableSorterState";
import {NftsContainer} from "../stateful/NftContainer";
import Container from "../Container";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

export const NftTable: FC<NftTableProps> = ({nfts, onClaim, onActions}) => {
    const isMobile = useMediaQuery(Queries.mobile);

    return (
        <Container align={'start'} gapRow={'_30'}>
            <Container
                backgroud={!isMobile ? 'dark2': undefined  }
                borderRadius={'_8'}
                padding={!isMobile ? '_10' : undefined}
            >
                <NftsContainer
                    nfts={nfts}
                    onClaim={onClaim}
                    onActions={onActions}
                />
            </Container>
        </Container>

    )
}

