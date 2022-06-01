import React, {FC, ReactNode} from 'react';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {style} from "typestyle";

export const Header: FC<{children: ReactNode}> = ({ children }) => {


    return <div>{children}</div>
}