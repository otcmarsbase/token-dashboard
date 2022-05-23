import React from 'react';

import VestingSplitHeader from "../organisms/VestingSplitHeader";
import VestingSplitSteps from "../organisms/VestingSplitSteps";
import {style} from "typestyle";
import NftDetails from "../organisms/NftDetails";
import VestingAsset from "../organisms/VestingAsset";

const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '1200px',
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
                <NftDetails/>
                <VestingAsset/>
            </div>
        </div>
    );
};

export default VestingSplit;