import React from 'react';
import {VestingSplitOverviewWrapper} from "../molecules/VestingSplitOverview";

import {style} from 'typestyle';
import {VestingActionsWrapper} from "../molecules/VestingActions";

const container = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '32px'
})

const VestingSplitHeader = () => {
    return (
        <div className={container}>
            <VestingSplitOverviewWrapper/>
            <VestingActionsWrapper token={'MBase'} onBuyNow={() => null} onSellWithPremium={() => null}/>
        </div>
    );
};

export default VestingSplitHeader;