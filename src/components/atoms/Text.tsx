import React, {ReactNode} from "react"

import { style } from "typestyle"

import { COLORS } from "./colors"

// export type TextSize = typeof TextSize[keyof typeof TextSize]
export const TEXT_SIZE = {
	normal: {
		s: 10,
		m: 12,
		l: 14,
		xl: 16,
		xxl: 18
	},
	header: {
		medium: 14,
		huge: 32
	}
}

// export type HeaderTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
// export type OtherTag = "div" | "p" | "span"
// export type TextProps = {
//   // tag: HeaderTag | OtherTag
//   color: string
//   size: TextSize
//   bold: boolean
//   italic: boolean
// }
// export const Text: React.FC<TextProps> = props => (
//   <span>{props.children}</span>
// )

const styledSpan = (css: string): React.FC<{children: ReactNode}> => (props) => <span className={css}>{props.children}</span>

export const titleCss = style({
	fontSize: TEXT_SIZE.header.huge
})
export const Title = styledSpan(titleCss)

export const titleMediumCss = style({
	fontSize: TEXT_SIZE.header.medium
})
export const TitleMedium = styledSpan(titleMediumCss)

export const BodyText = styledSpan(
	style({
		fontSize: TEXT_SIZE.normal.m
	})
)
export const TextSmallGray = styledSpan(
	style({
		fontSize: TEXT_SIZE.normal.s,
		color: COLORS.white.light_grey
	})
)

export const TextSmall = styledSpan(
	style({
		fontSize: TEXT_SIZE.normal.s,
		color: COLORS.white._
	})
)

export const TextRed = styledSpan(
	style({
		fontSize: TEXT_SIZE.normal.m,
		color: COLORS.red._
	})
)
