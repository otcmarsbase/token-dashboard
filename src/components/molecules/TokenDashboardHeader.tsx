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
    const isOther = (!isMobile && !isTablet);

    return (
        <Container direction={isOther ? 'horizontal' : undefined} justify={'between'}>
            <NftOverviewLocalized/>
            <HeaderActionsLocalized
                onSellWithPremium={onSellWithPremium}
                onBuyNow={onBuyNow}
                token={data.token}
            />
        </Container>
    )
}

