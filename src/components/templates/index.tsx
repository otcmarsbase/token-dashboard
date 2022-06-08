import React, {FC, ReactNode, useEffect} from 'react';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {style} from "typestyle";

export const Header: FC<{children: ReactNode}> = ({ children }) => {
    return <div className={container}>
        <div className={content}>
            {children}
        </div>
    </div>
}

const container = style({
    borderBottom: '1px solid rgba(104,106,110,0.6)',
    marginBottom: '41px',
    width: '100%',
    margin: 'auto',
})

const content = style({
    maxWidth: '1433px',
    margin: 'auto',
    padding: '0 20px 0 20px'
})