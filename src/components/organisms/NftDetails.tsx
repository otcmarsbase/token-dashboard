import React from 'react';
import {Text} from "../atoms";
import {style} from 'typestyle';
import NftDetailsItem from "../molecules/NftDetailsItem";
import gold2 from '../../assets/gold-2.svg';

const container = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '20px',
    backgroundColor: "#232222",
    borderRadius: '20px'
})

const body = style({
    display: 'flex',

})

const NftDetails = () => {
    return (
        <div className={container}>
            <Text>VIEW</Text>
            <div className={body}>
                <div>
                    <Text>NFT Details</Text>
                    <NftDetailsItem/>
                    <NftDetailsItem/>
                    <NftDetailsItem/>
                </div>
                <div>
                    <img src={gold2} alt=""/>
                </div>
                <div>
                    {`<-`}
                    {`->`}
                </div>
            </div>
        </div>
    );
};

export default NftDetails;