import React from "react"
import TokenDashboardNavbar from "../organisms/TokenDasboardNavbar";
import {TokenDashboardHeader} from "../molecules/TokenDashboardHeader"
import {useContext} from "react"
import {ConnectWithMetamask} from "../organisms/ConnectWithMetamask"
import {NftsContext} from "../../contexts/NftsContext";
import {NftTableSummaryWrapper} from "../stateful/NftTableSummaryWrapper";
import {NftTable} from "../organisms/NftTable";
import RootContainer from "../RootContainer";
import Container from "../Container";
import {HowIsLocalized} from "../molecules/HowIsDistributionDone";
import {HandlersContext} from "../../contexts/HandlersContext";

const TokenDashboard = () => {
    const {handlers} = useContext(HandlersContext)
    const {nftsG} = useContext(NftsContext);

    return (
        <>
            <MemoHeader/>
            <RootContainer mb={'_110'}>
                <Container gapRow={'_30'}>
                    <Container>
                        <MemoTableSummary/>
                        <NftTable
                            nfts={nftsG}
                            onClaim={handlers.onClaim}
                            onActions={handlers.onActions}
                        />
                    </Container>
                    <HowIsLocalized/>
                </Container>
                {/*<TokenDashboardNavbar/>*/}
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
