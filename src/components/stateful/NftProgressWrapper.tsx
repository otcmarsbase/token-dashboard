import React, {FC} from "react";
import {NftProgressLocalized} from "../molecules/NftProgress";
import {NftProgressWrapperProps} from "./types";

export const NftProgressWrapper: FC<NftProgressWrapperProps> = (props) => {
    const percentLeft = 100 - props.percentComplete;
    const percentComplete = props.percentComplete;
    const amount = parseFloat(props.amount) - parseFloat(props.locked);

    return <NftProgressLocalized
        {...props}
        amount={amount}
        percentLeft={percentLeft}
        percentComplete={percentComplete}/>
}