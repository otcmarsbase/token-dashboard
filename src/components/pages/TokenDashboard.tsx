import React from "react"
import TokenDashboardNavbar from "../organisms/TokenDasboardNavbar";
import {TokenDashboardHeader} from "../molecules/TokenDashboardHeader"
import {useContext} from "react"
import {AppStateContext} from "../../contexts/AppStateContext"
import {ConnectWithMetamask} from "../organisms/ConnectWithMetamask"
import {NftsContext} from "../../contexts/NftsContext";
import {NftTableSummaryWrapper} from "../stateful/NftTableSummaryWrapper";
import {NftTable} from "../organisms/NftTable";
import RootContainer from "../RootContainer";

const TokenDashboard = () => {
    const { handlers } = useContext(AppStateContext)
    const { nftsG } = useContext(NftsContext)

    return (
        <>
            <MemoHeader/>
            <RootContainer>
                <MemoTableSummary/>
                <NftTable
                    nfts={nftsG}
                    onClaim={handlers.onClaim}
                    onActions={handlers.onActions}
                />
                <TokenDashboardNavbar/>
            </RootContainer>
        </>
    )
}

const MemoHeader = React.memo(() => (
    <>
        <ConnectWithMetamask/>
        <TokenDashboardHeader/>
    </>
))

const MemoTableSummary = React.memo(() => (
    <NftTableSummaryWrapper/>
))

export default TokenDashboard
