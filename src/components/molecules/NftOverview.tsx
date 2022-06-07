import React, {FC} from "react"
import {style} from "typestyle"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {Text, Label, TagLabelColors} from "../atoms";

import goldNftIcon from '../../assets/goldNft.svg';
import darkGoldNftIcon from '../../assets/goldDarkNft.svg';
import nftPurpleIcon from '../../assets/purpleNft.svg';
import nftRedIcon from '../../assets/redNft.svg';
import nftSilverIcon from '../../assets/silverNft.svg';
import redNftIcon from "../../assets/redNft.svg";
import purpleNftIcon from "../../assets/purpleNft.svg";
import {IColors} from "./NftCardMobile";

export type NftOverviewProps = {
    amount: React.ReactNode
    amountUsd: React.ReactNode
    price: React.ReactNode
    date: React.ReactNode
    labelColor: TagLabelColors
}

export const NftOverviewVisual: FC<NftOverviewProps> = (props) => {
    const {amount, amountUsd, labelColor} = props;

    const colors: IColors = {
        yellow: {
            label: 'yellow',
            border: 'rgba(255, 214, 108, 0.5)',
            icon: goldNftIcon
        },
        silver: {
            label: 'silver',
            border: 'rgba(221, 221, 221, 0.5)',
            icon: redNftIcon
        },
        red: {
            label: 'red',
            border: 'rgba(236, 104, 62, 0.5)',
            icon: redNftIcon
        },
        cyan: {
            label: 'cyan',
            border: 'rgba(115, 255, 247, 0.5)',
            icon: purpleNftIcon
        }
    }

    return (
        <div className={container}>
            <img src={colors[labelColor]?.icon || ''} style={{height: '60px', marginRight: '12px'}} alt=""/>
            <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                <div className={header}>
                    <Text size={'_14'}>{amount}</Text>
                    <Text colors={'gray'} size={'_12'}>{amountUsd}</Text>
                </div>
                <div className={footer}>
                    <Label colors={colors[labelColor]?.label || ''}>
                        <span>Price </span>
                        <span style={{fontWeight: 600}}>{props.price}</span>
                    </Label>
                    <Label>{props.date}</Label>
                </div>
            </div>
        </div>
    )
}

const container = style({
    display: "flex",
    flexDirection: "row",
    alignItems: 'center'
})

const header = style({
    display: 'flex',
    gap: '4px'
})

const footer = style({
    display: "flex",
    gap: "4px"
})

export type NftOverviewLocalizedProps = Omit<NftOverviewProps, "price" | "date"> & {
    priceAmount: React.ReactNode
    startedDate: React.ReactNode
}
export const NftOverviewLocalized: React.FC<NftOverviewLocalizedProps> = (props) => {
    let dict = React.useContext(DictionaryContext)
    let nft_card = dict.nft.dashboard.nft_table.nft_card

    return (
        <NftOverviewVisual
            {...props}
            price={props.priceAmount}
            date={`${nft_card.unvest_start_date_label} ${props.startedDate}`}
        />
    )
}

export const formatDate = (timestamp: number) => new Date(timestamp).toDateString()

export type NftOverviewWrapperProps = {
    amount: React.ReactNode
    token: string
    buyPrice: React.ReactNode
    usdValue: React.ReactNode
    unvestStartTimestamp: number
    kind: TagLabelColors
}
export const NftOverviewWrapper: React.FC<NftOverviewWrapperProps> = (props) => {
    return (
        <NftOverviewLocalized
            amount={`${props.amount} ${props.token}`}
            amountUsd={`~$${props.usdValue}`}
            priceAmount={props.buyPrice}
            startedDate={formatDate(props.unvestStartTimestamp)}
            labelColor={props.kind}
        />
    )
}
