import React from "react"
import { useContext } from "react"
import { HandlersContext } from "../../contexts/HandlersContext"
import { NftOverviewLocalized } from "./HeaderOverview";
import { HeaderActionsLocalized } from "./HeaderActions";
import Container from "../Container";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import RootContainer from "../RootContainer";
import {style} from "typestyle";

export const TokenDashboardHeader = () => {
    const { data } = useContext(AppStateContext)
    const { handlers } = useContext(HandlersContext)
    const { onSellWithPremium, onBuyNow } = handlers

    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);
    const isDesktop = (!isMobile && !isTablet);

    return (
        <RootContainer className={styledRootContainer}>
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
        </RootContainer>
    )
}

const styledRootContainer = style({
    borderBottom: '1px solid rgba(104,106,110,0.6)',
    background: 'linear-gradient(97deg, rgba(0,0,0,1) 0%, rgba(26,1,47,1) 100%)'
})

