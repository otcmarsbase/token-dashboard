import React from 'react';

import {Button, Text} from '../atoms';

import splitError from '../../assets/splitErrorIllustration.png';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

const SplitError = () => {
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <img style={{width: isMobile ? '100%' : '430px'}} src={splitError} alt=""/>
            <Text title={'_2'}>NFT could not be splitted</Text>
            <Text colors={'gray'}>Whoops, something went wrong. Please try again later.</Text>
            <div style={{display: 'flex', width: isMobile ? '100%' : '400px', gap: '20px', marginTop: '45px'}}>
                <Button auto onClick={() => null} colors={'defaultStroke'} size={'lg'}>
                    <Text title={'_4'}>Back to dashboard</Text>
                </Button>
                <Button auto onClick={() => null} size={'lg'}>
                    <Text title={'_4'}>Try again</Text>
                </Button>
            </div>
        </div>
    );
};

export default SplitError;