import React from 'react';

import {Text} from '../atoms/Text';

import beingSplitted from '../../assets/beingSplitted.png';
import {useMediaQuery} from "../../hooks/mediaQuery";

const IsBeingSplitted = () => {
    const isMobile = useMediaQuery('(max-width: 375px)');
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            marginBottom: (isMobile || isTablet) ? '100px' : 'unset'
        }}>
            <img style={{width: '430px'}} src={beingSplitted} alt=""/>
            <Text title={'_2'}>NFT is being splitted</Text>
            <Text colors={'gray'}>Please wait for a few moments. Colonizing Mars make take a while...</Text>
        </div>
    );
};

export default IsBeingSplitted;