import React from 'react';
import VestingStepCard from "../molecules/VestingStepCard";
import {style} from "typestyle";

const container = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
})

const VestingSplitSteps = () => {
    return (
        <div className={container}>
            <VestingStepCard/>
            <VestingStepCard/>
            <VestingStepCard/>
        </div>
    );
};

export default VestingSplitSteps;