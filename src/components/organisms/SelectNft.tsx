import React from 'react';
import {style} from "typestyle";

import changeViewIcon from '../../assets/changeViewIcon.svg';
import sortIcon from '../../assets/sortIcon.svg';
import purpleNft from '../../assets/purpleNft.svg';
import X from '../../assets/X.png';

import {Label, Text} from '../atoms';
import NftSelectCard from "../molecules/NftSelectCard";

const SelectNft = () => {
    return (
        <div className={container}>
            <div className={modalContainer}>
                <div className={modal}>
                    <div className={modalContent}>
                        <div className={modalContentHeader}>
                            <div>
                                <Text title={'_2'}>Select nft</Text>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                                <div className={iconContainer}>
                                    <img src={changeViewIcon} alt="changeViewIcon"/>
                                </div>
                                <div className={iconContainer}>
                                    <img src={sortIcon} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={modalContentBody}>
                            <NftSelectCard
                                color={'purple'}
                                amount={36000000000}
                                usd={56000}
                                price={0.0035}
                                started={12340097087234}
                                token={'MBase'}
                            />
                            <NftSelectCard color={'gold'} amount={36000000000}
                                           usd={56000}
                                           price={0.0035}
                                           started={12340097087234}
                                           token={'MBase'}/>
                            <NftSelectCard color={'red'} amount={36000000000}
                                           usd={56000}
                                           price={0.0035}
                                           started={12340097087234}
                                           token={'MBase'}/>
                            <NftSelectCard color={'silver'} amount={36000000000}
                                           usd={56000}
                                           price={0.0035}
                                           started={12340097087234}
                                           token={'MBase'}/>
                            <NftSelectCard active color={'goldDark'} amount={36000000000}
                                           usd={56000}
                                           price={0.0035}
                                           started={12340097087234}
                                           token={'MBase'}/>
                            <NftSelectCard color={'red'} amount={36000000000}
                                           usd={56000}
                                           price={0.0035}
                                           started={12340097087234}
                                           token={'MBase'}/>
                            <NftSelectCard color={'gold'} amount={36000000000}
                                           usd={56000}
                                           price={0.0035}
                                           started={12340097087234}
                                           token={'MBase'}/>
                        </div>
                    </div>
                </div>
                <div style={{position: 'absolute', right: '680px'}}>
                    <img style={{height: '16px'}} src={X} alt=""/>
                </div>
            </div>
        </div>
    );
};

const container = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: '9999',
    height: '100vh',
    width: '100%',
    background: `radial-gradient(50% 50% at 50% 50%, rgba(36, 19, 43, 0.8) 34.93%, rgba(19, 20, 25, 0.8) 100%)`,
    backdropFilter: `blur(15px)`
})

const modalContainer = style({
    display: 'flex',
})

const modal = style({
    display: 'flex',
    backgroundColor: 'black',
    borderRadius: '16px',
    width: '462px',
})

const modalContentBody = style({
    display: 'flex',
    height: '448px',
    overflow: 'auto',
    flexDirection: 'column'
})

const modalContent = style({
    width: '100%',
})

const modalContentHeader = style({
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '32px',
    justifyContent: 'space-between',
    marginBottom: '32px'
})

const iconContainer = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    width: '40px',
    backgroundColor: `rgba(37, 38, 40, 0.5)`,
    borderRadius: '8px'
})

export default SelectNft;