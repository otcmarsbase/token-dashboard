import React from "react"

import { HeaderActionsWrapper } from "../molecules"
import { style } from "typestyle"
import { useContext } from "react"
import { AppStateContext } from "../../contexts/AppStateContext"
import { HeaderOverviewWrapper } from "../molecules/HeaderOverview"

const TokenDashboardHeader = () => {
	const container = style({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%"
	})

	const { data, handlers } = useContext(AppStateContext)
	const { onSellWithPremium, onBuyNow } = handlers

	return (
		<div className={container}>
			<HeaderOverviewWrapper />
			<HeaderActionsWrapper onSellWithPremium={onSellWithPremium} onBuyNow={onBuyNow} token={data.token} />
		</div>
	)
}

export default TokenDashboardHeader
