import React, {FC} from "react"

import {SummaryDestributionWrapper} from "../molecules/SummaryDestribution"
import {style} from "typestyle"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {SummaryTotalUnclaimedWrapper} from "../stateful/SummaryTotalUnclaimedWrapper";
import Container from "../Container";

interface INftTableSummary {
    distributionAmount: number;
    onClaimAll: () => void;
    unclaimedTotal: number;
    token: string;
}

export const NftTableSummary: FC<INftTableSummary> = (
    {
        distributionAmount,
        onClaimAll,
        unclaimedTotal,
        token
    }) => {

    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);
    const isDesktop = useMediaQuery(Queries.tablet);

    return (
        <Container direction={isMobile ? undefined :'horizontal'} justify={'between'}>
            <SummaryDestributionWrapper count={distributionAmount}/>
            <SummaryTotalUnclaimedWrapper
                onClaimAll={onClaimAll}
                unclaimedAmount={unclaimedTotal}
                token={token}
            />
        </Container>
    )
}

const container = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
})

