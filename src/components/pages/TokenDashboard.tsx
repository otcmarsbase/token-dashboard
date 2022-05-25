import React, { useEffect, useState } from "react"

import {
	TokenDashboardTemplate,
	Summary as TDTSummary,
} from "../templates/TokenDashboardTemplate"
import { NftTableSummary, TokenDashboardHeader } from "../organisms"
import { INft, NftTableWrapper } from "../organisms/NftTable"
import { useContext } from "react"
import { AppStateContext } from "../../contexts/AppStateContext"
import { ConnectWithMetamask } from "../organisms/ConnectWithMetamask"
import { Header } from "../templates"
import { useNfts } from "../../hooks/useNfts"
import { useEthAddress } from "../../hooks/jrpc-provider"
import { nftDataToView } from "../../api"
import { useMarsbaseContracts } from "../../hooks/mbase-contract"

const TokenDashboard = () => {
	const address = useEthAddress()
	const { token } = useMarsbaseContracts()
	const { data, handlers } = useContext(AppStateContext)
	let { nfts } = useNfts(address)
	const [renderNfts, setRenderNfts] = useState<INft[]>([])
	
	if (renderNfts.length != nfts.length) {
		nftDataToView(nfts, token)
			.then(res => setRenderNfts(res))	
	} 

	return (
		<TokenDashboardTemplate>
			<Header>
				<ConnectWithMetamask />
				<TokenDashboardHeader />
			</Header>
			<TDTSummary>
				<NftTableSummary />
			</TDTSummary>

			<NftTableWrapper nfts={renderNfts ? renderNfts : []} onClaim={handlers.onClaim} onActions={handlers.onActions} />
		</TokenDashboardTemplate>
	)
}

export default TokenDashboard
