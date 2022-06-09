import React, {FC} from "react"

import {SummaryDestributionWrapper} from "../molecules/SummaryDestribution"
import {SummaryTotalUnclaimedWrapper} from "../molecules/SummaryTotalUnclaimed"
import {style} from "typestyle"
import {useContext} from "react"
import {AppStateContext} from "../../contexts/AppStateContext"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

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
        <div className={container(isMobile)}>
            <SummaryDestributionWrapper count={distributionAmount}/>
            <SummaryTotalUnclaimedWrapper
                onClaimAll={onClaimAll}
                unclaimedAmount={unclaimedTotal}
                token={token}
            />
        </div>
    )
}

const container = (isMobile: boolean) => style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: isMobile ? 'column-reverse' : 'unset'
})

export const NftTableSummaryWrapper = () => {
    const {data, handlers} = useContext(AppStateContext);

    return (
        <NftTableSummary
            distributionAmount={data.distributionAmount}
            token={data.token}
            unclaimedTotal={data.unclaimedTotal}
            onClaimAll={handlers.onClaimAll}
        />
    )
}

