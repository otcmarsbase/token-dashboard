import React from "react"

import { FC, ReactNode, useContext } from "react"
import { Title, BodyText } from "../atoms"
import { DictionaryContext } from "../../contexts/DictionaryContext"

interface HeaderOverviewProps {
	title: ReactNode
	subTitle: ReactNode
}

const HeaderOverviewVisual: FC<HeaderOverviewProps> = ({ title, subTitle }) => {
	return (
		<div>
			<div>
				<Title>{title}</Title>
			</div>
			<div>
				<BodyText>{subTitle}</BodyText>
			</div>
		</div>
	)
}

export const NftOverviewLocalized: React.FC = () => {
	const { nft } = useContext(DictionaryContext);

	return <HeaderOverviewVisual title={nft.dashboard.page_title} subTitle={nft.dashboard.page_description} />
}

interface HeaderOverviewWrapperProps {}

export const HeaderOverviewWrapper: React.FC<HeaderOverviewWrapperProps> = (props) => {
	return <NftOverviewLocalized />
}

export default HeaderOverviewVisual
