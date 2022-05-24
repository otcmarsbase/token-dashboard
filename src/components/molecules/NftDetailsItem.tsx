import React from 'react';
import {Label, Text} from '../atoms';
import {style} from "typestyle";

const NftDetailsItem = () => {
    return (
        <div>
            <div>
                <Text colors={'gray'}>VESTING ASSETS</Text>
                <Label colors={'yellow'}>
                    <span style={{marginRight: '5px'}}>Buy price</span>
                    <span style={{fontWeight: '500'}}>0.0035</span>
                </Label>
            </div>
            <div className={footer}>
                <Text>
                    35,597,345,03 MBase
                </Text>
                <Text colors={'gray'}>
                    ~20,000,00 $
                </Text>
            </div>
        </div>
    );
};

const footer = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
})

export default NftDetailsItem;