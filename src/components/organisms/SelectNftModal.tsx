import React, {useEffect} from 'react';
import {style} from "typestyle";

import changeViewIcon from '../../assets/changeViewIcon.svg';
import sortIcon from '../../assets/sortIcon.svg';
import X from '../../assets/X.png';

import {Text} from '../atoms';
import NftSelectCard from "../molecules/NftSelectCard";
import {createPortal} from "react-dom";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

const SelectNftModal = () => {
    const modalsRoot = document.getElementById('modals');

    if (!modalsRoot) return null;

    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    return createPortal(<div className={container}>
        <div className={modalContainer}>
            <div className={modalWrapper(isMobile)}>
                <div className={modal(isMobile, isTablet)}>
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
                        <div className={modalContentBody(isMobile, isTablet)}>
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
            </div>
        </div>
    </div>, modalsRoot)
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
    width: '100%',
    padding: '20px',
    justifyContent: 'center',
})

const modalWrapper = (isMobile: boolean) => style({
    width: isMobile ? '100%' : '462px',
    padding: '3px',
    position: 'relative',
    background: `linear-gradient(151.47deg, #8A67FF -7.28%, #49D4FF 29.09%, #FE673C 65.78%, #A6498F 107.39%)`,
    borderRadius: '16px',
})

const modal = (isMobile: boolean, isTablet: boolean) => style({
    display: 'flex',
    backgroundColor: 'black',
    borderRadius: '16px',
    width: isMobile ? '100%' : '462px',
})

const modalContentBody = (isMobile: boolean, isTablet: boolean) => style({
    display: 'flex',
    height: 'calc(100vh - 340px)',
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

export default SelectNftModal;