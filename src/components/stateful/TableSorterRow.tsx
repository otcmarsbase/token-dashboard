import React, {FC, ReactNode, useContext} from 'react';
import {TableHead, TableRow} from "../templates/TokenDashboardTemplate";
import {ColumnSorter} from "../molecules/ColumnSorter";
import {DictionaryContext} from "../../contexts/DictionaryContext";

const TableSorterRow = () => {
    const {nft} = useContext(DictionaryContext);

    return (
        <TableRow main={false}>
            {nft.dashboard.nft_table.headers.map((name, index) => (
                <TableHead key={index}>
                    <ColumnSorter text={name} onSort={() => null}/>
                </TableHead>
            ))}
        </TableRow>
    );
};

export default TableSorterRow;