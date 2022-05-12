import React from "react"

import { FC, ReactNode, useContext } from "react"
import { TextRed, BodyText, Button } from "../atoms"
import { style } from "typestyle"
import { NftOverviewLocalized } from "./NftOverview"
import { DictionaryContext } from "../../contexts/DictionaryContext"
import PlasmicButton from "../Button"

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
				<TextRed>{`${amount} ${token}`}</TextRed>
				<BodyText>{amountUsd}</BodyText>
			</div>
			<div className={contentActions}>
				<PlasmicButton size="xs" colors="standart" onClick={onClaim}>{btnClaimText}</PlasmicButton>
				<Button onClick={onActions}>{btnActionsText}</Button>
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
