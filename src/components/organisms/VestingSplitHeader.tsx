import React from 'react';

import {style} from 'typestyle';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {VestingSplitOverviewLocalized} from "../molecules/VestingSplitOverview";
import {VestingActionsLocalized} from "../molecules/VestingActions";

const VestingSplitHeader = () => {
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div className={container(isMobile, isTablet)}>
            <VestingSplitOverviewLocalized/>
            <VestingActionsLocalized token={'MBase'} onBuyNow={() => null} onSellWithPremium={() => null}/>
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