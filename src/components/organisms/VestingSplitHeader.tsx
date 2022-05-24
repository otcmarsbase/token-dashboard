import React from 'react';
import VestingSplitOverview from "../molecules/VestingSplitOverview";
import VestingActions from "../molecules/VestingActions";
import {style} from 'typestyle';

const container = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '32px'
})

const VestingSplitHeader = () => {
    return (
        <div className={container}>
            <VestingSplitOverview/>
            <VestingActions/>
        </div>
    );
};

export default VestingSplitHeader;