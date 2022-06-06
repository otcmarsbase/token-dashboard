import React from "react"

import {FC, ReactNode, useContext} from "react"
import {style} from "typestyle"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {ProgressGradient, Text} from "../atoms"

interface NftProgressProps {
    amount: ReactNode
    token: ReactNode
    locked: ReactNode
    percentComplete: number
    timePassed: ReactNode
    percentLeft: number
    timeLeft: ReactNode
    lockedCaption: ReactNode
}

export const NftProgress: FC<NftProgressProps> = (
    {
        amount,
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
                <Text size={'_10'}>{`${amount} ${token}`}</Text>
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
                <div>
                    <Text size={'_10'}>{percentComplete.toString().slice(0, 4)}%</Text>
                    <span style={{marginRight: '5px'}}/>
                    <Text size={'_10'} colors={'gray'}>{timePassed}</Text>
                </div>
                <div>
                    <Text size={'_10'}>{percentLeft.toString().slice(0, 4)}%</Text>
                    <span style={{marginRight: '5px'}}/>
                    <Text size={'_10'} colors={'gray'}>{timeLeft}</Text>
                </div>
            </div>
        </div>
    )
}

const progressContainer = style({
    backgroundColor: 'rgba(104, 106, 110, 1)',
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

type NftProgressLocalizedProps = Omit<NftProgressProps, "lockedCaption">

export const NftProgressLocalized: FC<NftProgressLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext)

    return <NftProgress {...props} lockedCaption={nft.dashboard.nft_table.nft_card.locked_caption}/>
}

interface NftProgressWrapperProps {
    amount: number
    token: string
    locked: number
    progressValue: string
    progressMax: string
    percentComplete: number
    timePassed: string
    timeLeft: string
}

export const NftProgressWrapper: FC<NftProgressWrapperProps> = (props) => {
    const percentLeft = 100 - props.percentComplete;
    const percentComplete = props.percentComplete;

    const timeLeft = `${props.timeLeft.slice(0, 4)} ${props.timeLeft.slice(-4)}`;
    const timePassed = `${props.timePassed.slice(0, 4)} ${props.timePassed.slice(-4)}`;

    return <NftProgressLocalized
        {...props}
        timePassed={timePassed}
        timeLeft={timeLeft}
        percentLeft={percentLeft}
        percentComplete={percentComplete}/>
}
