import React from 'react';
import {Count, Text} from "../atoms";
import {style} from 'typestyle';

const container = style({
    display: "flex"
})

const body = style({
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '10px'
})

const VestingStepCard = () => {
    return (
        <div className={container}>
            <Count colors={'gradient'}>1</Count>
            <div className={body}>
                <Text>Parameters</Text>
                <Text>Set suitable conditions</Text>
            </div>
        </div>
    );
};

export default VestingStepCard;