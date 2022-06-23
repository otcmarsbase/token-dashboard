import React, {FC, useContext} from 'react';

import {Text} from '../atoms/Text'
import {Button} from '../atoms/Button'

import splitError from '../../assets/splitErrorIllustration.png';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {SplitErrorProps, SplitErrorPropsLocalized} from "./types";
import {DictionaryContext} from "../../contexts/DictionaryContext";

const SplitError: FC<SplitErrorProps> = (
    {
        title,
        subTitle,
        backText,
        tryAgainText
    }) => {
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <img style={{width: isMobile ? '100%' : '430px'}} src={splitError} alt=""/>
            <Text title={'_2'}>{title}</Text>
            <Text colors={'gray'}>{subTitle}</Text>
            <div style={{display: 'flex', width: isMobile ? '100%' : '400px', gap: '20px', marginTop: '45px'}}>
                <Button auto onClick={() => null} colors={'defaultStroke'} size={'lg'}>
                    <Text title={'_4'}>{backText}</Text>
                </Button>
                <Button auto onClick={() => null} size={'lg'}>
                    <Text title={'_4'}>{tryAgainText}</Text>
                </Button>
            </div>
        </div>
    );
};

export const SplitErrorLocalized: FC<SplitErrorPropsLocalized> = (props) => {
    const {nft} = useContext(DictionaryContext)
    return <SplitError
        title={nft.vestingSplit.split_error.title}
        subTitle={nft.vestingSplit.split_error.sub_title}
        backText={nft.vestingSplit.split_error.back_text}
        tryAgainText={nft.vestingSplit.split_error.try_again_text}
        {...props}
    />
}