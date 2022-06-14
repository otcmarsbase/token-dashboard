import React, {FC, ReactNode, useEffect} from 'react';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {style} from "typestyle";
import Container from "../Container";

export const Header: FC<{children: ReactNode}> = ({ children }) => {
    return <div className={container}>
        <Container className={content}>
            {children}
        </Container>
    </div>
}

const container = style({
    borderBottom: '1px solid rgba(104,106,110,0.6)',
    width: '100%',
    background: 'linear-gradient(97deg, rgba(0,0,0,1) 0%, rgba(26,1,47,1) 100%)'
})

const content = style({
    margin: 'auto',
})