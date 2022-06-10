import React, {FC} from 'react';
import {TableData} from "../templates/TokenDashboardTemplate";
import {INft} from "../organisms/types";
import {NftAvailableClaimLocalized} from "../molecules/NftAvailableClaim";

const NftAvailableClaimData: FC<Pick<INft, "unclaimed" | "availableUsd" | 'token'> & { onClaim: () => void, onActions: () => void }> = (props) => {
    return (
        <TableData justifyContent={'end'}>
            <NftAvailableClaimLocalized
                onClaim={props.onClaim}
                onActions={props.onActions}
                available={props.unclaimed}
                availableUsd={props.availableUsd}
                token={props.token}
            />
        </TableData>
    );
};

export default NftAvailableClaimData;