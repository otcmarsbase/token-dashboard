import React from 'react';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {style} from "typestyle";
import {ClipLoader} from "react-spinners";

const TableLoading = () => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    return (
        <div className={container(600, isMobile, isTablet)}>
            <ClipLoader color={"#fff"} size={50}/>
        </div>
    );
};

const container = (height: number, isMobile: boolean, isTablet: boolean) => style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: isMobile ? '200px' : '500px',
    width: (isMobile || isTablet) ? '100%' : '1066px',
    backgroundColor: isMobile ? 'unset' : 'rgba(27,27,28,0.6)',
    borderRadius: '16px'
})

export default TableLoading;