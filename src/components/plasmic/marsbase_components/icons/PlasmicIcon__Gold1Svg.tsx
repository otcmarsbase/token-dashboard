// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Gold1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Gold1SvgIcon(props: Gold1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 28 36"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"currentColor"} d={"M0 0h28v36H0z"}></path>

      <defs>
        <pattern
          id={"T_4AZjEoFa"}
          patternContentUnits={"objectBoundingBox"}
          width={"1"}
          height={"1"}
        >
          <use
            xlinkHref={"#T_4AZjEoFb"}
            transform={"matrix(.00126 0 0 .00098 0 -.034)"}
          ></use>
        </pattern>

        <image
          id={"T_4AZjEoFb"}
          width={"794"}
          height={"1090"}
          xlinkHref={
          }
        ></image>
      </defs>
    </svg>
  );
}

export default Gold1SvgIcon;
/* prettier-ignore-end */