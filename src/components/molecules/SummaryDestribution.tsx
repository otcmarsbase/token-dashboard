import React from "react"

import { FC, ReactNode, useContext } from "react"
import { style } from "typestyle"
import { DictionaryContext } from "../../contexts/DictionaryContext"
import { Text, Icon, Count } from "../atoms"

interface SummaryDestributionProps {
	icon?: ReactNode
	title: ReactNode
	subTitle: ReactNode
	count: ReactNode
}

const SummaryDestribution: FC<SummaryDestributionProps> = ({ title, subTitle, count }) => {
	const container = style({
		display: "flex",
		width: "300px"
	})
	const content = style({
		display: "flex",
		flexDirection: "column"
	})

	const contentHeader = style({
		display: "flex",
		gap: "5px"
	})

	return (
		<div className={container}>
			<Icon />
			<div className={content}>
				<div className={contentHeader}>
					<Text weight={'medium'}>{title}</Text>
					<Count>{count}</Count>
				</div>
				<Text>{subTitle}</Text>
			</div>
		</div>
	)
}

type SummaryDestributionLocalizedProps = Pick<SummaryDestributionProps, "count" | "icon">

export const SummaryDestributionLocalized: FC<SummaryDestributionLocalizedProps> = (props) => {
	const { nft } = useContext(DictionaryContext)

	return <SummaryDestribution {...props} title={nft.dashboard.summary.header} subTitle={nft.dashboard.summary.desc} />
}

interface SummaryDestributionWrapperProps {
	count: number
	icon: string
}

export const SummaryDestributionWrapper: FC<SummaryDestributionWrapperProps> = ({ count, icon }) => {
	return <SummaryDestributionLocalized count={count} icon={icon} />
}

export default SummaryDestribution
