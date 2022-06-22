import React from 'react';

import VestingSplitHeader from "../organisms/VestingSplitHeader";
import {style} from "typestyle";
import NftView from "../organisms/NftView";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import VestingSplitNavbar from "../organisms/TokenDasboardNavbar";
import RootContainer from "../RootContainer";
import VestingToSplit from "../organisms/VestingToSplit";
import {VestingSplitStepsLocalized} from '../organisms/VestingSplitSteps';
import Container from "../Container";

export const VestingSplit = () => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);
    const isDesktop = (!isMobile || !isTablet)

    return (
        <RootContainer>
            <VestingSplitHeader/>
            <VestingSplitStepsLocalized/>
            {/*<IsBeingSplitted/>*/}
            {/*<SplitError/>*/}
            {/*<SuccessfullySplitted/>*/}
            <div className={body(isTablet)}>
                <NftView/>
                <VestingToSplit/>
                {/*<VestingSplitDetails title="test title"/>*/}
            </div>
            <VestingSplitNavbar/>
            {/*<SelectNftModal/>*/}
        </RootContainer>
    );
};

const body = (isTablet: boolean) => style({
    display: 'flex',
    flexDirection: isTablet ? 'column' : 'row',
    gap: '20px',
})



export default VestingSplit;