import React, {FC, ReactNode} from "react"
import {style} from "typestyle"

export const Summary: FC<{ children: ReactNode }> = ({children}) => <div>{children}</div>

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
    padding: '12px 16px 12px 16px',
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
                    marginRight: '24px',
                    marginLeft: '24px',
                }}/>
            )}
        </div>
    )
}

export const TokenDashboardTemplate: FC<{ children: ReactNode }> = ({children}) => {

    return <main className={main}>
        {children}
    </main>
}

const main = style({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: '1433px',
    width: '100%',
    margin: 'auto',
})

const content = style({

})

export const TableFooter: FC<{ children: ReactNode }> = ({children}) => {
    return <tfoot>{children}</tfoot>
}
