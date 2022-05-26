import React from 'react';
import VestingStepCard from "../molecules/VestingStepCard";
import {style} from "typestyle";

const container = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '32px',
    marginBottom: '66px'
})

const VestingSplitSteps = () => {
    const steps = [
        {
            active: false,
            title: 'Parameters',
            subTitle: 'Set suitable conditions'
        },
        {
            active: true,
            title: 'Split details',
            subTitle: 'Verify and approve the offer'
        },
        {
            active: false,
            title: 'Publication',
            subTitle: 'Send the offer to the market'
        }
    ]
    return (
        <div className={container}>
            {steps.map((step, index) => <VestingStepCard key={index} index={index + 1} {...step}/>)}
        </div>
    );
};

export default VestingSplitSteps;