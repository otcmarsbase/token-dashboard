import React, {FC} from 'react';

import {Text} from '../atoms/Text'
import {Label} from '../atoms/Label'
import {style} from "typestyle";
import {INftSelectCard} from "./types";
import { colors } from './CONSTANTS';

const NftSelectCard: FC<INftSelectCard> = (
    {
        active,
        kind,
        amount,
        token,
        usd,
        price,
        started
    }) => {

    return (
        <div className={active ? containerActive : container}>
            <img style={{height: '100%'}} src={colors[kind].icon} alt=""/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <div>
                    <Text size={'_14'}>{`${amount} ${token}`}</Text>
                    <Text colors={'gray'}>~{usd}$</Text>
                </div>
                <div>
                    <Label colors={colors[kind].label}>
                        <span>Price <b>{price}</b></span>
                    </Label>
                    <Label disabled>
                        <span>Started <b>{Date.parse(started as string)}</b></span>
                    </Label>
                </div>
            </div>
        </div>
    );
};

const container = style({
    display: 'flex',
    padding: '12px 24px 12px 24px'
})

const containerActive = style({
    display: 'flex',
    padding: '12px 24px 12px 24px',
    backgroundColor: 'rgba(173, 54, 19, 0.2)'
});

export default NftSelectCard;