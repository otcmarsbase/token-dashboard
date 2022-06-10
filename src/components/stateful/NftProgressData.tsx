import React, {FC} from 'react';
import {TableData} from "../templates/TokenDashboardTemplate";
import {INft} from "../organisms/types";
import {NftProgressWrapper} from "./NftProgressWrapper";

const NftProgressData: FC<Pick<INft, "amount" | "token" | 'locked' | 'percentComplete' | 'timePassed' | 'timeLeft'>> = (props) => {
    return (
        <TableData justifyContent={'center'}>
            <NftProgressWrapper
                amount={props.amount}
                token={props.token}
                locked={props.locked}
                percentComplete={props.percentComplete}
                timePassed={props.timePassed}
                timeLeft={props.timeLeft}
            />
        </TableData>
    );
};

export default NftProgressData;