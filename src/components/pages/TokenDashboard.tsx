import React from "react"

import { TokenDashboardTemplate } from "../templates/TokenDashboardTemplate"
import TokenDashboardNavbar from "../organisms/TokenDasboardNavbar";
import { useContext } from "react"
import { HandlersContext } from "../../contexts/HandlersContext"
import { ConnectWithMetamask } from "../organisms/ConnectWithMetamask"
import { Header } from "../templates"
import { NftsContext } from "../../contexts/NftsContext";
import { NftTableSummaryWrapper } from "../stateful/NftTableSummaryWrapper";
import { NftTable } from "../organisms/NftTable";
import { TokenDashboardHeader } from "../molecules/TokenDashboardHeader";
import TableLoading from "../molecules/TableLoading";
import { UserVestingContext } from "../../contexts/UserVestingContext";



const TokenDashboard = () => {
    const { error, repeatRequest, handlers, nftsG, loading } = useContext(UserVestingContext)

    return (
        <>
            <MemoHeader />
            {error ? <button onClick={repeatRequest}>Try again</button> : ''}
            <TokenDashboardTemplate>
                <MemoTableSummary />
                {loading ? <TableLoading /> :
                    <NftTable
                        nfts={nftsG}
                        onClaim={(nftId) => {
                            handlers.onClaim(nftId)
                                .then(() => {
                                    console.log('confirmed')
                                    repeatRequest()
                                })
                        }}
                        onActions={handlers.onActions}
                    />
                }
            </TokenDashboardTemplate>
            <TokenDashboardNavbar />
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
    <NftTableSummaryWrapper />
))

export default TokenDashboard
