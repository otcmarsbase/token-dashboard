// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ujWBNnbL2n4RZDdiZiYFdw
// Component: zvfx6kR6ll
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
import sty from "./PlasmicLabel.module.css"; // plasmic-import: zvfx6kR6ll/css

export type PlasmicLabel__VariantMembers = {
  colors: "cyan" | "yellow" | "red" | "silver";
  disabled: "disabled";
};

export type PlasmicLabel__VariantsArgs = {
  colors?: SingleChoiceArg<"cyan" | "yellow" | "red" | "silver">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
};

type VariantPropType = keyof PlasmicLabel__VariantsArgs;
export const PlasmicLabel__VariantProps = new Array<VariantPropType>(
  "colors",
  "disabled"
);

export type PlasmicLabel__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicLabel__ArgsType;
export const PlasmicLabel__ArgProps = new Array<ArgPropType>("children");

export type PlasmicLabel__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultLabelProps {
  children?: React.ReactNode;
  colors?: SingleChoiceArg<"cyan" | "yellow" | "red" | "silver">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  className?: string;
}

export const defaultLabel__Args: Partial<PlasmicLabel__ArgsType> = {};

function PlasmicLabel__RenderFunc(props: {
  variants: PlasmicLabel__VariantsArgs;
  args: PlasmicLabel__ArgsType;
  overrides: PlasmicLabel__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultLabel__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

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
          [sty.rootcolors_cyan]: hasVariant(variants, "colors", "cyan"),
          [sty.rootcolors_red]: hasVariant(variants, "colors", "red"),
          [sty.rootcolors_yellow]: hasVariant(variants, "colors", "yellow"),
          [sty.rootdisabled]: hasVariant(variants, "disabled", "disabled")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxcolors_cyan]: hasVariant(variants, "colors", "cyan"),
          [sty.freeBoxcolors_yellow]: hasVariant(variants, "colors", "yellow"),
          [sty.freeBoxdisabled]: hasVariant(variants, "disabled", "disabled")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Price",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrencolors_cyan]: hasVariant(
              variants,
              "colors",
              "cyan"
            ),
            [sty.slotTargetChildrencolors_red]: hasVariant(
              variants,
              "colors",
              "red"
            ),
            [sty.slotTargetChildrencolors_yellow]: hasVariant(
              variants,
              "colors",
              "yellow"
            ),
            [sty.slotTargetChildrendisabled]: hasVariant(
              variants,
              "disabled",
              "disabled"
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
  PlasmicLabel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLabel__VariantsArgs;
    args?: PlasmicLabel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLabel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLabel__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLabel__ArgProps,
      internalVariantPropNames: PlasmicLabel__VariantProps
    });

    return PlasmicLabel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLabel";
  } else {
    func.displayName = `PlasmicLabel.${nodeName}`;
  }
  return func;
}

export const PlasmicLabel = Object.assign(
  // Top-level PlasmicLabel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicLabel
    internalVariantProps: PlasmicLabel__VariantProps,
    internalArgProps: PlasmicLabel__ArgProps
  }
);

export default PlasmicLabel;
/* prettier-ignore-end */
