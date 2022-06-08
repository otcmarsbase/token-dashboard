import React, {FC, ReactNode, useEffect} from "react"
import {style} from "typestyle"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

export const Summary: FC<{ children: ReactNode }> = ({children}) => {
    return <div className={styledTableSummary}>{children}</div>
}

const styledTableSummary = style({
    marginBottom: '24px'
})

export const Table: FC<{ children: ReactNode }> = ({children}) => {
    return <table className={tableStyle}>{children}</table>
}

const tableStyle = style({
    backgroundColor: 'rgba(27,27,28,0.6)',
    width: '1066px',
    padding: '32px',
    borderRadius: '12px',
    height: '608px',
})

export const TableRow: FC<{ children: ReactNode, main?: boolean }> = (
    {
        children,
        main = true
    }) => {
    return <tr>
        <div className={styledTableRow(main)}>
            {children}
        </div>
    </tr>
}

const styledTableRow = (main: boolean) => style({
    backgroundColor: main ? 'rgba(0,0,0,0.5)' : 'unset',
    borderRadius: '12px',
    marginBottom: '15px',
    display: 'flex'
})

export const TableHead: FC<{ children: ReactNode, justifyContent?: string }> = (
    {
        children,
        justifyContent
    }) => {
    return <th style={{width: '100%', justifyContent}}>{children}</th>
}

export const TableData: FC<{ children: ReactNode, justifyContent: string }> = (
    {children, justifyContent}) => {
    return (
        <div style={{display: 'flex', width: '100%'}}>
            <td style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent
            }}>
                {children}
            </td>
            {justifyContent !== 'end' && (
                <div style={{
                    width: '2px',
                    backgroundColor: 'rgba(27, 27, 28, 1)',
                    height: '100%',
                }}/>
            )}
        </div>
    )
}

export const TokenDashboardTemplate: FC<{ children: ReactNode, sidebar?: ReactNode }> = ({children, sidebar}) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <main className={main(isMobile, isTablet)}>
                <div className={content(isMobile, isTablet)}>
                    {children}
                </div>
                {sidebar && (
                    <div className={content(isMobile, isTablet)}>
                        {sidebar}
                    </div>
                )}
            </main>
        </div>
    )
}

const main = (isMobile: boolean, isTablet: boolean) => style({
    display: "flex",
    flexDirection: isMobile ? 'column' : "row",
    gap: "20px",
    maxWidth: '1433px',
    backgroundColor: (!isMobile && isTablet) ? 'rgba(27, 27, 28, 0.4)' : 'unset',
    margin: (isMobile || isTablet) ? '0 20px 0 20px' : 'unset',
    borderRadius: '12px'
})

const content = (isMobile: boolean, isTablet: boolean) => style({
    padding: (!isMobile && isTablet) ? '20px' : "unset",
})

export const TableFooter: FC<{ children: ReactNode }> = ({children}) => {
    return <tfoot>{children}</tfoot>
}
