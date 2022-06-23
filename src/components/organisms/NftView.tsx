import React from 'react';
import {Text} from '../atoms/Text'
import {Button} from '../atoms/Button'
import {Label} from '../atoms/Label'
import {style} from 'typestyle';
import gold2 from '../../assets/gold-2.svg';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {NftViewHeaderLocalized} from "../molecules/NftViewHeader";

const NftView = () => {
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    const nftDetails = [
        {
            title: 'Vesting asset',
            value: 3559734503,
            subValue: 2000000,
            token: 'MBase',
        },
        {
            title: 'Already claimed:',
            value: 12564.08,
            token: 'MBase',
        },
        {
            title: 'Vesting contract',
            value: '0x13052cE99F'
        },
        {
            title: 'Activation date',
            value: '16.04.2023'
        },
        {
            title: 'Start date',
            value: '16.05.2022 20:00 UTC'
        },
        {
            title: 'End date',
            value: '16.05.2022 20:00 UTC'
        },
    ]

    return (
        <div className={container(isMobile, isTablet)}>
            <div className={containerBody(isMobile)}>
                <div className={body}>
                    <NftViewHeaderLocalized usd={1234}/>
                    {nftDetails.map((nftDetail, index) =>
                        <div key={index} className={itemContainer(isMobile)}>
                            <Text colors={'gray'} size={isMobile ? '_12' : undefined}>
                                <b>{isMobile ? nftDetail.title : nftDetail.title.toUpperCase()}</b>
                            </Text>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: `flex-${isMobile ? 'end' : 'start'}`
                            }}>
                                <Text colors={`${nftDetail.value}`.startsWith('0x') ? 'red' : undefined}>
                                    {nftDetail.value} {nftDetail.token}
                                </Text>
                                {nftDetail.subValue && (
                                    <Text size={'_12'} colors={'gray'}>~{nftDetail.subValue} $</Text>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                {!isMobile && <img src={gold2} alt="nft gold"/>}
            </div>
            {isMobile && (
                <Button onClick={() => null} auto colors={'defaultStroke'}>
                    Details
                </Button>
            )}
        </div>
    );
};

const container = (isMobile: boolean, isTablet: boolean) => style({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    width: isTablet ? 'unset' : '822px',
    padding: '16px',
    borderRadius: '20px',
    background: `linear-gradient(34deg, rgba(27, 27, 28,100%) 48%, rgba(255,227,161,40%) 100%)`,
})

const containerBody = (isMobile: boolean) => style({
    display: 'flex',
    width: '100%',
    flexDirection: isMobile ? 'column' : 'row',
})

const body = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    paddingBottom: '30px',
    marginBottom: '12px',
    borderBottom: '1px solid rgba(42, 42, 44, 1)',
    width: '100%',
})

const itemContainer = (isMobile: boolean) => style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    flexDirection: isMobile ? 'row' : 'column'
})

export default NftView;