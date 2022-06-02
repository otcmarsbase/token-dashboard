import React, {FC, ReactNode, useContext} from 'react';
import {Button, Text} from '../atoms';
import {style} from "typestyle";
import {DictionaryContext} from "../../contexts/DictionaryContext";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

interface VestingActionsProps {
    onSellWithPremium: () => void;
    onBuyNow: () => void;
    sellWithPremiumBtn: ReactNode;
    buyNowBtn: ReactNode;
    token: string
}

const VestingActions: FC<VestingActionsProps> = (props) => {
    const {
        onSellWithPremium,
        onBuyNow,
        sellWithPremiumBtn,
        buyNowBtn
    } = props;
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div className={container(isMobile)}>
            <Button auto={isMobile} onClick={onSellWithPremium} size={'md'} colors={'defaultStroke'}>
                <Text weight={'medium'} size={'_12'}>{sellWithPremiumBtn}</Text>
            </Button>
            <Button auto={isMobile} onClick={onBuyNow} size={'md'} colors={'gradient'}>
                <Text weight={'medium'} size={'_12'}>{buyNowBtn}</Text>
            </Button>
        </div>
    );
};

type VestingActionsLocalizedProps = Omit<VestingActionsProps, 'sellWithPremiumBtn' | 'buyNowBtn'>

const VestingActionsLocalized: FC<VestingActionsLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext);

    return (
        <VestingActions
            {...props}
            sellWithPremiumBtn={nft.vestingSplit.sell_with_premium_btn(props.token)}
            buyNowBtn={nft.vestingSplit.buy_now_btn(props.token)}
        />
    )
}

interface VestingActionsWrapperProps {
    token: string;
    onSellWithPremium: () => void;
    onBuyNow: () => void
}

export const VestingActionsWrapper: FC<VestingActionsWrapperProps> = (props) => {
    return <VestingActionsLocalized {...props}/>
}

const container = (isMobile: boolean) => style({
    display: 'flex',
    alignItems: 'center',
    flexDirection: isMobile ? 'column-reverse' : 'row',
    gap: '12px'
})