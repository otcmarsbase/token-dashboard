import React from "react"

import {FC, useContext} from "react"
import {style} from "typestyle"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {Text} from "../atoms/Text"
import {NftProgressLocalizedProps, NftProgressProps} from "./types";

export const NftProgress: FC<NftProgressProps> = (
    {
        token,
        locked,
        percentComplete,
        timePassed,
        percentLeft,
        timeLeft,
        lockedCaption
    }) => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '264px', gap: '5px', padding: '16px'}}>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <Text colors={'gray'} size={'_10'}>
                    <span style={{fontWeight: 600}}>{`${locked} ${token} ${lockedCaption}`}</span>
                </Text>
            </div>
            <div>
                <div className={progressContainer}>
                    <div className={progressLine(percentComplete)}/>
                </div>
            </div>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', gap: '5px'}}>
                    <Text size={'_10'}>{percentLeft}%</Text>
                    <Text size={'_10'} colors={'gray'}>{timePassed}</Text>
                </div>
                <div style={{display: 'flex', gap: '5px'}}>
                    <Text size={'_10'}>{percentComplete}%</Text>
                    <Text size={'_10'} colors={'gray'}>{timeLeft}</Text>
                </div>
            </div>
        </div>
    )
}

export const NftProgressLocalized: FC<NftProgressLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext)

    return <NftProgress {...props} lockedCaption={nft.dashboard.nft_table.nft_card.locked_caption}/>
}

const progressContainer = style({
    backgroundColor: 'rgba(104,106,110,0.2)',
    borderRadius: '4px',
    position: 'relative',
    height: '6px',
    width: '100%',
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




