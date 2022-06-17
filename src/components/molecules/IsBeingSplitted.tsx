import React, {FC, useContext} from 'react';

import {Text} from '../atoms/Text';

import beingSplitted from '../../assets/beingSplitted.png';
import {IsBeingSplittedLocalizedProps, IsBeingSplittedProps} from "./types";
import {DictionaryContext} from "../../contexts/DictionaryContext";
import Container from "../Container";

const IsBeingSplitted: FC<IsBeingSplittedProps> = ({title, subTitle}) => {
    return (
        <Container>
            <img style={{width: '430px'}} src={beingSplitted}/>
            <Text title={'_2'}>{title}</Text>
            <Text colors={'gray'}>{subTitle}</Text>
        </Container>
    );
};

export const IsBeingSplittedLocalized: FC<IsBeingSplittedLocalizedProps> = () => {
    const {nft} = useContext(DictionaryContext);

    return <IsBeingSplitted
        title={nft.dashboard.modals.is_being_splitted.title}
        subTitle={nft.dashboard.modals.is_being_splitted.subTitle}
    />
}