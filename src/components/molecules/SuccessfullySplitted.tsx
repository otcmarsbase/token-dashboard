import React from 'react';

import {Button, Text} from "../atoms";

import successfullySplitted from "../../assets/successfullySplitted.png";
import silver2 from "../../assets/silver-2.svg";
import info from '../../assets/info.png'
import silverNft from '../../assets/silver-2.svg'
import goldNft from '../../assets/gold-2.svg'

import {style} from "typestyle";

const SuccessfullySplitted = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <img style={{width: '430px'}} src={successfullySplitted} alt=""/>
            <Text title={'_2'}>NFT has been successfully spliltted</Text>
            <Text colors={'gray'}>Certified business management professional, having a wealth of knowledge in
                cryptography & finance, consistently providing </Text>
            <div style={{width: '700px', marginTop: '56px'}}>
                <div style={{marginBottom: '34px'}}>
                    <Text
                        withIconRight
                        iconRight={
                            <img src={info} style={{height: '20px'}} alt=""/>
                        }
                    >
                        <span style={{whiteSpace: 'nowrap'}}>I splitted</span>
                    </Text>
                    <div className={nftInfo}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            <img style={{height: '36px'}} src={goldNft} alt="silver nft"/>
                            <Text>36,597,345.03</Text>
                            <Text colors={'gray'} size={'_12'}>~20,000,00 $</Text>
                        </div>
                        <div>
                            <Text colors={'red'}>MBase</Text>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Text size={'_14'}>Total Parts</Text>
                        <Text size={'_12'} colors={'gray'}>The amount of money you want to exchange</Text>
                    </div>
                    <div>
                        <Text weight={'semiBold'}>2</Text>
                    </div>
                </div>
                <div className={divider}/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', gap: '10px'}}>
                        <img src={silverNft} style={{height: '36px'}} alt=""/>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <Text size={'_14'}>Part 1</Text>
                            <Text size={'_12'} colors={'gray'}>Fee: 14,000 MBase (1%) ~10,000 $ </Text>
                        </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Text weight={'semiBold'}>18,000,000.00 MBase (33%) </Text>
                        <Text size={'_12'} colors={'gray'}>~20,000,00 $</Text>
                    </div>
                </div>
                <div className={divider}/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', gap: '10px'}}>
                        <img src={silverNft} style={{height: '36px'}} alt=""/>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <Text size={'_14'}>Part 2</Text>
                            <Text size={'_12'} colors={'gray'}>Fee: 14,000 MBase (1%) ~10,000 $ </Text>
                        </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Text weight={'semiBold'}>18,000,000.00 MBase (33%) </Text>
                        <Text size={'_12'} colors={'gray'}>~20,000,00 $</Text>
                    </div>
                </div>
                <div className={divider}/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Text size={'_14'}>Total Fee</Text>
                    </div>
                    <div>
                        <Text weight={'semiBold'}>36,000 MBS (1%)</Text>
                    </div>
                </div>
                <div className={divider}/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Text size={'_14'}>TX Hash</Text>
                    </div>
                    <div>
                        <Text colors={'gray'}>2115b9345e16c5cf302fc80e9d5fbf5d48d</Text>
                    </div>
                </div>
                <div className={divider}/>
                <div style={{display: 'flex', gap: '20px', marginTop: '45px'}}>
                    <Button auto onClick={() => null} colors={'defaultStroke'} size={'lg'}>
                        <Text title={'_4'}>Make another split</Text>
                    </Button>
                    <Button auto onClick={() => null} size={'lg'}>
                        <Text title={'_4'}>Go to dashboard</Text>
                    </Button>
                </div>

            </div>
        </div>
    );
};

const nftInfo = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(81, 84, 96, 0.4)',
    padding: '12px 14px 12px 14px',
    borderRadius: '8px'
})

const divider = style({
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(42, 42, 44, 1)',
    margin: '10px 0 10px 0'
})

export default SuccessfullySplitted;