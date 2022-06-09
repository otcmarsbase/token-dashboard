import React, {FC, ReactNode} from 'react';
import {Text} from "../atoms/Text";
import {style} from "typestyle";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";


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
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div style={{width: '100%'}}>
            {(actionText && isMobile) && (
                <Text
                    colors={'red'}
                    size={'_14'}
                    withIconLeft
                    iconLeft={actionIcon}
                >
                    <span style={{whiteSpace: 'nowrap'}}>{actionText}</span>
                </Text>
            )}
            <div className={container(isMobile)}>
                <div className={left}>
                    <Text title={'_2'}>{title}</Text>
                    {!isMobile && <Text size={'_12'} colors={'gray'}>{subTitle}</Text>}
                </div>
                {(actionText && !isMobile) && (
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
            {isMobile && <Text size={'_12'} colors={'gray'}>{subTitle}</Text>}
        </div>

    );
};

const container = (isMobile: boolean) => style({
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