import React from 'react';
import { Label, Text } from '../atoms';

const NftDetailsItem = () => {
    return (
        <div>
            <div>
                <span>VESTING ASSETS</span>
                <Label colors={'yellow'}>
                    <span style={{marginRight: '5px'}}>Buy price</span>
                    <span style={{fontWeight: '500'}}>0.0035</span>
                </Label>
            </div>
            <div>
                <Text>
                    35,597,345,03 MBase
                </Text>
                <Text>
                    ~20,000,00 $
                </Text>
            </div>
        </div>
    );
};

export default NftDetailsItem;