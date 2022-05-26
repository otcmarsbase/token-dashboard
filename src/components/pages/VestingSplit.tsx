import React from 'react';

import VestingSplitHeader from "../organisms/VestingSplitHeader";
import VestingSplitSteps from "../organisms/VestingSplitSteps";
import {style} from "typestyle";
import NftView from "../organisms/NftView";
import VestingSplitDetails from "../organisms/VestingSplitDetails";
import IsBeingSplitted from "../molecules/IsBeingSplitted";
import VestingToSplit from "../organisms/VestingToSplit";
import SplitError from "../molecules/SplitError";
import SuccessfullySplitted from "../molecules/SuccessfullySplitted";

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
            {/*<IsBeingSplitted/>*/}
            {/*<SplitError/>*/}
            <SuccessfullySplitted/>
            {/*<div className={body}>*/}
            {/*    <NftView/>*/}
            {/*    <VestingToSplit/>*/}
            {/*    <VestingSplitDetails/>*/}
            {/*</div>*/}
        </div>
    );
};

export default VestingSplit;