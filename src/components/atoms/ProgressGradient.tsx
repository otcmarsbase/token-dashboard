import { FC } from "react"
import { style } from "typestyle"

interface ProgressGradientProps {
	value: string
	max: string
}

export const ProgressGradient: FC<ProgressGradientProps> = ({ value, max }) => {
	const progressStyle = style({
		width: "100%"
	})

	return <progress className={progressStyle} value={value} max={max} />
}
