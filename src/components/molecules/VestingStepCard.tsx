import React, {FC} from 'react';

import {Count} from '../atoms/Count';
import {Text} from '../atoms/Text'
import {style} from 'typestyle';

interface VestingStepCardProps {
    title: string;
    subTitle: string;
    active?: boolean;
    index: number;
}

const VestingStepCard: FC<VestingStepCardProps> = (
    {
        active = false,
        title,
        subTitle,
        index
    }) => {
    return (
        <div className={container(active)}>
            <Count colors={active ? 'gradient' : 'gray'}>
                <Text colors={active ? 'white' : 'gray'} title={'_2'}>{index}</Text>
            </Count>
            <div className={body}>
                <Text colors={active ? 'white' : 'gray'} title={'_2'}>{title}</Text>
                <Text weight={'light'} colors={active ? 'white' : 'gray'} size={'_14'}>{subTitle}</Text>
            </div>
        </div>
    );
};

const container = (active: boolean) => style({
    display: "flex",
    background: active ? `rgba(37, 38, 40, 0.5)` : `rgba(37, 38, 40, 0.2)`,
    borderRadius: '16px',
    padding: '27px 24px 27px 24px',
    width: '100%',
    alignItems: "center"
})

const body = style({
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '10px',
})

export default VestingStepCard;