import React, {FC, useContext} from 'react';
import {colors} from "./CONSTANTS";
import {Label} from "../atoms/Label";
import {NftCardMobileOverviewLocalizedProps, NftCardMobileOverviewProps, NftCardMobileProps} from "./types";
import Container from "../Container";
import {DictionaryContext} from "../../contexts/DictionaryContext";

export const NftCardMobileOverview: FC<NftCardMobileOverviewProps> = (
    {
        kind,
        started,
        price,
        startedText,
        priceText
    }) => {

    return (
        <Container>
            <img style={{height: '52px'}} src={colors[kind].icon} alt=""/>
            <Container align={'start'} gap={'_10'}>
                <Label colors={colors[kind].label}>
                    <span>{priceText}</span>
                    <span style={{fontWeight: '500'}}>{price}</span>
                </Label>
                <Label disabled>
                    <span>{startedText}</span>
                    <span style={{fontWeight: '500'}}>{new Date(started).toLocaleDateString('ru')}</span>
                </Label>
            </Container>
        </Container>
    );
};

export const NftCardMobileOverviewLocalized: FC<NftCardMobileOverviewLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext);

    return <NftCardMobileOverview
        startedText={nft.dashboard.nft_table.nft_card.unvest_start_date_label}
        priceText={nft.dashboard.nft_table.nft_card.price_label}
        {...props}
    />
}