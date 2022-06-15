import { BigNumber, utils } from "ethers";
import React, { FC, ReactNode, useContext } from "react";
import { NFTS_PER_TRANSACTION } from "../../config";
import { AppStateContext } from "../../contexts/AppStateContext";
import { HandlersContext } from "../../contexts/HandlersContext";
import { NftsContext } from "../../contexts/NftsContext";
import { TxSasResult, useCurrentUser } from "../../hooks/jrpc-provider";
import { useMarsbaseContracts } from "../../hooks/mbase-contract";
import { NftTableSummary } from "../organisms/NftTableSummary";

export const NftTableSummaryWrapper = () => {
    const { data } = useContext(AppStateContext)
    const { handlers } = useContext(HandlersContext);

    return (
        <NftTableSummary
            distributionAmount={data.distributionAmount}
            token={data.token}
            unclaimedTotal={data.unclaimedTotal}
            onClaimAll={handlers.onClaimAll}
        />
    )
}