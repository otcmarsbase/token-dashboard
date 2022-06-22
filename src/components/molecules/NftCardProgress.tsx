import React, {FC, useContext} from 'react';
import {Text} from "../atoms/Text";
import {style} from "typestyle";
import {NftCardProgressProps} from "./types";
import {DictionaryContext} from "../../contexts/DictionaryContext";
import Container from "../Container";

const NftCardProgress: FC<NftCardProgressProps> = (
    {
        locked,
        token,
        percentComplete,
        timePassed,
        timeLeft
    }) => {

    return (
        <Container gap={'_5'}>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <Text colors={'gray'} size={'_10'}>
                    <b>{locked} {token} Locked</b>
                </Text>
            </div>
            <div className={progressContainer}>
                <div className={progressLine(percentComplete)}/>
            </div>
            <Container direction={'horizontal'} justify={'between'}>
                <div>
                    <Text size={'_10'}>{100 - percentComplete}%</Text>
                    <Text size={'_10'} colors={'gray'}>{timePassed}</Text>
                </div>
                <div>
                    <Text size={'_10'}>{percentComplete}%</Text>
                    <Text size={'_10'} colors={'gray'}>{timeLeft}</Text>
                </div>
            </Container>
        </Container>
    );
};

type NftCardProgressLocalizedProps = Omit<NftCardProgressProps, "claim_btn">

export const NftCardProgressLocalized: FC<NftCardProgressLocalizedProps> = (props) => {
    const {nft}  = useContext(DictionaryContext);

    return <NftCardProgress
        claim_btn={nft.dashboard.nft_table.nft_card.claim_btn}
        {...props}/>
}

const progressContainer = style({
    backgroundColor: 'rgba(104, 106, 110, 1)',
    borderRadius: '4px',
    position: 'relative',
    height: '6px',
    width: '100%'
})

const progressLine = (progress: number) => style({
    position: 'absolute',
    width: `${progress}%`,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    background: 'linear-gradient(90deg, #FF1414 0%, #EAEE2C 48.44%, #7BDA1D 100%)',
    borderRadius: '4px',
})