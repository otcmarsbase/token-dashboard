import React, {FC, ReactNode} from 'react';
import {Text} from '../atoms/Text';
import {style} from "typestyle";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

interface IDates {
    activation: string;
    start: string;
    end: string;
}

interface NftDetailsItemProps {
    title: string;
    amount?: number;
    usd?: number;
    buyPrice?: number;
    token?: string;
    dates?: IDates
}

const NftDetailsItem: FC<NftDetailsItemProps> = (
    {
        title,
        dates,
        usd,
        amount,
        buyPrice,
        token
    }) => {
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div className={styledContainer(isMobile)}>
            <Text
                colors={'gray'}
                size={isMobile ? '_12' : undefined}
            >
                <b>{title}</b>
            </Text>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                <Text>{amount} {token}</Text>
                <Text size={'_12'} colors={'gray'}>~{usd} $</Text>
            </div>
        </div>
    );
};

const styledContainer = (isMobile: boolean) => style({
    display: 'flex',
    flexDirection: isMobile ? 'row' : 'column',
    justifyContent: isMobile ? 'space-between' : '',
    alignItems: isMobile ? 'start' : 'unset',
    gap: '5px',
    width: '100%'
})

const styledHeader = style({
    display: "flex",
    gap: '10px'
})

const styledFooter = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
})

export default NftDetailsItem;