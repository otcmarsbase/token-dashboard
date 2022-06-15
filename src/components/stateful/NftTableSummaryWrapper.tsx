import { BigNumber, utils } from "ethers";
import React, { FC, ReactNode, useContext } from "react";
import { NFTS_PER_TRANSACTION } from "../../config";
import { AppStateContext } from "../../contexts/AppStateContext";
import { HandlersContext } from "../../contexts/HandlersContext";
import { NftsContext } from "../../contexts/NftsContext";
import { UserVestingContext } from "../../contexts/UserVestingContext";
import { TxSasResult, useCurrentUser } from "../../hooks/jrpc-provider";
import { useMarsbaseContracts } from "../../hooks/mbase-contract";
import { NftTableSummary } from "../organisms/NftTableSummary";
import { INft } from "../organisms/types";

export const NftTableSummaryWrapper = () => {
    const { data } = useContext(AppStateContext)
    const { handlers, nftsG } = useContext(UserVestingContext);

    const countTotalUnclaimed = (nfts: INft[]) => {

        let totalUnclaimed = BigNumber.from(0)

        nfts.forEach(nft => {
            /* totalUnclaimed.add(BigNumber.from(nft.unclaimed)) */
            totalUnclaimed = totalUnclaimed.add(BigNumber.from(nft.unclaimed.split('.')[0]))
        })

        return totalUnclaimed.toNumber()

    }
    
    return (
        <NftTableSummary
            distributionAmount={data.distributionAmount}
            token={data.token}
            unclaimedTotal={countTotalUnclaimed(nftsG)}
            onClaimAll={handlers.onClaimAll}
        />
    )
}