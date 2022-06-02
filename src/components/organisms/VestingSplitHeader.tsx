import React from 'react';
import {VestingSplitOverviewWrapper} from "../molecules/VestingSplitOverview";

import {style} from 'typestyle';
import {VestingActionsWrapper} from "../molecules/VestingActions";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

const VestingSplitHeader = () => {
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div className={container(isMobile, isTablet)}>
            <VestingSplitOverviewWrapper/>
            <VestingActionsWrapper token={'MBase'} onBuyNow={() => null} onSellWithPremium={() => null}/>
        </div>
    );
};

const container = (isMobile: boolean, isTablet: boolean) => style({
    width: '100%',
    display: 'flex',
    flexDirection: (isMobile || isTablet) ? 'column' : 'row',
    justifyContent: 'space-between',
    marginBottom: '32px'
})

export default VestingSplitHeader;