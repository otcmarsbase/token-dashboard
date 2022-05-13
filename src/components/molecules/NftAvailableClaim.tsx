import React from "react"

import { FC, ReactNode, useContext } from "react"
import { Text, Button } from "../atoms"
import { style } from "typestyle"
import { DictionaryContext } from "../../contexts/DictionaryContext"

interface NftAvailableClaimProps {
	amount: ReactNode
	amountUsd: ReactNode
	btnClaimText: ReactNode
	btnActionsText: ReactNode
	token: ReactNode
	onClaim: () => void
	onActions: () => void
}

const contentAmount = style({
	display: "flex",
	flexDirection: "column"
})

const content = style({
	display: "flex",
	gap: "10px"
})

const contentActions = style({
	display: "flex",
	gap: "10px"
})
export const NftAvailableClaim: FC<NftAvailableClaimProps> = ({
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
				<Text colors={"red"}>{`${amount} ${token}`}</Text>
				<Text>{amountUsd}</Text>
			</div>
			<div className={contentActions}>
				<Button size={'md'} onClick={onClaim}>{btnClaimText}</Button>
				<Button size={'md'} colors={'defaultStroke'} onClick={onActions}>{btnActionsText}</Button>
			</div>
		</div>
	)
}

type NftAvailableClaimLocalizedProps = Omit<NftAvailableClaimProps, "btnClaimText" | "btnActionsText">

export const NftAvailableClaimLocalized: FC<NftAvailableClaimLocalizedProps> = (props) => {
	const { nft } = useContext(DictionaryContext)

	return (
		<NftAvailableClaim
			{...props}
			btnClaimText={nft.dashboard.nft_table.nft_card.claim_btn}
			btnActionsText={nft.dashboard.nft_table.nft_card.actions_btn}
		/>
	)
}

interface NftAvailableClaimWrapperProps {
	amount: number
	amountUsd: number
	token: string
	onClaim: () => void
	onActions: () => void
}

export const NftAvailableClaimWrapper: FC<NftAvailableClaimWrapperProps> = (props) => {
	const usd = `${props.amountUsd}$`

	return <NftAvailableClaimLocalized {...props} amountUsd={usd} />
}
