import React, {FC, useContext} from 'react';
import {colors} from "./CONSTANTS";
import {Label} from "../atoms/Label";
import {NftCardOverviewLocalizedProps, NftCardOverviewProps, NftCardProps} from "./types";
import Container from "../Container";
import {DictionaryContext} from "../../contexts/DictionaryContext";
import {Text} from "../atoms/Text";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

export const NftCardOverview: FC<NftCardOverviewProps> = (
    {
        kind,
        started,
        price,
        startedText,
        priceText,
        amount,
        amountUsd
    }) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);
    const isDesktop = (!isMobile && !isTablet);

    return (
        <Container>
            <Container direction={'horizontal'} justify={'start'}>
                <img style={{height: '52px'}} src={colors[kind].icon} alt=""/>
                <Container align={'start'} auto gap={'_10'}>
                    {isDesktop && (
                        <Container direction={'horizontal'} justify={'start'}>
                            <Text>{amount} MBase</Text>
                            <Text colors={'gray'} size={'_11'}>~{amountUsd}$</Text>
                        </Container>
                    )}
                    <Container direction={isDesktop ? 'horizontal' : undefined}>
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
            </Container>
            <Container direction={'horizontal'} justify={'between'}>
                {!isDesktop && (
                    <Text colors={'gray'} size={'_12'}>
                        <b>Lot of NFT</b>
                    </Text>
                )}
                {!isDesktop && (
                    <Container auto align={'end'}>
                        <Text>{amount} MBase</Text>
                        <Text colors={'gray'} size={'_11'}>~{amountUsd}$</Text>
                    </Container>
                )}
            </Container>
        </Container>
    );
};

export const NftCardOverviewLocalized: FC<NftCardOverviewLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext);

    return <NftCardOverview
        startedText={nft.dashboard.nft_table.nft_card.unvest_start_date_label}
        priceText={nft.dashboard.nft_table.nft_card.price_label}
        {...props}
    />
}