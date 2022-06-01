import React, {FC, ReactNode} from "react"
import {style} from "typestyle"

export const Summary: FC<{ children: ReactNode }> = ({children}) => <div>{children}</div>

export const Table: FC<{ children: ReactNode }> = ({children}) => {
    return <table className={tableStyle}>{children}</table>
}

const tableStyle = style({
    backgroundColor: 'rgba(27, 27, 28, 1)',
    width: '100%',
    padding: '32px',
    borderRadius: '12px',
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
    backgroundColor: main ? 'black' : 'unset',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '15px',
    display: 'flex'
})

export const TableHead: FC<{ children: ReactNode }> = ({children}) => {
    return <th style={{width: '100%'}}>{children}</th>
}

export const TableData: FC<{ children: ReactNode }> = ({children}) => {
    return <td style={{display: 'flex', width: '100%'}}>{children}</td>
}

export const TokenDashboardTemplate: FC<{ children: ReactNode }> = ({children}) => {
    const main = style({
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: '1433px',
        width: '100%',
        margin: 'auto',
    })
    return <main className={main}>{children}</main>
}

export const TableFooter: FC<{ children: ReactNode }> = ({children}) => {
    return <tfoot>{children}</tfoot>
}
