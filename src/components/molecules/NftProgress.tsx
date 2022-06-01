import React from "react"

import { FC, ReactNode, useContext } from "react"
import { style } from "typestyle"
import { DictionaryContext } from "../../contexts/DictionaryContext"
import { ProgressGradient, Text } from "../atoms"

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
		// <div className={container}>
		// 	<div className={content}>
		// 		<Text>{`${amount} ${token}`}</Text>
		// 		<Text>{`${locked} ${token} ${lockedCaption}`}</Text>
		// 	</div>
		// 	<ProgressGradient value={typeof progressValue} max={typeof progressMax} />
		// 	<div className={content}>
		// 		<div>
		// 			<Text>{percentComplete}</Text>
		// 			<Text size={'_12'} colors={"gray"}>{timePassed}</Text>
		// 		</div>
		// 		<div>
		// 			<Text>{percentLeft}</Text>
		// 			<Text size={"_12"} colors={"gray"}>{timeLeft}</Text>
		// 		</div>
		// 	</div>
		// </div>
		<div style={{display: 'flex', flexDirection: 'column', width: '100%', gap: '5px'}}>
			<div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
				<Text size={'_10'}>{`${amount} ${token}`}</Text>
				<Text colors={'gray'}>{`${locked} ${token} ${lockedCaption}`}</Text>
			</div>
			<div>
				<div className={progressContainer}>
					<div className={progressLine(95.1)}/>
				</div>
			</div>
			<div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
				<div>
					<Text size={'_10'}>{percentComplete}</Text>
					<Text size={'_10'} colors={'gray'}>{timePassed}</Text>
				</div>
				<div>
					<Text size={'_10'}>{percentLeft}</Text>
					<Text size={'_10'} colors={'gray'}>{timeLeft}</Text>
				</div>
			</div>
		</div>
	)
}

const progressContainer = style({
	backgroundColor: 'rgba(104, 106, 110, 1)',
	borderRadius: '4px',
	position: 'relative',
	height: '6px'
})

const progressLine = (progress: number) => style({
	position: 'absolute',
	width: `${progress}%`,
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	background: 'linear-gradient(90deg, #FF1414 0%, #EAEE2C 48.44%, #7BDA1D 100%)',
	borderRadius: '4px',
})

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
