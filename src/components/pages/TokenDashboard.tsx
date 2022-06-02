import React from "react"

import {
    TokenDashboardTemplate,
    Summary as TDTSummary,
} from "../templates/TokenDashboardTemplate"
import {NftTableSummary, TokenDashboardHeader} from "../organisms"
import {NftTableWrapper} from "../organisms/NftTable"
import {useContext} from "react"
import {AppStateContext} from "../../contexts/AppStateContext"
import {ConnectWithMetamask} from "../organisms/ConnectWithMetamask"
import {Header} from "../templates"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {style} from "typestyle";

import NftCardMobile from "../molecules/NftCardMobile";
import TokenDashboardNavbar from "../organisms/TokenDasboardNavbar";
import ClaimRewardsModal from "../molecules/ClaimRewardsModal";


const TokenDashboard = () => {
    const {data, handlers} = useContext(AppStateContext)
    // const { blockNumber, status } = useJsonRpc();

    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    return (
        <TokenDashboardTemplate>
            <Header>
                <ConnectWithMetamask/>
                <TokenDashboardHeader/>
            </Header>
            <TDTSummary>
                <NftTableSummary/>
            </TDTSummary>
            <ClaimRewardsModal/>
            {(isMobile || isTablet) ? (
                <div className={mobileNftContainer(isMobile, isTablet)}>
                    <NftCardMobile
                        nftId={'1'}
                        color={"purple"}
                        onClaim={handlers.onClaim}
                        onActions={handlers.onActions}
                    />
                    <NftCardMobile
                        nftId={'2'}
                        color={"goldDark"}
                        onClaim={handlers.onClaim}
                        onActions={handlers.onActions}
                    />
                    <NftCardMobile
                        nftId={'3'}
                        color={"gold"}
                        onClaim={handlers.onClaim}
                        onActions={handlers.onActions}
                    />
                </div>
            ) : (
                <NftTableWrapper nfts={data.nfts} onClaim={handlers.onClaim} onActions={handlers.onActions}/>
            )}
            {(isMobile || isTablet) && <TokenDashboardNavbar/>}
        </TokenDashboardTemplate>
    )
}

const mobileNftContainer = (isMobile: boolean, isTablet: boolean) => style({
    display: 'grid',
    gridTemplateColumns: `repeat(${isMobile ? '1' : '2'}, 1fr)`,
    gap: isTablet ? '16px' : '32px',
    marginBottom: '100px'
})


export default TokenDashboard
