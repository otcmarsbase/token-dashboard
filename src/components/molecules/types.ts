import React, {ReactNode, SourceHTMLAttributes, VideoHTMLAttributes} from "react";
import {TagLabelColors} from "../atoms/Label";
import {INft} from "../organisms/types";

export interface HeaderActionsProps {
    btnText: ReactNode
    btnGradientText: ReactNode
    onSellWithPremium: () => void;
    onBuyNow: () => void
    token: string
}

export type HeaderActionsLocalizedProps = Omit<HeaderActionsProps, 'btnText' | 'btnGradientText'>

export interface HeaderOverviewProps {
    title: ReactNode
    subTitle: ReactNode
    howToUseText: ReactNode
}

export interface LearningBlockProps {
    titleText: ReactNode
    subtitleText: ReactNode
    backgroundImage: string
    videoAttributes?: VideoHTMLAttributes<HTMLVideoElement>
    sources: SourceHTMLAttributes<HTMLSourceElement>[]
}

export interface NftAvailableClaimProps {
    available: ReactNode
    availableUsd: ReactNode
    btnClaimText: ReactNode
    btnActionsText: ReactNode
    token: ReactNode
    onClaim: () => void
    onActions: () => void
}

export type NftAvailableClaimLocalizedProps = Omit<NftAvailableClaimProps, "btnClaimText" | "btnActionsText">;

export interface IDates {
    activation: string;
    start: string;
    end: string;
}

export interface NftDetailsItemProps {
    title: string;
    amount?: number;
    usd?: number;
    buyPrice?: number;
    token?: string;
    dates?: IDates
}

export type NftOverviewLocalizedProps = Omit<NftOverviewProps, "price" | "date" | 'priceLabel'> & {
    priceAmount: React.ReactNode
    startedDate: React.ReactNode
}

export type NftOverviewWrapperProps = {
    amount: React.ReactNode
    token: string
    buyPrice: React.ReactNode
    usdValue: React.ReactNode
    unvestStartTimestamp: string
    kind: TagLabelColors
}

export interface NftProgressProps {
    amount: ReactNode
    token: ReactNode
    locked: ReactNode
    percentComplete: number
    timePassed: ReactNode
    percentLeft: number
    timeLeft: ReactNode
    lockedCaption: ReactNode
}

export type NftProgressLocalizedProps = Omit<NftProgressProps, "lockedCaption">

export interface ColumnSorterProps {
    text: ReactNode;
    onSort: () => void;
}

export interface INftSelectCard {
    active?: boolean;
    color: ColorTypes;
    amount: number;
    token: string;
    usd: number;
    price: number;
    started: number;
}

export type ColorTypes = 'gold' | 'goldDark' | 'red' | 'silver' | 'purple';

export interface SummaryDestributionProps {
    icon?: ReactNode
    title: ReactNode
    subTitle: ReactNode
    count: ReactNode
}

export interface ClaimRewardsModalProps {
    all?: boolean
    headerTitle: ReactNode
    headerSubTitle: ReactNode
    bodyTitle: ReactNode
    inputLabelUp: ReactNode
    btnClaim: ReactNode
    token: ReactNode
    amount: ReactNode
    onClose: () => void
    availableForClaim: ReactNode;
    onClaim: () => void
    btnClaimLoad: boolean
}

export type ClaimRewardsModalLocalizedProps = Omit<ClaimRewardsModalProps,
    "headerTitle" | "headerSubTitle" | 'bodyTitle' | 'inputLabelUp' | 'btnClaim'>

export interface ConnectWalletProps {
    text: ReactNode;
    title: ReactNode;
    btnText: ReactNode;
    onConnectClick: () => void
}

export interface IsBeingSplittedProps {
    title: ReactNode;
    subTitle: ReactNode;
}

export type IsBeingSplittedLocalizedProps = Omit<IsBeingSplittedProps, ''>

export interface NftCardProps extends INft {
    onClaim: (nftId: string) => void;
    onActions: (nftId: string) => void;
}

export type IColors = { [color in TagLabelColors]: { border: string; icon: string, label: TagLabelColors } };

export type NftCardActionsProps =
    Pick<NftCardProps, 'id' | 'onClaim' | 'onActions' | 'unclaimed' | 'token' | 'availableUsd'>
    & { claim_btn: ReactNode, actions_btn: ReactNode }

export type NftCardActionsLocalizedProps = Omit<NftCardActionsProps, 'claim_btn' | 'actions_btn'>

export type NftCardProgressProps = Pick<NftCardProps,
'locked' | 'token' | 'percentComplete' | 'timePassed' | 'timeLeft'> & {claim_btn: ReactNode}

export type NftOverviewProps = {
    amount: React.ReactNode
    amountUsd: React.ReactNode
    price: React.ReactNode
    date: React.ReactNode
    labelColor: TagLabelColors
    priceLabel: ReactNode
}

export type NftCardOverviewProps =
    Pick<NftCardProps, 'kind' | 'price' | 'started' | 'amount' | 'amountUsd'>
    & { startedText: ReactNode, priceText: ReactNode, lotOfNftText: ReactNode }

export type NftCardOverviewLocalizedProps = Omit<NftCardOverviewProps, "startedText" | 'priceText' | 'lotOfNftText'>

export type NotificationsProps = {
    type: 'success' | 'error'
} & {title: ReactNode, subTitle: ReactNode}