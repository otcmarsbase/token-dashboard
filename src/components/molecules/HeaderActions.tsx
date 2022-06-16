import React from "react"

import {Text} from '../atoms/Text'
import {Button} from '../atoms/Button'
import {FC, useContext} from "react"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {HeaderActionsLocalizedProps, HeaderActionsProps} from "./types";
import Container from "../Container";

export const HeaderActions: FC<HeaderActionsProps> = (
    {
        btnText,
        btnGradientText,
        onSellWithPremium,
        onBuyNow
    }) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);
    const isDesktop = (!isMobile && !isTablet)

    return (
        <Container
            auto={isDesktop}
            direction={isMobile ? undefined : 'horizontal'}
            gapRow={isDesktop ? '_10' : undefined}
            justify={isTablet ? 'start' : undefined}
            gap={isDesktop ? undefined : '_15'}
        >
            <Button auto={isMobile} onClick={onSellWithPremium} size={"md"} colors={'defaultStroke'}>
                <Text title={'_4'} noWrap>{btnText}</Text>
            </Button>
            <Button auto={isMobile} onClick={onBuyNow} size={"md"} colors={'gradient'}>
                <Text title={'_4'} noWrap>{btnGradientText}</Text>
            </Button>
        </Container>
    )
}

export const HeaderActionsLocalized: FC<HeaderActionsLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext)

    return <HeaderActions
        {...props}
        btnText={nft.dashboard.sell_with_premium_btn(props.token)}
        btnGradientText={nft.dashboard.buy_now_btn(props.token)}
    />
}
