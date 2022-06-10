import React, {FC, ReactNode} from "react"
import {style} from "typestyle"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {Label} from "../atoms/Label";
import {Text} from '../atoms/Text'
import {NftOverviewLocalizedProps, NftOverviewProps, NftOverviewWrapperProps} from "./types";
import {colors} from "./CONSTANTS";

export const NftOverviewVisual: FC<NftOverviewProps> = (props) => {
    const {amount, amountUsd, labelColor, priceLabel} = props;

    return (
        <div className={container}>
            <img src={colors[labelColor].icon} style={{height: '60px', marginRight: '12px'}} alt=""/>
            <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                <div className={header}>
                    <Text size={'_14'}>{amount}</Text>
                    <Text colors={'gray'} size={'_12'}>{amountUsd}</Text>
                </div>
                <div className={footer}>
                    <Label colors={colors[labelColor].label}>
                        <span>{priceLabel} </span>
                        <span style={{fontWeight: 600}}>{props.price}</span>
                    </Label>
                    <Label>{props.date}</Label>
                </div>
            </div>
        </div>
    )
}

export const NftOverviewLocalized: React.FC<NftOverviewLocalizedProps> = (props) => {
    let dict = React.useContext(DictionaryContext)
    let nft_card = dict.nft.dashboard.nft_table.nft_card

    return (
        <NftOverviewVisual
            {...props}
            price={props.priceAmount}
            date={`${nft_card.unvest_start_date_label} ${props.startedDate}`}
            priceLabel={dict.nft.dashboard.nft_table.nft_card.price_label}
        />
    )
}

export const formatDate = (datestring: string) => new Date(Date.parse(datestring)).toLocaleDateString('ru')

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

const container = style({
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    padding: '16px'
})

const header = style({
    display: 'flex',
    gap: '4px'
})

const footer = style({
    display: "flex",
    gap: "4px"
})
