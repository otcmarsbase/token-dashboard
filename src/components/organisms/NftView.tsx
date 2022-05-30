import React from 'react';
import {Button, Label, Text} from "../atoms";
import {style} from 'typestyle';
import NftDetailsItem from "../molecules/NftDetailsItem";
import gold2 from '../../assets/gold-2.svg';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

const NftView = () => {
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    const nftDetails = [
        {
            title: 'Vesting asset',
            amount: 3559734503,
            usd: 2000000,
            buyPrice: 0.0035,
            token: 'MBase',
        },
        {
            title: 'Already claimed:',
            amount: 3559734503,
            usd: 2000000,
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
            amount: 0xfeE335B
        }
    ]

    return (
        <div className={container(isMobile, isTablet)}>
            <div>
                <div className={viewHeader}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Text title={isMobile ? '_4' : '_3'} colors={'blue'}>VIEW</Text>
                        <Text title={isMobile ? '_2' : "_1"} colors={'red'}>NFT Details</Text>
                        {isMobile && <Label colors={'yellow'}>Buy price</Label>}
                        {!isMobile && (
                            <div className={detailsContainer}>
                                {nftDetails.map((nftDetail, index) =>
                                    <NftDetailsItem key={index} {...nftDetail} title={nftDetail.title.toUpperCase()}/>
                                )}
                            </div>
                        )}
                    </div>
                    <div>
                        <img style={{height: isMobile ? '75px' : 'unset'}} src={gold2} alt="nft gold"/>
                    </div>
                </div>
            </div>
            {isMobile && <NftDetailsItem
                amount={360000000}
                usd={20000}
                title={'Vesting Assets'} token={'MBASE'}
            />}
            {isMobile && <Button onClick={() => null} auto colors={'defaultStroke'}>
                Details
            </Button>}
        </div>
    );
};

const container = (isMobile: boolean, isTablet: boolean) => style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: isTablet ? 'unset' : '822px',
    padding: isMobile ? '16px 30px 16px 30px' : '36px 50px 36px 50px',
    borderRadius: '20px',
    background: `linear-gradient(34deg, rgba(27, 27, 28,100%) 48%, rgba(255,227,161,40%) 100%)`
})

const viewHeader = style({
    display: 'flex',
    marginBottom: '24px',
    width: '100%',
    justifyContent: 'space-between'
})

const detailsContainer = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '14px'
})

export default NftView;