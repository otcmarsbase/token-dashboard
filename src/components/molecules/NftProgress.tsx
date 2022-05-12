import React from "react"

import { FC, ReactNode, useContext } from "react"
import { style } from "typestyle"
import { DictionaryContext } from "../../contexts/DictionaryContext"
import { ProgressGradient, BodyText, TextSmallGray } from "../atoms"

interface NftProgressProps {
	amount: ReactNode
	token: ReactNode
	locked: ReactNode
	progressValue: ReactNode
	progressMax: ReactNode
	percentComplete: ReactNode
	timePassed: ReactNode
	percentLeft: ReactNode
	timeLeft: ReactNode
	lockedCaption: ReactNode
}

export const NftProgress: FC<NftProgressProps> = ({
	amount,
	token,
	locked,
	progressValue,
	progressMax,
	percentComplete,
	timePassed,
	percentLeft,
	timeLeft,
	lockedCaption
}) => {
	const container = style({
		width: "250px"
	})

	const content = style({
		width: "100%",
		display: "flex",
		justifyContent: "space-between"
	})

	return (
		<div className={container}>
			<div className={content}>
				<BodyText>{`${amount} ${token}`}</BodyText>
				<BodyText>{`${locked} ${token} ${lockedCaption}`}</BodyText>
			</div>
			<ProgressGradient value={typeof progressValue} max={typeof progressMax} />
			<div className={content}>
				<div>
					<BodyText>{percentComplete}</BodyText>
					<TextSmallGray>{timePassed}</TextSmallGray>
				</div>
				<div>
					<BodyText>{percentLeft}</BodyText>
					<TextSmallGray>{timeLeft}</TextSmallGray>
				</div>
			</div>
		</div>
	)
}

type NftProgressLocalizedProps = Omit<NftProgressProps, "lockedCaption">

export const NftProgressLocalized: FC<NftProgressLocalizedProps> = (props) => {
	const { nft } = useContext(DictionaryContext)

	return <NftProgress {...props} lockedCaption={nft.dashboard.nft_table.nft_card.locked_caption} />
}

interface NftProgressWrapperProps {
	amount: number
	token: string
	locked: number
	progressValue: string
	progressMax: string
	percentComplete: number
	timePassed: string
	timeLeft: string
}

export const NftProgressWrapper: FC<NftProgressWrapperProps> = (props) => {
	const percentLeft = `${100 - props.percentComplete}%`
	const percentComplete = `${props.percentComplete}%`

	return <NftProgressLocalized {...props} percentLeft={percentLeft} percentComplete={percentComplete}/>
}
