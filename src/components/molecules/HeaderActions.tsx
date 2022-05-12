import React from "react"

import { Button, ButtonGradient } from "../atoms"
import { style } from "typestyle"
import { FC, ReactNode, useContext } from "react"
import { DictionaryContext } from "../../contexts/DictionaryContext"

interface HeaderActionsProps {
	btnText: ReactNode
	btnGradientText: ReactNode
	onSellWithPremium: () => void;
	onBuyNow: () => void
	token: string
}

export const HeaderActions: FC<HeaderActionsProps> = (
	{
		btnText,
		btnGradientText,
		onSellWithPremium,
		onBuyNow
	}) => {

	const container = style({
		display: "flex",
		gap: "5px"
	})

	return (
		<div className={container}>
			<Button onClick={onSellWithPremium}>{btnText}</Button>
			<ButtonGradient onClick={onBuyNow}>{btnGradientText}</ButtonGradient>
		</div>
	)
}

type HeaderActionsLocalizedProps = Omit<HeaderActionsProps, 'btnText'| 'btnGradientText'>

export const HeaderActionsLocalized: FC<HeaderActionsLocalizedProps> = (props) => {
	const { nft } = useContext(DictionaryContext)

	return <HeaderActions {...props} btnText={nft.dashboard.sell_with_premium_btn(props.token)}
												btnGradientText={nft.dashboard.buy_now_btn(props.token)} />
}

interface HeaderActionsWrapperProps {
	token: string;
	onSellWithPremium: () => void;
	onBuyNow: () => void
}

export const HeaderActionsWrapper: FC<HeaderActionsWrapperProps> = (props) => {
	return <HeaderActionsLocalized {...props} />
}
