import React, {FC, ReactNode, useContext} from "react";
import {AppStateContext} from "../../contexts/AppStateContext";
import {NftTableSummary} from "../organisms/NftTableSummary";
import {ClaimRewardsModalLocalized} from "../molecules/ClaimRewardsModal";
import {useModal} from "../../hooks/modal";

export const NftTableSummaryWrapper = () => {
    const {data} = useContext(AppStateContext);
    const [Modal, visible, setVisible] = useModal();

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
                    all
                    onClose={() => setVisible(false)}
                    token={'MBase'}
                    amount={3600000}
                    availableForClaim={123123123}
                    onClaim={() => console.log('on claim click')}
                    btnClaimLoad={false}
                    kind={'silver'}
                    onAvailableForClaimChange={e => console.log(e)}
                />
            </Modal>
        </>
    )
}