import React, {FC, PropsWithChildren} from 'react';
import {style} from "typestyle";

const StyledTBody: FC<PropsWithChildren<{}>> = ({children}) => {
    return (
        <tbody className={styledTBody}>
        {children}
        </tbody>
    );
};

const styledTBody = style({
    display: 'flex',
    flexDirection: 'column'
})

export default StyledTBody;