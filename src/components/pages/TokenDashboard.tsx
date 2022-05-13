import React from "react"

import {
	TokenDashboardTemplate,
	Header as TDTHeader,
	Summary as TDTSummary,
	Table as TDTTable
} from "../templates/TokenDashboardTemplate"
import { NftTableSummary, TokenDashboardHeader } from "../organisms"
import { NftTableWrapper } from "../organisms/NftTable"
import { useContext } from "react"
import { AppStateContext } from "../../contexts/AppStateContext"
import { ConnectWithMetamask } from "../organisms/ConnectWithMetamask"
import { useJsonRpc } from "../../use"

const TokenDashboard = () => {
	const { data, handlers } = useContext(AppStateContext)
	const { blockNumber, status } = useJsonRpc();

	return (
		<TokenDashboardTemplate>
			<div>blockNumber: {blockNumber}</div>
			<div>{status}</div>
			<TDTHeader>
				<ConnectWithMetamask />
				<TokenDashboardHeader />
			</TDTHeader>
			<TDTSummary>
				<NftTableSummary />
			</TDTSummary>
			<NftTableWrapper nfts={data.nfts} onClaim={handlers.onClaim} onActions={handlers.onActions} />
		</TokenDashboardTemplate>
	)
}

export default TokenDashboard
