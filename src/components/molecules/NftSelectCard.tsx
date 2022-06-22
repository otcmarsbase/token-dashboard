import React, {FC, useContext} from 'react';

import {Text} from '../atoms/Text'
import {Label} from '../atoms/Label'
import {style} from "typestyle";
import {INftSelectCard} from "./types";
import {colors} from './CONSTANTS';
import {DictionaryContext} from "../../contexts/DictionaryContext";

const NftSelectCard: FC<INftSelectCard> = (
    {
        active,
        kind,
        amount,
        token,
        usd,
        price,
        started,
        priceText,
        startedText
    }) => {

    return (
        <div className={container(active)}>
            <img style={{height: '100%'}} src={colors[kind].icon} alt={`${colors[kind].icon} nft icon`}/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <div>
                    <Text size={'_14'}>{`${amount} ${token}`}</Text>
                    <Text colors={'gray'}>~{usd}$</Text>
                </div>
                <div>
                    <Label colors={colors[kind].label}>
                        <span>{priceText} <b>{price}</b></span>
                    </Label>
                    <Label disabled>
                        <span>{startedText} <b>{Date.parse(started as string)}</b></span>
                    </Label>
                </div>
            </div>
        </div>
    );
};

type NftSelectCardLocalizedProps = Omit<INftSelectCard, "startedText" | "priceText">

export const NftSelectCardLocalized: FC<NftSelectCardLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext);

    return (
        <NftSelectCard
            priceText={nft.dashboard.nft_table.nft_card.price_label}
            startedText={nft.dashboard.nft_table.nft_card.unvest_start_date_label}
            {...props}
        />
    )
}

const container = (active?: boolean) => style({
    display: 'flex',
    padding: '12px 24px 12px 24px',
    backgroundColor: active ? 'rgba(173, 54, 19, 0.2)' : 'unset'
})