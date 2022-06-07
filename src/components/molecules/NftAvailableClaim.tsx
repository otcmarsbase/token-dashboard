import React from "react"

import {FC, ReactNode, useContext} from "react"
import {Text, Button} from "../atoms"
import {style} from "typestyle"
import {DictionaryContext} from "../../contexts/DictionaryContext"

interface NftAvailableClaimProps {
    amount: ReactNode
    amountUsd: ReactNode
    btnClaimText: ReactNode
    btnActionsText: ReactNode
    token: ReactNode
    onClaim: () => void
    onActions: () => void
}

export const NftAvailableClaim: FC<NftAvailableClaimProps> = (
    {
        amount,
        amountUsd,
        btnActionsText,
        btnClaimText,
        token,
        onClaim,
        onActions
    }) => {
    return (
        <div className={content}>
            <div className={contentAmount}>
                <Text colors={"red"} size={'_14'}><b>{`${amount} ${token}`}</b></Text>
                <Text colors={'gray'} size={'_12'}>{amountUsd}</Text>
            </div>
            <div className={contentActions}>
                <Button size={'md'} onClick={onClaim}>
                    <span style={{fontWeight: 600}}>{btnClaimText}</span>
                </Button>
                <Button size={'md'} colors={'defaultStroke'} onClick={onActions}>
                    <span style={{fontWeight: 600}}>{btnActionsText}</span>
                </Button>
            </div>
        </div>
    )
}

const contentAmount = style({
    display: "flex",
    flexDirection: "column",
    alignItems: 'end'
})

const content = style({
    display: "flex",
    gap: "10px"
})

const contentActions = style({
    display: "flex",
    gap: "10px",
    alignItems: 'center'
})

type NftAvailableClaimLocalizedProps = Omit<NftAvailableClaimProps, "btnClaimText" | "btnActionsText">

export const NftAvailableClaimLocalized: FC<NftAvailableClaimLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext)

    return (
        <NftAvailableClaim
            {...props}
            btnClaimText={nft.dashboard.nft_table.nft_card.claim_btn}
            btnActionsText={nft.dashboard.nft_table.nft_card.actions_btn}
        />
    )
}

interface NftAvailableClaimWrapperProps {
	amount: React.ReactNode
	amountUsd: React.ReactNode
	token: string
	onClaim: () => void
	onActions: () => void
}

export const NftAvailableClaimWrapper: FC<NftAvailableClaimWrapperProps> = (props) => {
    const usd = `${props.amountUsd}$`

    return <NftAvailableClaimLocalized {...props} amountUsd={usd}/>
}
