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
import {useMarsbaseContracts} from "../../hooks/mbase-contract"
import ConnectWallet from "../molecules/ConnectWallet";
import adImage from "../../assets/ad.png";
import Notification from "../molecules/Notification";
import HowIs from "../molecules/HowIs";

const TokenDashboard = () => {
    const {token} = useMarsbaseContracts()
    const {handlers} = useContext(AppStateContext)
    const [renderNfts, setRenderNfts] = useState<INft[]>([])
    const nfts = useNfts()

    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    useEffect(() => {
        console.log(nfts)
        nftDataToView(nfts, token)
            .then(res => setRenderNfts(res))
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
                                         onActions={handlers.onActions}/>
                    )}
                </div>
            </TokenDashboardTemplate>
            {(isMobile || isTablet) && <TokenDashboardNavbar/>}
        </>
    )

}

const mobileNftContainer = (isMobile: boolean, isTablet: boolean) => style({
    display: 'grid',
    gridTemplateColumns: `repeat(${isMobile ? '1' : '2'}, 1fr)`,
    gap: isTablet ? '16px' : '32px',
})


export default TokenDashboard
