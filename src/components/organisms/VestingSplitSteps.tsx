import React from 'react';
import VestingStepCard from "../molecules/VestingStepCard";
import {style} from "typestyle";
import {useMediaQuery} from "../../hooks/mediaQuery";

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

    const isMobile = useMediaQuery('(max-width: 375px)')
    const isTablet = useMediaQuery('(max-width: 768px)')

    return (
        <div className={container}>
            {(isMobile ? steps.filter(s => s.active) : steps).map((step, index) => (
                <VestingStepCard
                    key={index}
                    index={index + 1} {...step}/>
            ))}
        </div>
    );
};

export default VestingSplitSteps;