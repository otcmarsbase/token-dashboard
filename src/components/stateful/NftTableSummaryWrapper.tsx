import React, {FC, ReactNode, useContext} from "react";
import {AppStateContext} from "../../contexts/AppStateContext";
import {NftTableSummary} from "../organisms/NftTableSummary";
import {useModal} from "../../hooks/modal";
import {ClaimRewardsModalLocalized} from "../molecules/ClaimRewardsModal";

export const NftTableSummaryWrapper = () => {
    const {data, handlers} = useContext(AppStateContext);
    const [Modal, visible, setVisible] = useModal('claimAllRewards')

    return (
        <>
            <NftTableSummary
                distributionAmount={data.distributionAmount}
                token={data.token}
                unclaimedTotal={data.unclaimedTotal}
                onClaimAll={() => setVisible(true)}
            />
            <Modal>
                <ClaimRewardsModalLocalized
                    onClose={() => setVisible(false)}
                    token={'MBase'}
                    amount={3600000}
                />
            </Modal>
        </>

    )
}