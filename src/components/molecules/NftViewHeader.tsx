import React, {FC, ReactNode, useContext} from 'react';
import {Text} from "../atoms/Text";
import {Label} from "../atoms/Label";
import gold2 from "../../assets/gold-2.svg";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {DictionaryContext} from "../../contexts/DictionaryContext";
import {NftViewHeaderLocalizedProps, NftViewHeaderProps} from "./types";

const NftViewHeader: FC<NftViewHeaderProps> = (
    {
        viewText,
        nftDetailsText,
        buyPriceText,
        usd
    }) => {
    const isMobile = useMediaQuery(Queries.mobile)

    return (
        <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                <Text title={isMobile ? '_4' : '_3'} colors={'blue'}>{viewText}</Text>
                <Text title={isMobile ? '_2' : "_1"} colors={'red'}>{nftDetailsText}</Text>
                <Label colors={'yellow'}>
                    <span>{buyPriceText}</span>
                    <span style={{fontWeight: '600'}}>{usd} $</span>
                </Label>
            </div>
            {isMobile && <img style={{height: '75px'}} src={gold2} alt="nft gold"/>}
        </div>
    );
};

export const NftViewHeaderLocalized: FC<NftViewHeaderLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext)

    return <NftViewHeader
        viewText={nft.vestingSplit.nft_view_card.view_text}
        nftDetailsText={nft.vestingSplit.nft_view_card.nft_details_text}
        buyPriceText={nft.vestingSplit.nft_view_card.buy_price_text}
        {...props}
    />
}