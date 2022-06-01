import React from "react"

import { SummaryDestributionWrapper, SummaryTotalUnclaimedWrapper } from "../molecules"
import { style } from "typestyle"
import { useContext } from "react"
import { AppStateContext } from "../../contexts/AppStateContext"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

const NftTableSummary = () => {
	const { data, handlers } = useContext(AppStateContext)
	const { onClaimAll } = handlers

	const isMobile = useMediaQuery(Queries.mobile)
	const isTablet = useMediaQuery(Queries.tablet)

	return (
		<div className={container(isMobile)}>
			<SummaryDestributionWrapper count={data.distributionAmount} />
			<SummaryTotalUnclaimedWrapper onClaimAll={onClaimAll} unclaimedAmount={data.unclaimedTotal} token={data.token} />
		</div>
	)
}

const container = (isMobile: boolean) => style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	width: "100%",
	flexDirection: isMobile ? 'column-reverse' : 'unset'
})

export default NftTableSummary
