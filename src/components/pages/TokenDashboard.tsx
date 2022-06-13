import React from "react"

import {TokenDashboardTemplate} from "../templates/TokenDashboardTemplate"
import TokenDashboardNavbar from "../organisms/TokenDasboardNavbar";
import {TokenDashboardHeader} from "../molecules/TokenDashboardHeader"
import {useContext} from "react"
import {AppStateContext} from "../../contexts/AppStateContext"
import {ConnectWithMetamask} from "../organisms/ConnectWithMetamask"
import {Header} from "../templates"
import {NftsContext} from "../../contexts/NftsContext";
import {NftTableSummaryWrapper} from "../stateful/NftTableSummaryWrapper";
import {NftTable} from "../organisms/NftTable";

const TokenDashboard = () => {
    const {handlers} = useContext(AppStateContext)
    const {nftsG, loading} = useContext(NftsContext)

    return (
        <>
            <MemoHeader/>
            <TokenDashboardTemplate>
                <MemoTableSummary/>
                <NftTable
                    nfts={nftsG}
                    onClaim={handlers.onClaim}
                    onActions={handlers.onActions}
                />
            </TokenDashboardTemplate>
            <TokenDashboardNavbar/>
        </>
    )
}

const MemoHeader = React.memo(() => (
    <Header>
        <ConnectWithMetamask/>
        <TokenDashboardHeader/>
    </Header>
))

const MemoTableSummary = React.memo(() => (
    <NftTableSummaryWrapper/>
))

export default TokenDashboard
