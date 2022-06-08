import React, {FC, ReactNode} from 'react';
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
    background: 'linear-gradient(97deg, rgba(0,0,0,1) 0%, rgba(26,1,47,1) 100%)'
})

const content = style({
    maxWidth: '1433px',
    margin: 'auto',
    padding: '0 20px 0 20px'
})