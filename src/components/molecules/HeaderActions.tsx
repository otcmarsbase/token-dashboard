import React from "react"

import {Button} from "../atoms"
import {style} from "typestyle"
import {FC, ReactNode, useContext} from "react"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

interface HeaderActionsProps {
    btnText: ReactNode
    btnGradientText: ReactNode
    onSellWithPremium: () => void;
    onBuyNow: () => void
    token: string
}

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
        <div className={container(isMobile)}>
            <Button auto={isMobile} onClick={onSellWithPremium} size={"md"} colors={'defaultStroke'}>{btnText}</Button>
            <Button auto={isMobile} onClick={onBuyNow} size={"md"} colors={'gradient'}>{btnGradientText}</Button>
        </div>
    )
}

const container = (isMobile: boolean) => style({
    display: "flex",
    gap: isMobile ? "24px" : "12px",
    width: isMobile ? '100%' : 'unset',
    flexDirection: isMobile ? 'column' : 'row',
    marginBottom: isMobile ? '57px' : "unset"
})

type HeaderActionsLocalizedProps = Omit<HeaderActionsProps, 'btnText' | 'btnGradientText'>

export const HeaderActionsLocalized: FC<HeaderActionsLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext)

    return <HeaderActions {...props} btnText={nft.dashboard.sell_with_premium_btn(props.token)}
                          btnGradientText={nft.dashboard.buy_now_btn(props.token)}/>
}

interface HeaderActionsWrapperProps {
    token: string;
    onSellWithPremium: () => void;
    onBuyNow: () => void
}

export const HeaderActionsWrapper: FC<HeaderActionsWrapperProps> = (props) => {
    return <HeaderActionsLocalized {...props} />
}
