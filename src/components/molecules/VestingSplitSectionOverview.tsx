import React from 'react';
import {Text} from "../atoms";
import {style} from "typestyle";

const VestingSplitSectionOverview = () => {
    return (
        <div className={container}>
            <div className={left}>
                <Text title={'_2'}>To split</Text>
                <Text size={'_12'} colors={'gray'}>Set the parameters you need to suggest the best trading conditions</Text>
            </div>
            <Text colors={'red'} size={'_14'}>How to use?</Text>
        </div>
    );
};

const container = style({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
})

const left = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
})

export default VestingSplitSectionOverview;