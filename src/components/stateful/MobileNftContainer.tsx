import {FC, PropsWithChildren} from "react";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {style} from "typestyle";
import {IMobileNftsContainer} from "../organisms/types";
import NftCardMobile from "../molecules/NftCardMobile";
import React from "react";

export const MobileNftsContainer: FC<PropsWithChildren<IMobileNftsContainer>> = (
    {
        nfts,
        onClaim,
        onActions
    }) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    if (!isMobile || !isTablet) {
        return null
    }

    return (
        <div className={mobileNftContainer(isMobile, isTablet)}>
            {nfts.map((nft) =>
                <NftCardMobile
                    key={nft.id}
                    onClaim={onClaim}
                    onActions={onActions}
                    {...nft}
                />
            )}
        </div>
    )
}

const mobileNftContainer = (isMobile: boolean, isTablet: boolean) => style({
    display: 'grid',
    gridTemplateColumns: `repeat(${isMobile ? '1' : '2'}, 1fr)`,
    gap: isTablet ? '16px' : '32px',
})