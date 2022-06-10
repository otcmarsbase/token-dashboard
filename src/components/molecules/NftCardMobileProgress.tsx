import React, {FC} from 'react';
import {Text} from "../atoms/Text";
import {NftCardMobileProps} from "./types";
import {NftCardMobileProgressBar} from './NftMobileProgressBar';
import Container from "../Container";

export const NftCardMobileProgress: FC<NftCardMobileProps> = (
    {
        amount,
        amountUsd,
        token,
        unclaimed,
        availableUsd,
        ...props
    }) => {

    return (
        <Container gap={'_15'}>
            <Container align={'start'} justify={'between'}>
                <Text colors={'gray'} size={'_12'}>
                    <b>Lot of NFT</b>
                </Text>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                    <Text>{amount} MBase</Text>
                    <Text colors={'gray'} size={'_11'}>~{amountUsd}$</Text>
                </div>
            </Container>
            <NftCardMobileProgressBar
                token={token}
                timeLeft={props.timeLeft}
                timePassed={props.timePassed}
                percentComplete={props.percentComplete}
                locked={props.locked}
            />
            <Container justify={'between'} align={'start'}>
                <Text colors={'gray'} size={'_12'}>
                    <b>Availible for claim</b>
                </Text>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                    <Text colors={'red'}>{unclaimed} {token}</Text>
                    <Text colors={'gray'} size={'_11'}>~{availableUsd}$</Text>
                </div>
            </Container>
        </Container>
    );
};


