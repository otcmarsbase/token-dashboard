import React, { useEffect, useState } from "react"

import {
    TokenDashboardTemplate,
    Summary as TDTSummary,
} from "../templates/TokenDashboardTemplate"
import { Queries, useMediaQuery } from "../../hooks/mediaQuery";
import { style } from "typestyle";
import NftCardMobile from "../molecules/NftCardMobile";
import TokenDashboardNavbar from "../organisms/TokenDasboardNavbar";
import ClaimRewardsModal from "../molecules/ClaimRewardsModal";
import { NftTableSummary, TokenDashboardHeader } from "../organisms"
import { INft, NftTableWrapper } from "../organisms/NftTable"
import { useContext } from "react"
import { AppStateContext } from "../../contexts/AppStateContext"
import { ConnectWithMetamask } from "../organisms/ConnectWithMetamask"
import { Header } from "../templates"
import { useNfts } from "../../hooks/useNfts"
import { nftDataToView } from "../../api"
import { MarsbaseTokenContext, useMarsbaseContracts } from "../../hooks/mbase-contract"
import { useMetaMask } from "metamask-react";

const TokenDashboard = () => {
    const { token } = useMarsbaseContracts()
    const contract = useContext(MarsbaseTokenContext)
    const { account } = useMetaMask()
    const { handlers } = useContext(AppStateContext)
    const [renderNfts, setRenderNfts] = useState<INft[]>([])
    const { nfts, loading } = useNfts()
    const [viewLoading, setViewLoading] = useState(false)

    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    useEffect(() => {
        setViewLoading(true)
        nftDataToView(nfts, token)
            .then(res => {
                setViewLoading(false)
                setRenderNfts(res)
            })
    }, [nfts])

    console.log(renderNfts)
    /* console.log(nfts.map(el => el?.amount.toFixed(0))) */

    return (
        <TokenDashboardTemplate>
            <Header>
                <ConnectWithMetamask />
                <TokenDashboardHeader />
            </Header>
            <TDTSummary>
                <NftTableSummary />
            </TDTSummary>
            <button onClick={() => {
                if (account)
                    contract?.balanceOf(account)
                        .then(res => console.log(res.toString()))
            }}>Show me balance (for test)</button>
            {loading || viewLoading ? 'loading' : ''}

            {/*<ClaimRewardsModal/>*/}
            {(isMobile || isTablet) ? (
                <div className={mobileNftContainer(isMobile, isTablet)}>
                    {renderNfts.map((nft) =>
                        <NftCardMobile
                            onClaim={handlers.onClaim}
                            onActions={handlers.onActions}
                            {...nft}
                        />
                    )}
                </div>
            ) : (
                <NftTableWrapper nfts={renderNfts ? renderNfts : []} onClaim={handlers.onClaim}
                    onActions={handlers.onActions} />
            )}
            {(isMobile || isTablet) && <TokenDashboardNavbar />}

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
