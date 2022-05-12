import React from "react"

import { FC, ReactNode, useContext } from "react"
import { style } from "typestyle"
import { DictionaryContext } from "../../contexts/DictionaryContext"
import { ButtonRed, TitleMedium, TextRed } from "../atoms"

interface SummaryTotalUnclaimedProps {
	title: ReactNode
	unclaimedAmount: ReactNode
	buttonText: ReactNode
	token: ReactNode
	onClaimAll: () => void;
}

export const SummaryTotalUnclaimed: FC<SummaryTotalUnclaimedProps> = ({ title, unclaimedAmount, buttonText, token, onClaimAll }) => {
	const container = style({
		display: "flex",
		gap: "5px"
	})

	const content = style({
		display: "flex",
		flexDirection: "column"
	})

	return (
		<div className={container}>
			<div className={content}>
				<TitleMedium>{title}</TitleMedium>
				<TextRed>{`${unclaimedAmount} ${token}`}</TextRed>
			</div>
			<div>
				<ButtonRed onClick={onClaimAll}>{buttonText}</ButtonRed>
			</div>
		</div>
	)
}

type SummaryTotalUnclaimedLocalizedProps = Pick<SummaryTotalUnclaimedProps, "unclaimedAmount" | "token" | 'onClaimAll'>

export const SummaryTotalUnclaimedLocalized: FC<SummaryTotalUnclaimedLocalizedProps> = (props) => {
	const { nft } = useContext(DictionaryContext)
	return <SummaryTotalUnclaimed {...props} buttonText={nft.dashboard.claim_all.claim_all_btn} title={nft.dashboard.claim_all.total_unclaimed} />
}

interface SummaryTotalUnclaimedWrapperProps {
	unclaimedAmount: number
	token: string;
	onClaimAll: () => void;
}

export const SummaryTotalUnclaimedWrapper: FC<SummaryTotalUnclaimedWrapperProps> = ({ unclaimedAmount, token, onClaimAll }) => {
	return <SummaryTotalUnclaimedLocalized unclaimedAmount={unclaimedAmount} token={token} onClaimAll={onClaimAll}/>
}
