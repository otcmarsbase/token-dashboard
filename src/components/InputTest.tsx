import * as React from "react";
import {
  PlasmicInputTest,
  DefaultInputTestProps
} from "./plasmic/marsbase_components/PlasmicInputTest";
import { TextInputRef } from "@plasmicapp/react-web";

interface InputTestProps extends DefaultInputTestProps {}

function InputTest_(props: InputTestProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicInputTest.useBehavior<InputTestProps>(
    props,
    ref
  );
  return <PlasmicInputTest {...plasmicProps} />;
}

const InputTest = React.forwardRef(InputTest_);

export default Object.assign(InputTest, {
  __plumeType: "text-input"
});
