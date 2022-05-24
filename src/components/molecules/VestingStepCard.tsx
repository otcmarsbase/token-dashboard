import React from 'react';
import {Count, Text} from "../atoms";
import {style} from 'typestyle';

const container = style({
    display: "flex",
    background: `rgba(37, 38, 40, 0.5)`,
    borderRadius: '16px',
    padding: '27px 24px 27px 24px',
    width: '100%',
    alignItems: "center"
})

const body = style({
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '10px',
})

const VestingStepCard = () => {
    return (
        <div className={container}>
            <Count colors={'gradient'}>
                <Text weight={'medium'} size={'_24'}>1</Text>
            </Count>
            <div className={body}>
                <Text font={'euro'} size={'_18'} weight={'medium'}>Parameters</Text>
                <Text colors={'gray'} size={'_14'}>Set suitable conditions</Text>
            </div>
        </div>
    );
};

export default VestingStepCard;