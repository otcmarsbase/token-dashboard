import * as React from "react";
import {
  PlasmicInputNew,
  DefaultInputNewProps
} from "./plasmic/marsbase_components/PlasmicInputNew";
import { TextInputRef } from "@plasmicapp/react-web";

interface InputNewProps extends DefaultInputNewProps {}

function InputNew_(props: InputNewProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicInputNew.useBehavior<InputNewProps>(
    props,
    ref
  );
  return <PlasmicInputNew {...plasmicProps} />;
}

const InputNew = React.forwardRef(InputNew_);

export default Object.assign(InputNew, {
  __plumeType: "text-input"
});
