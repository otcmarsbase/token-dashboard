import React, { PropsWithChildren, useEffect, useState } from "react"

import {
    TokenDashboardTemplate,
    Summary as TDTSummary,
} from "../templates/TokenDashboardTemplate"
import { Queries, useMediaQuery } from "../../hooks/mediaQuery";
import { style } from "typestyle";
import NftCardMobile from "../molecules/NftCardMobile";
import TokenDashboardNavbar from "../organisms/TokenDasboardNavbar";
import { ClaimRewardsModal } from "../molecules/ClaimRewardsModal";
import { NftTableSummary } from "../organisms/NftTableSummary"
import { TokenDashboardHeader } from "../organisms/TokenDashboardHeader"
import { INft, NftTableWrapper } from "../organisms/NftTable"
import { useContext } from "react"
import { AppStateContext } from "../../contexts/AppStateContext"
import { ConnectWithMetamask } from "../organisms/ConnectWithMetamask"
import { Header } from "../templates"
import { useNfts } from "../../hooks/useNfts"
import { NftData, nftDataToView } from "../../api"
import { MarsbaseTokenContext, useMarsbaseContracts } from "../../hooks/mbase-contract"
import { useMetaMask } from "metamask-react";

import ConnectWallet from "../molecules/ConnectWallet";
import adImage from "../../assets/ad.png";
import Notification from "../molecules/Notification";
import {NftTableSummaryWrapper} from "../organisms/NftTableSummary";
import {HowIsWrapper} from "../molecules/HowIs";
import { NftsContext } from "../../contexts/NftsContext";

const TokenDashboard = () => {
    const { handlers } = useContext(AppStateContext)
    const [viewLoading, setViewLoading] = useState(false)
    const { nftsG, loading } = useContext(NftsContext)

    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    return (
        <>
            <MemoHeader />
            <TokenDashboardTemplate sidebar={(isMobile || !isTablet) && <HowIsWrapper />}>
                <MemoTableSummary />
                {viewLoading || loading ? 'loading' : ''}

                {/* <ClaimRewardsModal/> */}
                <NftTableWrapper
                    loading={loading || viewLoading}
                    nfts={nftsG}
                    onClaim={handlers.onClaim}
                    onActions={handlers.onActions}
                />
            </TokenDashboardTemplate>
            {(isMobile || isTablet) && <TokenDashboardNavbar />}
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
