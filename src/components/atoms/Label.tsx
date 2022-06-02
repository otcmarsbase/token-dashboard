import React, {ReactNode} from "react"
import PlasmicLabel, {LabelProps} from '../Label';

export type TagLabelColors = "purple" | "cyan" | "green" | 'yellow'

export const Label: React.FC<{ children: ReactNode } & LabelProps> = ({children, ...props}) => {
    return <PlasmicLabel {...props}>{children}</PlasmicLabel>
}
