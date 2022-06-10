import React from 'react';

import VestingSplitHeader from "../organisms/VestingSplitHeader";
import VestingSplitSteps from "../organisms/VestingSplitSteps";
import {style} from "typestyle";
import NftView from "../organisms/NftView";
import VestingSplitDetails from "../organisms/VestingSplitDetails";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import VestingSplitNavbar from "../organisms/TokenDasboardNavbar";

const VestingSplit = () => {
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div className={container}>
            <VestingSplitHeader/>
            <VestingSplitSteps/>
            {/*<IsBeingSplitted/>*/}
            {/*<SplitError/>*/}
            {/*<SuccessfullySplitted/>*/}
            <div className={body(isTablet)}>
                <NftView/>
                {/*<VestingToSplit/>*/}
                <VestingSplitDetails title="test title"/>
            </div>
            {(isTablet || isMobile) && <VestingSplitNavbar/>}
            {/*<SelectNftModal/>*/}
        </div>
    );
};

const container = style({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1433px',
    width: '100%',
    margin: 'auto',
    position: 'relative',
})

const body = (isTablet: boolean) => style({
    display: 'flex',
    flexDirection: isTablet ? 'column' : 'row',
    gap: '20px',
})



export default VestingSplit;