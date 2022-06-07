import React, {useEffect, useState} from "react"

import {
    TokenDashboardTemplate,
    Summary as TDTSummary,
} from "../templates/TokenDashboardTemplate"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {style} from "typestyle";
import NftCardMobile from "../molecules/NftCardMobile";
import TokenDashboardNavbar from "../organisms/TokenDasboardNavbar";
import ClaimRewardsModal from "../molecules/ClaimRewardsModal";
import {NftTableSummary, TokenDashboardHeader} from "../organisms"
import {INft, NftTableWrapper} from "../organisms/NftTable"
import {useContext} from "react"
import {AppStateContext} from "../../contexts/AppStateContext"
import {ConnectWithMetamask} from "../organisms/ConnectWithMetamask"
import {Header} from "../templates"
import {useNfts} from "../../hooks/useNfts"
import {nftDataToView} from "../../api"
import {MarsbaseTokenContext, useMarsbaseContracts} from "../../hooks/mbase-contract"
import {useMetaMask} from "metamask-react";

import ConnectWallet from "../molecules/ConnectWallet";
import adImage from "../../assets/ad.png";
import Notification from "../molecules/Notification";
import HowIs from "../molecules/HowIs";

const TokenDashboard = () => {
    const {token} = useMarsbaseContracts()
    const contract = useContext(MarsbaseTokenContext)
    const {account} = useMetaMask()
    const {handlers} = useContext(AppStateContext)
    const [renderNfts, setRenderNfts] = useState<INft[]>([])
    const {nfts, loading} = useNfts()
    const [viewLoading, setViewLoading] = useState(false)

    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);


    console.log(renderNfts)
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
                <ConnectWithMetamask/>
                <TokenDashboardHeader/>
            </Header>
            <TokenDashboardTemplate sidebar={(isMobile || !isTablet) && <HowIs/>}>
                <TDTSummary>
                    <NftTableSummary/>
                </TDTSummary>

                <button onClick={() => {
                    if (account)
                        contract?.balanceOf(account)
                            .then(res => console.log(res.toString()))
                }}>Show me balance (for test)
                </button>

                {/*<ClaimRewardsModal/>*/}
                <NftTableWrapper
                    loading={loading}
                    nfts={renderNfts ? renderNfts : []}
                    onClaim={handlers.onClaim}
                    onActions={handlers.onActions}
                />
            </TokenDashboardTemplate>
            {(isMobile || isTablet) && <TokenDashboardNavbar/>}
        </>
    )
}


export default TokenDashboard
