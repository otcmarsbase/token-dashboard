import React, {FC} from 'react';
import NftCardDesktop from "./NftCardDesktop";
import {INft} from "../organisms/types";

const NftCardDesktopData: FC<{ nfts: INft[], onClaim: (id: string) => void, onActions: (id: string) => void }> = (
    {
        nfts,
        onClaim,
        onActions
    }) => {
    return (
        <>
            {nfts.map((nft) => (
                <NftCardDesktop
                    nft={nft}
                    onClaim={() => onClaim(nft.id)}
                    onActions={() => onActions(nft.id)}
                />
            ))}
        </>
    );
};

export default NftCardDesktopData;