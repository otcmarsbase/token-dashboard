import React, {FC} from "react"

import {SummaryDestributionWrapper} from "../molecules/SummaryDestribution"
import {style} from "typestyle"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {SummaryTotalUnclaimedWrapper} from "../stateful/SummaryTotalUnclaimedWrapper";
import Container from "../Container";
import {useModal} from "../../hooks/modal";

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
            mb={"_10"}
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

