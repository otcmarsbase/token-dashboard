import React, {FC} from 'react';
import {Text} from "../atoms";
import {style} from "typestyle";
import question from '../../assets/question.png'

interface VestingSplitSectionOverviewProps {
    title: string;
    subTitle: string;
    howToUse?: string
}

const VestingSplitSectionOverview: FC<VestingSplitSectionOverviewProps> = (
    {
        title,
        subTitle,
        howToUse
    }) => {
    return (
        <div className={container}>
            <div className={left}>
                <Text title={'_2'}>{title}</Text>
                <Text size={'_12'} colors={'gray'}>{subTitle}</Text>
            </div>
            {howToUse && (
                <Text
                    colors={'red'}
                    size={'_14'}
                    withIconLeft
                    iconLeft={<img style={{height: '18px'}} src={question} alt=""/>}
                >
                    <span style={{whiteSpace: 'nowrap'}}>{howToUse}</span>
                </Text>
            )}
        </div>
    );
};

const container = style({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '25px'
})

const left = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
})

export default VestingSplitSectionOverview;