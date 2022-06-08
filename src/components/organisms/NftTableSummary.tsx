import React, {FC, ReactNode} from "react"

import {SummaryDestributionWrapper, SummaryTotalUnclaimedWrapper} from "../molecules"
import {style} from "typestyle"
import {useContext} from "react"
import {AppStateContext} from "../../contexts/AppStateContext"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

interface INftTableSummary {
    distributionAmount: number;
    isMobile: boolean;
    onClaimAll: () => void;
    unclaimedTotal: number;
    token: string;
}

const NftTableSummary: FC<INftTableSummary> = (
    {
        distributionAmount,
        isMobile,
        onClaimAll,
        unclaimedTotal,
        token
    }) => {

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
    const {data, handlers} = useContext(AppStateContext)

    const isMobile = useMediaQuery(Queries.mobile)

    return <NftTableSummary
        distributionAmount={data.distributionAmount}
        token={data.token}
        unclaimedTotal={data.unclaimedTotal}
        onClaimAll={handlers.onClaimAll}
        isMobile={isMobile}
    />
}

export default NftTableSummary
