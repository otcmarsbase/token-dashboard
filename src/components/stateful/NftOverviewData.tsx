import React, {FC} from 'react';
import {TableData} from "../templates/TokenDashboardTemplate";
import {NftOverviewWrapper} from "../molecules/NftOverview";
import {INft} from "../organisms/types";

const NftOverviewData: FC<Pick<INft, "amount" | "token" | 'price' | 'started' | 'kind' | 'amountUsd'>> = (props) => {
    return (
        <TableData justifyContent={'start'}>
            <NftOverviewWrapper
                amount={props.amount}
                token={props.token}
                buyPrice={props.price}
                unvestStartTimestamp={props.started}
                kind={props.kind}
                usdValue={props.amountUsd}
            />
        </TableData>
    )
}

export default NftOverviewData;