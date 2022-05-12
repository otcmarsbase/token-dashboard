// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ujWBNnbL2n4RZDdiZiYFdw
// Component: Wiffry2Q-b
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
import Button from "../../Button"; // plasmic-import: IDy-UAQYMv/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_marsbase_components.module.css"; // plasmic-import: ujWBNnbL2n4RZDdiZiYFdw/projectcss
import sty from "./PlasmicNftAvailableClaim.module.css"; // plasmic-import: Wiffry2Q-b/css

export type PlasmicNftAvailableClaim__VariantMembers = {};

export type PlasmicNftAvailableClaim__VariantsArgs = {};
type VariantPropType = keyof PlasmicNftAvailableClaim__VariantsArgs;
export const PlasmicNftAvailableClaim__VariantProps =
  new Array<VariantPropType>();

export type PlasmicNftAvailableClaim__ArgsType = {};
type ArgPropType = keyof PlasmicNftAvailableClaim__ArgsType;
export const PlasmicNftAvailableClaim__ArgProps = new Array<ArgPropType>();

export type PlasmicNftAvailableClaim__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultNftAvailableClaimProps {
  className?: string;
}

function PlasmicNftAvailableClaim__RenderFunc(props: {
  variants: PlasmicNftAvailableClaim__VariantsArgs;
  args: PlasmicNftAvailableClaim__ArgsType;
  overrides: PlasmicNftAvailableClaim__OverridesType;

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
      <div className={classNames(projectcss.all, sty.freeBox__mKkqp)}>
        <Text
          className={classNames("__wab_instance", sty.text__le32S)}
          colors={"red" as const}
          size={"_24" as const}
        />

        <Text
          className={classNames("__wab_instance", sty.text__mBemb)}
          colors={"gray" as const}
        />
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__muSjO)}>
        <Button
          className={classNames("__wab_instance", sty.button__chWwr)}
          size={"md" as const}
        />

        <Button
          className={classNames("__wab_instance", sty.button___2Xv2Q)}
          colors={"defaultStroke" as const}
          size={"md" as const}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNftAvailableClaim__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNftAvailableClaim__VariantsArgs;
    args?: PlasmicNftAvailableClaim__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNftAvailableClaim__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNftAvailableClaim__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNftAvailableClaim__ArgProps,
      internalVariantPropNames: PlasmicNftAvailableClaim__VariantProps
    });

    return PlasmicNftAvailableClaim__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNftAvailableClaim";
  } else {
    func.displayName = `PlasmicNftAvailableClaim.${nodeName}`;
  }
  return func;
}

export const PlasmicNftAvailableClaim = Object.assign(
  // Top-level PlasmicNftAvailableClaim renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNftAvailableClaim
    internalVariantProps: PlasmicNftAvailableClaim__VariantProps,
    internalArgProps: PlasmicNftAvailableClaim__ArgProps
  }
);

export default PlasmicNftAvailableClaim;
/* prettier-ignore-end */
