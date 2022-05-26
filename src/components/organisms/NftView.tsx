import React from 'react';
import {Text} from "../atoms";
import {style} from 'typestyle';
import NftDetailsItem from "../molecules/NftDetailsItem";
import gold2 from '../../assets/gold-2.svg';

const NftView = () => {
    const nftDetails = [
        {
            title: 'Vesting asset',
            amount: '35,597,345,03',
            usd: '~20,000,00 $',
            buyPrice: '0.0035',
            token: 'MBase',
        },
        {
            title: 'Already claimed:',
            amount: '35,597,345,03',
            usd: '~20,000,00 $',
            token: 'MBase',
        },
        {
            title: 'vesting dates:',
            dates: {
                activation: '16.04.2023',
                start: '16.05.2022 20:00 UTC',
                end: '16.05.2023 20:00 UTC',
            }
        },
        {
            title: 'vesting contract',
            amount: '0xfeE335B...c1b166dEB11'
        }
    ]
    return (
        <div className={container}>
            <div>
                <div className={viewHeader}>
                    <Text title={'_3'} colors={'blue'}>VIEW</Text>
                    <Text title={"_1"} colors={'red'}>NFT Details</Text>
                </div>
                <div className={detailsContainer}>
                    {nftDetails.map((nftDetail, index) =>
                        <NftDetailsItem key={index} {...nftDetail} title={nftDetail.title.toUpperCase()}/>
                    )}
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
    justifyContent: 'space-between',
    width: '822px',
    padding: '36px 50px 36px 50px',
    borderRadius: '20px',
    background: `linear-gradient(34deg, rgba(27, 27, 28,100%) 48%, rgba(255,227,161,40%) 100%)`
})

const viewHeader = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '24px'
})

const detailsContainer = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '14px'
})

export default NftView;