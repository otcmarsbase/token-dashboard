// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ujWBNnbL2n4RZDdiZiYFdw
// Component: tVe3iw2rzS
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
import Text from "../../Text"; // plasmic-import: sIxKMhfpOf/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_marsbase_components.module.css"; // plasmic-import: ujWBNnbL2n4RZDdiZiYFdw/projectcss
import sty from "./PlasmicColumnSorter.module.css"; // plasmic-import: tVe3iw2rzS/css

export type PlasmicColumnSorter__VariantMembers = {};

export type PlasmicColumnSorter__VariantsArgs = {};
type VariantPropType = keyof PlasmicColumnSorter__VariantsArgs;
export const PlasmicColumnSorter__VariantProps = new Array<VariantPropType>();

export type PlasmicColumnSorter__ArgsType = {};
type ArgPropType = keyof PlasmicColumnSorter__ArgsType;
export const PlasmicColumnSorter__ArgProps = new Array<ArgPropType>();

export type PlasmicColumnSorter__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<typeof Text>;
};

export interface DefaultColumnSorterProps {
  className?: string;
}

function PlasmicColumnSorter__RenderFunc(props: {
  variants: PlasmicColumnSorter__VariantsArgs;
  args: PlasmicColumnSorter__ArgsType;
  overrides: PlasmicColumnSorter__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

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
        sty.root
      )}
    >
      <Text
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames("__wab_instance", sty.text)}
        colors={"gray" as const}
        withIconRight={true}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: typeof Text;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicColumnSorter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicColumnSorter__VariantsArgs;
    args?: PlasmicColumnSorter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicColumnSorter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicColumnSorter__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicColumnSorter__ArgProps,
      internalVariantPropNames: PlasmicColumnSorter__VariantProps
    });

    return PlasmicColumnSorter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicColumnSorter";
  } else {
    func.displayName = `PlasmicColumnSorter.${nodeName}`;
  }
  return func;
}

export const PlasmicColumnSorter = Object.assign(
  // Top-level PlasmicColumnSorter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicColumnSorter
    internalVariantProps: PlasmicColumnSorter__VariantProps,
    internalArgProps: PlasmicColumnSorter__ArgProps
  }
);

export default PlasmicColumnSorter;
/* prettier-ignore-end */