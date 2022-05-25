import React, {FC, ReactNode} from 'react';
import {Label, Text} from '../atoms';
import {style} from "typestyle";

interface IDates {
    activation: string;
    start: string;
    end: string;
}

interface NftDetailsItemProps {
    title: string;
    amount?: string;
    usd?: string;
    buyPrice?: string;
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

    return (
        <div className={styledContainer}>
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

            </div>
            {usd && (
                <div className={styledFooter}>
                    <Text colors={'gray'}>
                        {`${usd} $`}
                    </Text>
                </div>
            )}
        </div>
    );
};

const styledContainer = style({
    display: 'flex',
    flexDirection: 'column',
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