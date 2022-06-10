import React, {FC} from "react"

import {SummaryDestributionWrapper} from "../molecules/SummaryDestribution"
import {style} from "typestyle"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {SummaryTotalUnclaimedWrapper} from "../stateful/SummaryTotalUnclaimedWrapper";

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

    return (
        <div className={container}>
            <SummaryDestributionWrapper count={distributionAmount}/>
            <SummaryTotalUnclaimedWrapper
                onClaimAll={onClaimAll}
                unclaimedAmount={unclaimedTotal}
                token={token}
            />
        </div>
    )
}

const container = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
})

