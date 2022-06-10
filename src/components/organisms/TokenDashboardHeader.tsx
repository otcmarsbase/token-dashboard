import React from "react"

import { style } from "typestyle"
import { useContext } from "react"
import { AppStateContext } from "../../contexts/AppStateContext"
import {NftOverviewLocalized} from "../molecules/HeaderOverview";
import {HeaderActionsLocalized} from "../molecules/HeaderActions";

export const TokenDashboardHeader = () => {
	const { data, handlers } = useContext(AppStateContext)
	const { onSellWithPremium, onBuyNow } = handlers

	return (
		<div className={container}>
			<NftOverviewLocalized />
			<HeaderActionsLocalized onSellWithPremium={onSellWithPremium} onBuyNow={onBuyNow} token={data.token} />
		</div>
	)
}

const container = style({
	display: "flex",
	justifyContent: "space-between",
	width: "100%",
})

