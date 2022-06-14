// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ujWBNnbL2n4RZDdiZiYFdw
// Component: 514gf0jdxr
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
import sty from "./PlasmicContainer.module.css"; // plasmic-import: 514gf0jdxr/css

export type PlasmicContainer__VariantMembers = {
  direction: "horizontal";
  padding: "_0" | "_10" | "_15";
  gap: "_5" | "_10" | "_15";
  align: "start" | "end";
  justify: "between" | "start" | "end";
  auto: "auto";
  backgroud: "mobileCard";
  borderRadius: "_4" | "_8";
  margin: "_5" | "_10";
  mb: "_5" | "_10" | "_15" | "_20" | "_25" | "_30";
};

export type PlasmicContainer__VariantsArgs = {
  direction?: SingleChoiceArg<"horizontal">;
  padding?: SingleChoiceArg<"_0" | "_10" | "_15">;
  gap?: SingleChoiceArg<"_5" | "_10" | "_15">;
  align?: SingleChoiceArg<"start" | "end">;
  justify?: SingleChoiceArg<"between" | "start" | "end">;
  auto?: SingleBooleanChoiceArg<"auto">;
  backgroud?: SingleChoiceArg<"mobileCard">;
  borderRadius?: SingleChoiceArg<"_4" | "_8">;
  margin?: SingleChoiceArg<"_5" | "_10">;
  mb?: SingleChoiceArg<"_5" | "_10" | "_15" | "_20" | "_25" | "_30">;
};

type VariantPropType = keyof PlasmicContainer__VariantsArgs;
export const PlasmicContainer__VariantProps = new Array<VariantPropType>(
  "direction",
  "padding",
  "gap",
  "align",
  "justify",
  "auto",
  "backgroud",
  "borderRadius",
  "margin",
  "mb"
);

export type PlasmicContainer__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicContainer__ArgsType;
export const PlasmicContainer__ArgProps = new Array<ArgPropType>("children");

export type PlasmicContainer__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultContainerProps {
  children?: React.ReactNode;
  direction?: SingleChoiceArg<"horizontal">;
  padding?: SingleChoiceArg<"_0" | "_10" | "_15">;
  gap?: SingleChoiceArg<"_5" | "_10" | "_15">;
  align?: SingleChoiceArg<"start" | "end">;
  justify?: SingleChoiceArg<"between" | "start" | "end">;
  auto?: SingleBooleanChoiceArg<"auto">;
  backgroud?: SingleChoiceArg<"mobileCard">;
  borderRadius?: SingleChoiceArg<"_4" | "_8">;
  margin?: SingleChoiceArg<"_5" | "_10">;
  mb?: SingleChoiceArg<"_5" | "_10" | "_15" | "_20" | "_25" | "_30">;
  className?: string;
}

export const defaultContainer__Args: Partial<PlasmicContainer__ArgsType> = {};

function PlasmicContainer__RenderFunc(props: {
  variants: PlasmicContainer__VariantsArgs;
  args: PlasmicContainer__ArgsType;
  overrides: PlasmicContainer__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultContainer__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootalign_end]: hasVariant(variants, "align", "end"),
          [sty.rootalign_start]: hasVariant(variants, "align", "start"),
          [sty.rootauto]: hasVariant(variants, "auto", "auto"),
          [sty.rootbackgroud_mobileCard]: hasVariant(
            variants,
            "backgroud",
            "mobileCard"
          ),
          [sty.rootborderRadius__4]: hasVariant(variants, "borderRadius", "_4"),
          [sty.rootborderRadius__8]: hasVariant(variants, "borderRadius", "_8"),
          [sty.rootdirection_horizontal]: hasVariant(
            variants,
            "direction",
            "horizontal"
          ),
          [sty.rootgap__10]: hasVariant(variants, "gap", "_10"),
          [sty.rootgap__15]: hasVariant(variants, "gap", "_15"),
          [sty.rootgap__5]: hasVariant(variants, "gap", "_5"),
          [sty.rootjustify_between]: hasVariant(variants, "justify", "between"),
          [sty.rootjustify_end]: hasVariant(variants, "justify", "end"),
          [sty.rootjustify_start]: hasVariant(variants, "justify", "start"),
          [sty.rootmargin__10]: hasVariant(variants, "margin", "_10"),
          [sty.rootmargin__5]: hasVariant(variants, "margin", "_5"),
          [sty.rootmb__10]: hasVariant(variants, "mb", "_10"),
          [sty.rootmb__15]: hasVariant(variants, "mb", "_15"),
          [sty.rootmb__20]: hasVariant(variants, "mb", "_20"),
          [sty.rootmb__25]: hasVariant(variants, "mb", "_25"),
          [sty.rootmb__30]: hasVariant(variants, "mb", "_30"),
          [sty.rootmb__5]: hasVariant(variants, "mb", "_5"),
          [sty.rootpadding__0]: hasVariant(variants, "padding", "_0"),
          [sty.rootpadding__10]: hasVariant(variants, "padding", "_10"),
          [sty.rootpadding__15]: hasVariant(variants, "padding", "_15")
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: null,
        value: args.children
      })}
    </p.Stack>
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
  PlasmicContainer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContainer__VariantsArgs;
    args?: PlasmicContainer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContainer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContainer__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicContainer__ArgProps,
      internalVariantPropNames: PlasmicContainer__VariantProps
    });

    return PlasmicContainer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContainer";
  } else {
    func.displayName = `PlasmicContainer.${nodeName}`;
  }
  return func;
}

export const PlasmicContainer = Object.assign(
  // Top-level PlasmicContainer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicContainer
    internalVariantProps: PlasmicContainer__VariantProps,
    internalArgProps: PlasmicContainer__ArgProps
  }
);

export default PlasmicContainer;
/* prettier-ignore-end */