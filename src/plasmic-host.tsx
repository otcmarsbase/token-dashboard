import * as React from 'react'

import {createRoot} from "react-dom/client"
import { PlasmicCanvasHost } from '@plasmicapp/host'

const rootElement = document.getElementById("root")
const root = createRoot(rootElement!)

root.render(<PlasmicCanvasHost />)


import { registerComponent } from '@plasmicapp/host'

const wrap = <Props extends {}>(FC: React.FC<Props>) => class extends React.Component<Props> {
	render() {
		return <FC {...this.props} />
	}
}

import { NftOverviewWrapper } from "./components/molecules/NftOverview"
registerComponent(wrap(NftOverviewWrapper), {
	name: "NftOverviewWrapper",
	importPath: "./components/molecules/NftOverview",
	props: {
		amount: "string",
		token: "string",
		buyPrice: "number",
		usdValue: "number",
		kind: "string",
		unvestStartTimestamp: "string",
	}
})

import { SummaryDestributionWrapper } from "./components/molecules/SummaryDestribution"
registerComponent(wrap(SummaryDestributionWrapper), {
	name: "SummaryDestributionWrapper",
	importPath: "./components/molecules/SummaryDestribution",
	props: {
		count: "number",
		icon: "imageUrl",
	}
})
