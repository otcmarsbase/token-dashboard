import React, {FC} from "react";
import {SummaryTotalUnclaimedLocalized} from "../molecules/SummaryTotalUnclaimed";
import {SummaryTotalUnclaimedWrapperProps} from "./types";

export const SummaryTotalUnclaimedWrapper: FC<SummaryTotalUnclaimedWrapperProps> = (
    {
        unclaimedAmount,
        token,
        onClaimAll
    }) => {

    return <SummaryTotalUnclaimedLocalized
        unclaimedAmount={unclaimedAmount}
        token={token}
        onClaimAll={onClaimAll}
    />
}