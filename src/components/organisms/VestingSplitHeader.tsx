import React from 'react';
import {VestingSplitOverviewWrapper} from "../molecules/VestingSplitOverview";

import {style} from 'typestyle';
import {VestingActionsWrapper} from "../molecules/VestingActions";
import {useMediaQuery} from "../../hooks/mediaQuery";

const VestingSplitHeader = () => {
    const isMobile = useMediaQuery('(max-width: 375px)')
    const isTablet = useMediaQuery('(max-width: 768px)')

    return (
        <div className={container(isMobile)}>
            <VestingSplitOverviewWrapper/>
            <VestingActionsWrapper token={'MBase'} onBuyNow={() => null} onSellWithPremium={() => null}/>
        </div>
    );
};

const container = (isMobile: boolean) => style({
    width: '100%',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    marginBottom: '32px'
})

export default VestingSplitHeader;