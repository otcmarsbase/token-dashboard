// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ujWBNnbL2n4RZDdiZiYFdw
// Component: HA02ocYHIWR
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
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
import sty from "./PlasmicInput2.module.css"; // plasmic-import: HA02ocYHIWR/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: s91taWCHpvC/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: zwmcUxC4SL1/icon

export type PlasmicInput2__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  color: "dark" | "darkStroke";
  withLabel: "up" | "down";
};

export type PlasmicInput2__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  color?: SingleChoiceArg<"dark" | "darkStroke">;
  withLabel?: SingleChoiceArg<"up" | "down">;
};

type VariantPropType = keyof PlasmicInput2__VariantsArgs;
export const PlasmicInput2__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "color",
  "withLabel"
);

export type PlasmicInput2__ArgsType = {
  placeholder?: string;
  endIcon?: React.ReactNode;
  value?: any;
  name?: string;
  required?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  startIcon?: React.ReactNode;
  upChildren?: React.ReactNode;
};

type ArgPropType = keyof PlasmicInput2__ArgsType;
export const PlasmicInput2__ArgProps = new Array<ArgPropType>(
  "placeholder",
  "endIcon",
  "value",
  "name",
  "required",
  "aria-label",
  "aria-labelledby",
  "slot",
  "slot2",
  "startIcon",
  "upChildren"
);

export type PlasmicInput2__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<"input">;
  endIconContainer?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
};

export interface DefaultInput2Props extends pp.BaseTextInputProps {
  placeholder?: string;
  value?: any;
  name?: string;
  required?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  upChildren?: React.ReactNode;
  color?: SingleChoiceArg<"dark" | "darkStroke">;
  withLabel?: SingleChoiceArg<"up" | "down">;
}

export const defaultInput2__Args: Partial<PlasmicInput2__ArgsType> = {
  placeholder: "Enter something…" as const
};

function PlasmicInput2__RenderFunc(props: {
  variants: PlasmicInput2__VariantsArgs;
  args: PlasmicInput2__ArgsType;
  overrides: PlasmicInput2__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultInput2__Args, props.args);
  const $props = args;

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: true
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

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
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootcolor_darkStroke]: hasVariant(
            variants,
            "color",
            "darkStroke"
          ),
          [sty.rootcolor_dark]: hasVariant(variants, "color", "dark"),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.rootshowStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.rootwithLabel_down]: hasVariant(variants, "withLabel", "down"),
          [sty.rootwithLabel_up]: hasVariant(variants, "withLabel", "up")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__vVoNl)}>
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.slot
          })}
        </div>
      ) : null}
      {(hasVariant(variants, "withLabel", "down") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__gnjlN, {
            [sty.freeBoxshowStartIcon__gnjlNtsmAw]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.freeBoxwithLabel_down__gnjlNVcALr]: hasVariant(
              variants,
              "withLabel",
              "down"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.slot2
          })}
        </div>
      ) : null}
      {(hasVariant(variants, "withLabel", "up") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__m0GJu, {
            [sty.freeBoxwithLabel_up__m0GJUvMW7]: hasVariant(
              variants,
              "withLabel",
              "up"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.upChildren
          })}
        </div>
      ) : null}

      <div
        className={classNames(projectcss.all, sty.freeBox__wGoC3, {
          [sty.freeBoxshowStartIcon__wGoC3TsmAw]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.freeBoxwithLabel_up__wGoC3VMW7]: hasVariant(
            variants,
            "withLabel",
            "up"
          )
        })}
      >
        {(
          hasVariant(variants, "showStartIcon", "showStartIcon") ? true : true
        ) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__vmHw, {
              [sty.freeBoxshowStartIcon__vmHwtsmAw]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <SearchsvgIcon
                  className={classNames(projectcss.all, sty.svg__ycKlt)}
                  role={"img"}
                />
              ),

              value: args.startIcon
            })}
          </div>
        ) : null}

        <input
          data-plasmic-name={"textInput"}
          data-plasmic-override={overrides.textInput ?? overrides.textbox}
          className={classNames(
            projectcss.all,
            projectcss.input,
            sty.textInput,
            {
              [sty.textInputshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            }
          )}
          placeholder={"Some placeholder" as const}
          size={1 as const}
          type={"text" as const}
          value={"Some value" as const}
        />

        {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : true) ? (
          <div
            data-plasmic-name={"endIconContainer"}
            data-plasmic-override={overrides.endIconContainer}
            className={classNames(projectcss.all, sty.endIconContainer, {
              [sty.endIconContainercolor_dark]: hasVariant(
                variants,
                "color",
                "dark"
              ),
              [sty.endIconContainershowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.endIconContainerwithLabel_up]: hasVariant(
                variants,
                "withLabel",
                "up"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__ol9RF)}
                  role={"img"}
                />
              ),

              value: args.endIcon,
              className: classNames(sty.slotTargetEndIcon, {
                [sty.slotTargetEndIconcolor_dark]: hasVariant(
                  variants,
                  "color",
                  "dark"
                ),
                [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                  variants,
                  "showEndIcon",
                  "showEndIcon"
                )
              })
            })}
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseTextInputProps>(
  props: P,
  ref: pp.TextInputRef
) {
  return pp.useTextInput<P, typeof PlasmicInput2>(
    PlasmicInput2,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root",
      input: "input"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "endIconContainer"],
  textInput: ["textInput", "textbox"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: "input";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInput2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInput2__VariantsArgs;
    args?: PlasmicInput2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInput2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInput2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInput2__ArgProps,
      internalVariantPropNames: PlasmicInput2__VariantProps
    });

    return PlasmicInput2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInput2";
  } else {
    func.displayName = `PlasmicInput2.${nodeName}`;
  }
  return func;
}

export const PlasmicInput2 = Object.assign(
  // Top-level PlasmicInput2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicInput2
    internalVariantProps: PlasmicInput2__VariantProps,
    internalArgProps: PlasmicInput2__ArgProps,

    useBehavior
  }
);

export default PlasmicInput2;
/* prettier-ignore-end */