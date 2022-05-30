import React, {FC, ReactNode} from 'react';
import {Label, Text} from '../atoms';
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
            <div className={styledHeader}>
                <Text colors={'gray'}>{title}</Text>
                {buyPrice && (
                    <Label colors={'yellow'}>
                        <span style={{marginRight: '5px'}}>Buy price</span>
                        <span style={{fontWeight: '500'}}>{buyPrice}</span>
                    </Label>
                )}
            </div>
            <div>
                {dates
                    ? (
                        <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start'}}>
                            {(Object.keys(dates) as Array<keyof IDates>).map((key => (
                                <Label disabled>
                                    <Text>{key}</Text>
                                    <Text>{dates[key]}</Text>
                                </Label>
                            )))}
                        </div>
                    )
                    : (
                        <Text>
                            {`${amount} ${token}`}
                        </Text>
                    )}
                {usd && (
                    <div className={styledFooter}>
                        <Text colors={'gray'}>
                            {`${usd} $`}
                        </Text>
                    </div>
                )}
            </div>
        </div>
    );
};

const styledContainer = (isMobile: boolean) => style({
    display: 'flex',
    flexDirection: isMobile ? 'row' : 'column',
    justifyContent: isMobile ? 'space-between' : '',
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