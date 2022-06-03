import React, {ReactNode} from "react"
import PlasmicLabel, {LabelProps} from '../Label';
import {DefaultLabelProps} from "../plasmic/marsbase_components/PlasmicLabel";

export type TagLabelColors = "cyan" | "yellow" | "red" | "silver"

export const Label: React.FC<{ children: ReactNode } & LabelProps> = ({children, ...props}) => {
    return <PlasmicLabel {...props}>{children}</PlasmicLabel>
}
