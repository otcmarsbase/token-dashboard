import React, {FC} from "react"
import {style} from "typestyle"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {Text, TagLabelColors, Label} from "../atoms"

const container = style({
    display: "flex",
    flexDirection: "column"
})

const header = style({})

const footer = style({
    display: "flex",
    gap: "10px"
})

export type NftOverviewProps = {
    amount: React.ReactNode
    amountUsd: React.ReactNode
    price: React.ReactNode
    date: React.ReactNode
    labelColor: TagLabelColors
}

export const NftOverviewVisual: FC<NftOverviewProps> = (props) => {
    const {amount, amountUsd} = props

    return (
        <div className={container}>
            <div className={header}>
                <Text>{amount}</Text>
                <Text colors={"gray"} size={'_12'}>{amountUsd}</Text>
            </div>
            <div className={footer}>
                <Label colors={props.labelColor}>
                    <Text>Price</Text>
                    <Text weight={"medium"}>{props.price}</Text>
                </Label>
                <Label>{props.date}</Label>
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
    kind: TagLabelColors
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
