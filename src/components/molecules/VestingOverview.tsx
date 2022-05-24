import React from 'react';
import {Text} from '../atoms';
import {style} from 'typestyle';

const container = style({
    width: '500px'
})

const VestingOverview = () => {
    return (
        <div className={container}>
            <div>
                <Text title>Vesting split</Text>
                <Text colors={"red"}>How to use?</Text>
            </div>
            <Text colors={'gray'} size={'_14'}>
                The perfect place for making large volume deals with hundreds of altcoins
                without slippage or market price impact
            </Text>
        </div>
    );
};

export default VestingOverview;