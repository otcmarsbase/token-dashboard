import React, {FC, useContext} from 'react';

import {Text} from '../atoms/Text';

import beingSplitted from '../../assets/beingSplitted.png';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {IsBeingSplittedLocalizedProps, IsBeingSplittedProps} from "./types";
import {DictionaryContext} from "../../contexts/DictionaryContext";

const IsBeingSplitted: FC<IsBeingSplittedProps> = ({title, subTitle}) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            marginBottom: (isMobile || isTablet) ? '100px' : 'unset'
        }}>
            <img style={{width: '430px'}} src={beingSplitted} alt=""/>
            <Text title={'_2'}>{title}</Text>
            <Text colors={'gray'}>{subTitle}</Text>
        </div>
    );
};

export const IsBeingSplittedLocalized: FC<IsBeingSplittedLocalizedProps> = () => {
    const {nft} = useContext(DictionaryContext);

    return <IsBeingSplitted
        title={nft.dashboard.modals.is_being_splitted.title}
        subTitle={nft.dashboard.modals.is_being_splitted.subTitle}
    />
}