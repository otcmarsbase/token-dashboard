import React from 'react';

import {Text} from '../atoms';

import beingSplitted from '../../assets/beingSplitted.png';

const IsBeingSplitted = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', gap: '10px'}}>
            <img style={{width: '430px'}} src={beingSplitted} alt=""/>
            <Text title={'_2'}>NFT is being splitted</Text>
            <Text colors={'gray'}>Please wait for a few moments. Colonizing Mars make take a while...</Text>
        </div>
    );
};

export default IsBeingSplitted;