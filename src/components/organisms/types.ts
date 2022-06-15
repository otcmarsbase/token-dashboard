import {TagLabelColors} from "../atoms/Label";
import {PropsWithChildren, ReactNode} from "react";

export type INftStatic = {
    id: string
    kind: TagLabelColors
    amount: string
    amountUsd: string
    token: string
    price: string
    started: string

    start: string
    initialStart: string

    end: string
}
export type INftDynamic = {
    locked: string
    unclaimed: string
    percentComplete: number
    timePassed: string
    timeLeft: string
    available: string
    availableUsd: string
}
export type INft = INftStatic & INftDynamic

export interface NftTableProps {
    nfts: INft[]
    onClaim: (nftId: string) => void
    onActions: (nftId: string) => void
}

export type IMobileNftsContainer = Pick<NftTableProps, 'nfts' | 'onClaim' | 'onActions'>