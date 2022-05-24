import React from 'react';

import VestingSplitHeader from "../organisms/VestingSplitHeader";
import VestingSplitSteps from "../organisms/VestingSplitSteps";
import {style} from "typestyle";
import NftView from "../organisms/NftView";
import VestingAsset from "../organisms/VestingAsset";

const container = style({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1433px',
    width: '100%',
    margin: 'auto'
})

const body = style({
    display: 'flex',
    gap: '20px',
})

const VestingSplit = () => {
    return (
        <div className={container}>
            <VestingSplitHeader/>
            <VestingSplitSteps/>
            <div className={body}>
                <NftView/>
                <VestingAsset/>
            </div>
        </div>
    );
};

export default VestingSplit;