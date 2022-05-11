import { DetailedHTMLProps, FC, ReactNode, SourceHTMLAttributes, VideoHTMLAttributes } from "react"
import { style } from "typestyle"
import { TitleMedium, BodyText } from "../atoms"

interface LearningBlockProps {
	titleText: ReactNode
	subtitleText: ReactNode
	backgroundImage: string
	videoAttributes?: VideoHTMLAttributes<HTMLVideoElement>
	sources: SourceHTMLAttributes<HTMLSourceElement>[]
}

export const LearningBlock: FC<LearningBlockProps> = ({ titleText, subtitleText, backgroundImage, videoAttributes, sources }) => {
	const container = style({
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

	return (
		<div className={container}>
			<div className={header}>
				<TitleMedium>{titleText}</TitleMedium>
				<BodyText>{subtitleText}</BodyText>
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
