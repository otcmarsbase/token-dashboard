import React, {useContext} from 'react';
import {DictionaryContext} from "../../contexts/DictionaryContext";
import TableSorter from "../molecules/TableSorter";

const TableSorterState = () => {
    const {nft} = useContext(DictionaryContext);

    return <TableSorter sorters={nft.dashboard.nft_table.headers}/>
};

export default TableSorterState;