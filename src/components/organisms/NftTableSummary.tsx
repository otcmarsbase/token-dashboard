import { SummaryDestributionWrapper, SummaryTotalUnclaimedWrapper } from "../molecules"
import { style } from "typestyle"
import { useContext } from "react"
import { AppStateContext } from "../../contexts/AppStateContext"

const NftTableSummary = () => {
	const container = style({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%"
	})

	const { data, handlers } = useContext(AppStateContext)
	const { onClaimAll } = handlers

	return (
		<div className={container}>
			<SummaryDestributionWrapper count={data.distributionAmount} icon="" />
			<SummaryTotalUnclaimedWrapper onClaimAll={onClaimAll} unclaimedAmount={data.unclaimedTotal} token={data.token} />
		</div>
	)
}

export default NftTableSummary
