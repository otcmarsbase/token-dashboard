import React from 'react';
import { Button } from '../atoms';

const VestingActions = () => {
    return (
        <div>
            <Button colors={'defaultStroke'} onClick={() => null}>Sell MBase with premiuim</Button>
            <Button colors={'gradient'} onClick={() => null}>Buy MBase Now</Button>
        </div>
    );
};

export default VestingActions;