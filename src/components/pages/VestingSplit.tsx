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
import {useMediaQuery} from "../../hooks/mediaQuery";
import {Text} from '../atoms';
import VestingSplitNavbar from "../organisms/VestingSplitNavbar";

const VestingSplit = () => {
    const isMobile = useMediaQuery('(max-width: 375px)')
    const isTablet = useMediaQuery('(max-width: 768px)')

    return (
        <div className={container}>
            <VestingSplitHeader/>
            <VestingSplitSteps/>
            {/*<IsBeingSplitted/>*/}
            {/*<SplitError/>*/}
            {/*<SuccessfullySplitted/>*/}
            <div className={body(isTablet)}>
                <NftView/>
                <VestingToSplit/>
                {/*<VestingSplitDetails/>*/}
            </div>
            {(isTablet || isMobile) && <VestingSplitNavbar/>}
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