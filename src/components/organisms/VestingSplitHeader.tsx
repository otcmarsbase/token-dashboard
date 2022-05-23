import React from 'react';
import VestingOverview from "../molecules/VestingOverview";
import VestingActions from "../molecules/VestingActions";
import {style} from 'typestyle';

const container = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
})

const VestingSplitHeader = () => {
    return (
        <div className={container}>
            <VestingOverview/>
            <VestingActions/>
        </div>
    );
};

export default VestingSplitHeader;