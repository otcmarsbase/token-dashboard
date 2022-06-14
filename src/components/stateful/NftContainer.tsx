import {FC, PropsWithChildren} from "react";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {style} from "typestyle";
import {IMobileNftsContainer} from "../organisms/types";
import NftCard from "../molecules/NftCard";
import React from "react";

export const NftsContainer: FC<PropsWithChildren<IMobileNftsContainer>> = (
    {
        nfts,
        onClaim,
        onActions
    }) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    return (
        <div className={nftContainer(isMobile, isTablet)}>
            {nfts.map((nft) =>
                <NftCard
                    key={nft.id}
                    onClaim={onClaim}
                    onActions={onActions}
                    {...nft}
                />
            )}
        </div>
    )
}

const nftContainer = (isMobile: boolean, isTablet: boolean) => style({
    display: 'grid',
    gridTemplateColumns: `repeat(${(!isMobile && isTablet) ? '2' : '1'}, 1fr)`,
    gap: isTablet ? '15px' : '30px',
    width: '100%'
})