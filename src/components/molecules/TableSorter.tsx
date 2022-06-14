import React, {FC, ReactNode} from 'react';
import Container from "../Container";
import {ColumnSorter} from "./ColumnSorter";

interface TableSorterProps {
    sorters: ReactNode[]
}

const TableSorter: FC<TableSorterProps> = ({sorters}) => {
    return (
        <Container direction={'horizontal'}>
            {sorters.map((name, index) => (
                <ColumnSorter key={index} text={name} onSort={() => null}/>
            ))}
        </Container>
    );
};

export default TableSorter;