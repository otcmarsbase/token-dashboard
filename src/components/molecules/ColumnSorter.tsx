import { FC, ReactNode } from "react"
import { style } from "typestyle"
import { BodyText, IconExtraSmall } from "../atoms"

interface ColumnSorterProps {
	text: ReactNode
	icon?: ReactNode
}

export const ColumnSorter: FC<ColumnSorterProps> = ({ text }) => {
	const container = style({
		display: "flex",
		gap: "5px"
	})

	return (
		<div className={container}>
			<BodyText>{text}</BodyText>
			<IconExtraSmall />
		</div>
	)
}
