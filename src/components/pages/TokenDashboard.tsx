import React  from "react"

import {TokenDashboardTemplate, Summary as TDTSummary} from "../templates/TokenDashboardTemplate"
import TokenDashboardNavbar from "../organisms/TokenDasboardNavbar";
import { TokenDashboardHeader } from "../organisms/TokenDashboardHeader"
import { useContext } from "react"
import { AppStateContext } from "../../contexts/AppStateContext"
import { ConnectWithMetamask } from "../organisms/ConnectWithMetamask"
import { Header } from "../templates"
import { NftsContext } from "../../contexts/NftsContext";
import {NftTableSummaryWrapper} from "../stateful/NftTableSummaryWrapper";
import {NftTable} from "../organisms/NftTable";

const TokenDashboard = () => {
    const { handlers } = useContext(AppStateContext)
    const { nftsG, loading } = useContext(NftsContext)
/* 
    console.log(nftsG) */

    return (
        <>
            <MemoHeader />
            <TokenDashboardTemplate>
                <MemoTableSummary />
                <NftTable
                    nfts={nftsG}
                    onClaim={handlers.onClaim}
                    onActions={handlers.onActions}
                />
            </TokenDashboardTemplate>
            <TokenDashboardNavbar />
            {/* <ClaimRewardsModalLocalized token={'MBase'} amount={36000000}/> */}
        </>
    )
}

const MemoHeader = React.memo(() => (
    <Header>
        <ConnectWithMetamask />
        <TokenDashboardHeader />
    </Header>
))

const MemoTableSummary = React.memo(() => (
    <TDTSummary>
        <NftTableSummaryWrapper />
    </TDTSummary>
))

export default TokenDashboard
