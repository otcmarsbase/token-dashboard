import React, {FC} from 'react';
import {TableRow} from "../templates/TokenDashboardTemplate";
import NftOverviewData from "./NftOverviewData";
import NftProgressData from "./NftProgressData";
import NftAvailableClaimData from "./NftAvailableClaimData";
import {INft} from "../organisms/types";

const NftCardDesktop: FC<{ nft: INft, onClaim: () => void, onActions: () => void }> = (
    {
        nft,
        ...props
    }) => {
    const commonData = {
        amount: nft.amount,
        token: nft.token
    }
    return (
        <TableRow key={nft.id}>
            <NftOverviewData
                {...commonData}
                amountUsd={nft.amountUsd}
                kind={nft.kind}
                price={nft.price}
                started={nft.started}
            />
            <NftProgressData
                {...commonData}
                locked={nft.locked}
                percentComplete={nft.percentComplete}
                timePassed={nft.timePassed}
                timeLeft={nft.timePassed}
            />
            <NftAvailableClaimData
                token={nft.token}
                unclaimed={nft.unclaimed}
                availableUsd={nft.availableUsd}
                onClaim={props.onClaim}
                onActions={props.onActions}
            />
        </TableRow>
    )
}

export default NftCardDesktop;