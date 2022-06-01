import React from "react"

import { HeaderActionsWrapper } from "../molecules"
import { style } from "typestyle"
import { useContext } from "react"
import { AppStateContext } from "../../contexts/AppStateContext"
import { HeaderOverviewWrapper } from "../molecules/HeaderOverview"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

const TokenDashboardHeader = () => {
	const isMobile = useMediaQuery(Queries.mobile)
	const isTablet = useMediaQuery(Queries.tablet)

	const { data, handlers } = useContext(AppStateContext)
	const { onSellWithPremium, onBuyNow } = handlers

	return (
		<div className={container(isMobile)}>
			<HeaderOverviewWrapper />
			<HeaderActionsWrapper onSellWithPremium={onSellWithPremium} onBuyNow={onBuyNow} token={data.token} />
		</div>
	)
}

const container = (isMobile: boolean) => style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	width: "100%",
	flexDirection: isMobile ? 'column' : 'row'
})

export default TokenDashboardHeader
