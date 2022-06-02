import React, {FC} from "react"
import {style} from "typestyle"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {Text, Label} from "../atoms";

import goldNftIcon from '../../assets/goldNft.svg';
import darkGoldNftIcon from '../../assets/goldDarkNft.svg';
import nftPurpleIcon from '../../assets/purpleNft.svg';
import nftRedIcon from '../../assets/redNft.svg';
import nftSilverIcon from '../../assets/silverNft.svg';

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
    gap: "10px"
})

export type NftOverviewProps = {
    amount: React.ReactNode
    amountUsd: React.ReactNode
    price: React.ReactNode
    date: React.ReactNode
    labelColor: 'gold' | 'goldDark' | 'red' | 'silver' | 'purple';
}

export const NftOverviewVisual: FC<NftOverviewProps> = (props) => {
    const {amount, amountUsd, labelColor} = props;

    const covertLabelColor = (color: 'gold' | 'goldDark' | 'red' | 'silver' | 'purple') => {
        switch (color) {
            case "gold":
            case "goldDark":
                return 'yellow'
            case "purple":
                return 'cyan'
            case "red":
                return 'red'
            case "silver":
                return undefined
        }
    }

    const getNftIcon = (color: 'gold' | 'goldDark' | 'red' | 'silver' | 'purple') => {
        switch (color) {
            case "gold":
                return goldNftIcon
            case "goldDark":
                return darkGoldNftIcon
            case "purple":
                return nftPurpleIcon
            case "red":
                return nftRedIcon
            case "silver":
                return nftSilverIcon
        }
    }

    return (
        <div className={container}>
            <img src={getNftIcon(labelColor)} style={{height: '60px'}} alt=""/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className={header}>
                    <Text size={'_14'}>{amount}</Text>
                    <Text colors={'gray'} size={'_12'}>{amountUsd}</Text>
                </div>
                <div className={footer}>
                    <Label colors={covertLabelColor(labelColor)}>
                        <span>Price </span>
                        <span style={{fontWeight: 600}}>{props.price}</span>
                    </Label>
                    <Label>{props.date}</Label>
                </div>
            </div>

        </div>
    )
}

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
    amount: number | string
    token: string
    buyPrice: number
    usdValue: number
    unvestStartTimestamp: number
    kind: 'gold' | 'goldDark' | 'red' | 'silver' | 'purple';
}
export const NftOverviewWrapper: React.FC<NftOverviewWrapperProps> = (props) => {
    return (
        <NftOverviewLocalized
            amount={`${props.amount} ${props.token}`}
            amountUsd={`~$${props.usdValue}`}
            priceAmount={props.buyPrice.toPrecision(4)}
            startedDate={formatDate(props.unvestStartTimestamp)}
            labelColor={props.kind}
        />
    )
}
