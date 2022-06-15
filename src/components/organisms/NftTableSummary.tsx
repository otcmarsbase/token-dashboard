import React, {FC} from "react"

import {SummaryDestributionWrapper} from "../molecules/SummaryDestribution"
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

    return (
        <Container
            mb={"_25"}
            direction={isMobile ? undefined : 'horizontal'}
            justify={'between'}
            gap={'_15'}
        >
            <SummaryDestributionWrapper count={distributionAmount}/>
            <SummaryTotalUnclaimedWrapper
                onClaimAll={onClaimAll}
                unclaimedAmount={unclaimedTotal}
                token={token}
            />
        </Container>
    )
}

