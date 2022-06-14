import React from "react"

import { TokenDashboardTemplate} from "../templates/TokenDashboardTemplate"
import TokenDashboardNavbar from "../organisms/TokenDasboardNavbar";
import { useContext } from "react"
import { AppStateContext } from "../../contexts/AppStateContext"
import { ConnectWithMetamask } from "../organisms/ConnectWithMetamask"
import { Header } from "../templates"
import { NftsContext } from "../../contexts/NftsContext";
import { NftTableSummaryWrapper } from "../stateful/NftTableSummaryWrapper";
import { NftTable } from "../organisms/NftTable";
import { RoundingContext } from "../../contexts/RoundingsContext";
import { TokenDashboardHeader } from "../molecules/TokenDashboardHeader";



const TokenDashboard = () => {
    const { handlers } = useContext(AppStateContext)
    const { nftsG, loading, error, tryAgain } = useContext(NftsContext)

    return (
        <>
            <MemoHeader />
            {error ? <button onClick={tryAgain}>Try again</button> : ''}
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
