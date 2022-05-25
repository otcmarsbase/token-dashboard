import * as React from "react";
import {
  PlasmicInput2,
  DefaultInput2Props
} from "./plasmic/marsbase_components/PlasmicInput2";
import { TextInputRef } from "@plasmicapp/react-web";

interface Input2Props extends DefaultInput2Props {}

function Input2_(props: Input2Props, ref: TextInputRef) {
  const { plasmicProps } = PlasmicInput2.useBehavior<Input2Props>(props, ref);
  return <PlasmicInput2 {...plasmicProps} />;
}

const Input2 = React.forwardRef(Input2_);

export default Object.assign(Input2, {
  __plumeType: "text-input"
});
