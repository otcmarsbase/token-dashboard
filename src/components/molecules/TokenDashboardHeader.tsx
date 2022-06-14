import React from "react"
import {useContext} from "react"
import {AppStateContext} from "../../contexts/AppStateContext"
import {NftOverviewLocalized} from "./HeaderOverview";
import {HeaderActionsLocalized} from "./HeaderActions";
import Container from "../Container";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

export const TokenDashboardHeader = () => {
    const {data, handlers} = useContext(AppStateContext)
    const {onSellWithPremium, onBuyNow} = handlers

    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);
    const isDesktop = (!isMobile && !isTablet);

    return (
        <Container
            direction={isDesktop ? 'horizontal' : undefined}
            justify={isDesktop ? 'start' : 'between'}
            padding={'_20'}
        >
            <NftOverviewLocalized/>
            <HeaderActionsLocalized
                onSellWithPremium={onSellWithPremium}
                onBuyNow={onBuyNow}
                token={data.token}
            />
        </Container>
    )
}

