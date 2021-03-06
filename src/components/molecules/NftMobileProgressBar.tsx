import React, {FC} from 'react';
import {Text} from "../atoms/Text";
import {style} from "typestyle";
import {NftCardProps} from "./types";

export const NftCardMobileProgressBar: FC<Pick<NftCardProps,
    'locked' | 'token' | 'percentComplete' | 'timePassed' | 'timeLeft'>> = (
    {
        locked,
        token,
        percentComplete,
        timePassed,
        timeLeft
    }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', gap: '5px'}}>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <Text colors={'gray'} size={'_10'}>
                    <b>{locked} {token} Locked</b>
                </Text>
            </div>
            <div>
                <div className={progressContainer}>
                    <div className={progressLine(percentComplete)}/>
                </div>
            </div>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <div>
                    <Text size={'_10'}>{100 - percentComplete}%</Text>
                    <Text size={'_10'} colors={'gray'}>{timePassed}</Text>
                </div>
                <div>
                    <Text size={'_10'}>{percentComplete}%</Text>
                    <Text size={'_10'} colors={'gray'}>{timeLeft}</Text>
                </div>
            </div>
        </div>
    );
};

const progressContainer = style({
    backgroundColor: 'rgba(104, 106, 110, 1)',
    borderRadius: '4px',
    position: 'relative',
    height: '6px'
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