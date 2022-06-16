import * as React from 'react'

import {createRoot} from "react-dom/client"
import { PlasmicCanvasHost } from '@plasmicapp/host'

const rootElement = document.getElementById("root")
const root = createRoot(rootElement!)

root.render(<PlasmicCanvasHost />)

const wrap = <Props extends {}>(FC: React.FC<Props>) => class extends React.Component<Props> {
	render() {
		return <FC {...this.props} />
	}
}
