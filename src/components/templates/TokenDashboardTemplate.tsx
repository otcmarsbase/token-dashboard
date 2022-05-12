import React, {FC, ReactNode} from "react"
import { style } from "typestyle"

export const Header: FC<{children: ReactNode}> = ({ children }) => {
	return <div>{children}</div>
}

export const Summary: FC<{children: ReactNode}> = ({ children }) => <div>{children}</div>

export const Table: FC<{children: ReactNode}> = ({ children }) => {
	return <table style={{ width: "100%" }}>{children}</table>
}

export const TableRow: FC<{children: ReactNode}> = ({ children }) => {
	return <tr>{children}</tr>
}

export const TableHead: FC<{children: ReactNode}> = ({ children }) => {
	return <th>{children}</th>
}

export const TableData: FC<{children: ReactNode}> = ({ children }) => {
	return <td>{children}</td>
}

export const TokenDashboardTemplate: FC<{children: ReactNode}> = ({ children }) => {
	const main = style({
		display: "flex",
		flexDirection: "column",
		gap: "20px"
	})
	return <main className={main}>{children}</main>
}

export const TableFooter: FC<{children: ReactNode}> = ({children}) => {
	return <tfoot>{children}</tfoot>
}
