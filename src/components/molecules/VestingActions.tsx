import React from 'react';
import {Button, Text} from '../atoms';
import {style} from "typestyle";

const container = style({
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
})

const VestingActions = () => {
    return (
        <div className={container}>
            <Button onClick={() => null} size={'md'} colors={'defaultStroke'}>
                <Text weight={'medium'} size={'_12'}>Sell MBase with premiuim</Text>
            </Button>
            <Button onClick={() => null} size={'md'} colors={'gradient'}>
                <Text weight={'medium'} size={'_12'}>Buy MBase Now</Text>
            </Button>
        </div>
    );
};

export default VestingActions;