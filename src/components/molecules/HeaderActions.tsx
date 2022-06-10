import React from "react"

import {Text} from '../atoms/Text'
import {Button} from '../atoms/Button'
import {style} from "typestyle"
import {FC, useContext} from "react"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {HeaderActionsLocalizedProps, HeaderActionsProps} from "./types";

export const HeaderActions: FC<HeaderActionsProps> = (
    {
        btnText,
        btnGradientText,
        onSellWithPremium,
        onBuyNow
    }) => {
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div className={container(isMobile, isTablet)}>
            <Button auto={isMobile} onClick={onSellWithPremium} size={"md"} colors={'defaultStroke'}>
                <Text title={'_4'}>{btnText}</Text>
            </Button>
            <Button auto={isMobile} onClick={onBuyNow} size={"md"} colors={'gradient'}>
                <Text title={'_4'}>{btnGradientText}</Text>
            </Button>
        </div>
    )
}

const container = (isMobile: boolean, isTablet: boolean) => style({
    display: "flex",
    gap: isMobile ? "24px" : "12px",
    width: isMobile ? '100%' : 'unset',
    flexDirection: isMobile ? 'column' : isTablet ? 'row-reverse' : 'row',
    marginBottom: isMobile ? '24px' : "33px"
})

export const HeaderActionsLocalized: FC<HeaderActionsLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext)

    return <HeaderActions
        {...props}
        btnText={nft.dashboard.sell_with_premium_btn(props.token)}
        btnGradientText={nft.dashboard.buy_now_btn(props.token)}
    />
}
