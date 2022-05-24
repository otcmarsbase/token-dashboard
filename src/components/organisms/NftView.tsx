import React from 'react';
import {Text} from "../atoms";
import {style} from 'typestyle';
import NftDetailsItem from "../molecules/NftDetailsItem";
import gold2 from '../../assets/gold-2.svg';

const NftView = () => {
    return (
        <div className={container}>
            <div>
                <div className={viewHeader}>
                    <Text>VIEW</Text>
                    <Text title={"_1"} colors={'red'}>NFT Details</Text>
                </div>
                <div className={detailsContainer}>
                    <NftDetailsItem/>
                </div>

            </div>
            <div>
                <img src={gold2} alt=""/>
            </div>
        </div>
    );
};

const container = style({
    display: 'flex',
    width: '100%',
    padding: '20px',
    backgroundColor: "#232222",
    borderRadius: '20px',
    background: `linear-gradient(34deg, rgba(0,0,0,1) 48%, rgba(255,227,161,1) 100%)`
})

const viewHeader = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '24px'
})

const detailsContainer = style({
    display: 'flex',
    gap: '30px'
})

export default NftView;