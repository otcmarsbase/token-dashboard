import React, {ReactNode} from "react"

import { style } from "typestyle"
import { COLORS } from "./colors"

export const TAG_COLORS = {
	purple: style({
		backgroundColor: COLORS.purple._,
		color: COLORS.purple.text
	}),
	grey: style({
		backgroundColor: COLORS.white.grey,
		color: COLORS.white.light_grey
	}),
	cyan: style({
		backgroundColor: COLORS.cyan.background,
		color: COLORS.cyan.text
	}),
	yellow: style({
		backgroundColor: COLORS.yellow._,
		color: COLORS.yellow.dark
	}),
	green: style({
		backgroundColor: COLORS.green.background,
		color: COLORS.green.text
	})
}

export type TagLabelColor = keyof typeof TAG_COLORS

export const TagLabel: React.FC<{children: ReactNode, color: TagLabelColor }> = (props) => <span
	className={TAG_COLORS[props.color]}>{props.children}</span>
