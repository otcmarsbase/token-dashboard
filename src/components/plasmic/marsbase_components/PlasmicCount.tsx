// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ujWBNnbL2n4RZDdiZiYFdw
// Component: ArKwfI2osU
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_marsbase_components.module.css"; // plasmic-import: ujWBNnbL2n4RZDdiZiYFdw/projectcss
import sty from "./PlasmicCount.module.css"; // plasmic-import: ArKwfI2osU/css

export type PlasmicCount__VariantMembers = {
  colors: "gradient" | "gray";
  distribution: "distribution";
};

export type PlasmicCount__VariantsArgs = {
  colors?: SingleChoiceArg<"gradient" | "gray">;
  distribution?: SingleBooleanChoiceArg<"distribution">;
};

type VariantPropType = keyof PlasmicCount__VariantsArgs;
export const PlasmicCount__VariantProps = new Array<VariantPropType>(
  "colors",
  "distribution"
);

export type PlasmicCount__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCount__ArgsType;
export const PlasmicCount__ArgProps = new Array<ArgPropType>("children");

export type PlasmicCount__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultCountProps {
  children?: React.ReactNode;
  colors?: SingleChoiceArg<"gradient" | "gray">;
  distribution?: SingleBooleanChoiceArg<"distribution">;
  className?: string;
}

export const defaultCount__Args: Partial<PlasmicCount__ArgsType> = {};

function PlasmicCount__RenderFunc(props: {
  variants: PlasmicCount__VariantsArgs;
  args: PlasmicCount__ArgsType;
  overrides: PlasmicCount__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultCount__Args, props.args);
  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolors_gradient]: hasVariant(variants, "colors", "gradient"),
          [sty.rootcolors_gray]: hasVariant(variants, "colors", "gray"),
          [sty.rootdistribution]: hasVariant(
            variants,
            "distribution",
            "distribution"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxdistribution]: hasVariant(
            variants,
            "distribution",
            "distribution"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrendistribution]: hasVariant(
              variants,
              "distribution",
              "distribution"
            )
          })
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCount__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCount__VariantsArgs;
    args?: PlasmicCount__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCount__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCount__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCount__ArgProps,
      internalVariantPropNames: PlasmicCount__VariantProps
    });

    return PlasmicCount__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCount";
  } else {
    func.displayName = `PlasmicCount.${nodeName}`;
  }
  return func;
}

export const PlasmicCount = Object.assign(
  // Top-level PlasmicCount renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicCount
    internalVariantProps: PlasmicCount__VariantProps,
    internalArgProps: PlasmicCount__ArgProps
  }
);

export default PlasmicCount;
/* prettier-ignore-end */
