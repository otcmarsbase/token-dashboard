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

import ConnectWallet from "../molecules/ConnectWallet";
import adImage from "../../assets/ad.png";

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

    return (
        <>
            <Header>
                <ConnectWithMetamask />
                <TokenDashboardHeader />
            </Header>

            <TokenDashboardTemplate>
                <TDTSummary>
                    <NftTableSummary />
                </TDTSummary>

                <button onClick={() => {
                    if (account)
                        contract?.balanceOf(account)
                            .then(res => console.log(res.toString()))
                }}>Show me balance (for test)</button>

                {/*<ClaimRewardsModal/>*/}
                <div style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: '20px'
                }}>
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
                    {(isMobile || !isTablet) &&
                        <img src={adImage} style={{ height: '230px', marginBottom: isMobile ? '100px' : 'unset' }} alt="" />}
                </div>
                {(isMobile || isTablet) && <TokenDashboardNavbar />}
            </TokenDashboardTemplate >
        </>
    )

}

const mobileNftContainer = (isMobile: boolean, isTablet: boolean) => style({
    display: 'grid',
    gridTemplateColumns: `repeat(${isMobile ? '1' : '2'}, 1fr)`,
    gap: isTablet ? '16px' : '32px',
})


export default TokenDashboard
