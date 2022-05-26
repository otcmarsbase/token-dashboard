import React, {FC, ReactNode} from 'react';
import {Text} from "../atoms";
import {style} from "typestyle";


interface VestingSplitSectionOverviewProps {
    title: ReactNode;
    subTitle: ReactNode;
    actionText?: ReactNode;
    onAction?: () => void;
    actionIcon?: ReactNode;
}

const VestingSplitSectionOverview: FC<VestingSplitSectionOverviewProps> = (
    {
        title,
        subTitle,
        actionText,
        actionIcon
    }) => {
    return (
        <div className={container}>
            <div className={left}>
                <Text title={'_2'}>{title}</Text>
                <Text size={'_12'} colors={'gray'}>{subTitle}</Text>
            </div>
            {actionText && (
                <Text
                    colors={'red'}
                    size={'_14'}
                    withIconLeft
                    iconLeft={actionIcon}
                >
                    <span style={{whiteSpace: 'nowrap'}}>{actionText}</span>
                </Text>
            )}
        </div>
    );
};

const container = style({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '25px',
    alignItems: 'flex-start'
})

const left = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px'
})


export default VestingSplitSectionOverview;