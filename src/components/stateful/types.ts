import {ReactNode} from "react";

export interface NftProgressWrapperProps {
    amount: string
    token: string
    locked: string
    percentComplete: number
    timePassed: string
    timeLeft: string
}

export interface SummaryTotalUnclaimedWrapperProps {
    unclaimedAmount: number
    token: string;
    onClaimAll: () => void;
}

export type SummaryTotalUnclaimedLocalizedProps = Pick<SummaryTotalUnclaimedProps, "unclaimedAmount" | "token" | 'onClaimAll'>

export interface SummaryTotalUnclaimedProps {
    title: ReactNode
    unclaimedAmount: ReactNode
    buttonText: ReactNode
    token: ReactNode
    onClaimAll: () => void;
}