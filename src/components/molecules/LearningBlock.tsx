import React from "react"

import { FC } from "react"
import { style } from "typestyle"
import { Text } from "../atoms/Text"
import {LearningBlockProps} from "./types";

export const LearningBlock: FC<LearningBlockProps> = ({ titleText, subtitleText, backgroundImage, videoAttributes, sources }) => {
	return (
		<div className={container(backgroundImage)}>
			<div className={header}>
				<Text weight={'medium'}>{titleText}</Text>
				<Text colors={"gray"}>{subtitleText}</Text>
			</div>
			<div>
				<video className={video} {...videoAttributes}>
					{sources?.map((source, index) => (
						<source key={index} {...source} />
					))}
				</video>
			</div>
		</div>
	)
}

const container = (backgroundImage: string) => style({
	backgroundImage: `url(${backgroundImage})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	display: "flex",
	flexDirection: "column",
	backgroundColor: "grey",
	width: "300px",
	height: "200px",
	color: "white"
})

const header = style({
	display: "flex",
	flexDirection: "column"
})

const video = style({
	width: "200px",
	marginTop: "50px",
	marginLeft: "20px"
})
