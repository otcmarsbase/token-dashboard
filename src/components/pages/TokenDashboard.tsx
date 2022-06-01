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
            {isMobile ? (
                <div className={mobileNftContainer}>
                    <NftCardMobile
                        nftId={'1'}
                        color={"purple"}
                        onClaim={handlers.onClaim}
                        onActions={handlers.onActions}
                    />
                </div>
            ) : (
                <NftTableWrapper nfts={data.nfts} onClaim={handlers.onClaim} onActions={handlers.onActions}/>
            )}
            {isMobile && <TokenDashboardNavbar/>}
        </TokenDashboardTemplate>
    )
}

const mobileNftContainer = style({
    display: 'flex',
    flexDirection: "column",
    gap: '32px',
    marginBottom: '100px'
})


export default TokenDashboard
