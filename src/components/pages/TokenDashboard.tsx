import React from "react"

import {
	TokenDashboardTemplate,
	Summary as TDTSummary,
} from "../templates/TokenDashboardTemplate"
import { NftTableSummary, TokenDashboardHeader } from "../organisms"
import { NftTableWrapper } from "../organisms/NftTable"
import { useContext } from "react"
import { AppStateContext } from "../../contexts/AppStateContext"
import { ConnectWithMetamask } from "../organisms/ConnectWithMetamask"
import {Header} from "../templates"

const TokenDashboard = () => {
	const { data, handlers } = useContext(AppStateContext)
	// const { blockNumber, status } = useJsonRpc();

	return (
		<TokenDashboardTemplate>
			<Header>
				<ConnectWithMetamask />
				<TokenDashboardHeader />
			</Header>
			<TDTSummary>
				<NftTableSummary />
			</TDTSummary>
			<NftTableWrapper nfts={data.nfts} onClaim={handlers.onClaim} onActions={handlers.onActions} />
		</TokenDashboardTemplate>
	)
}

export default TokenDashboard
