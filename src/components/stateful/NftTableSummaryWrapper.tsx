import React, {FC, ReactNode, useContext} from "react";
import {AppStateContext} from "../../contexts/AppStateContext";
import {NftTableSummary} from "../organisms/NftTableSummary";

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