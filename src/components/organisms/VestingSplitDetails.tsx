import React from 'react';

import {Button, Text} from '../atoms';
import VestingSplitSectionOverview from "../molecules/VestingSplitSectionOverview";
import Input from "../Input";

import arrowLeft from '../../assets/arrowLeft.png';
import arrowRight from '../../assets/arrowRight.png';
import silver2 from "../../assets/silver-2.svg";
import infoIcon from "../../assets/info.png";

import {style} from "typestyle";

const VestingSplitDetails = () => {
    return (
        <div className={container}>
            <div className={header}>
                <div style={{padding: '28px 21px 10px 21px'}}>
                    <VestingSplitSectionOverview
                        title={'Check split details'}
                        subTitle={'Set the parameters you need to suggest the best trading conditions'}
                        actionText={'How to split?'}
                        actionIcon={<img style={{height: '18px'}} src={arrowLeft} alt={"arrow left"}/>}
                        onAction={() => null}
                    />
                    <div className={nftInfo}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            <img src={silver2} alt="silver nft"/>
                            <Text>36,597,345.03</Text>
                            <Text colors={'gray'} size={'_12'}>~20,000,00 $</Text>
                        </div>
                        <div>
                            <Text colors={'red'}>MBase</Text>
                        </div>
                    </div>
                </div>
            </div>
            <div className={body}>
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
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Text size={'_14'}>Part 1</Text>
                        <Text size={'_12'} colors={'gray'}>Fee: 14,000 MBase (1%) ~10,000 $ </Text>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Text weight={'semiBold'}>18,000,000.00 MBase (33%) </Text>
                        <Text size={'_12'} colors={'gray'}>~20,000,00 $</Text>
                    </div>
                </div>
                <div className={divider}/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Text size={'_14'}>Part 2</Text>
                        <Text size={'_12'} colors={'gray'}>~20,000,00 $</Text>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Text weight={'semiBold'}>18,000,000.00 MBase (33%) </Text>
                        <Text size={'_12'} colors={'gray'}>~20,000,00 $</Text>
                    </div>
                </div>
                <div className={divider}/>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Text size={'_14'}>Total Fee</Text>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Text weight={'semiBold'}>36,000 MBase (1%)</Text>
                        <Text size={'_12'} colors={'gray'}>~20,000,00 $</Text>
                    </div>
                </div>
            </div>
            <div className={footer}>
                <div className={actions}>
                    <Input
                        value={25000}
                        color={'whiteStroke'}
                        showUpLabel
                        upLabel={
                            <Text size={"_14"} withIconRight
                                  iconRight={<img style={{height: '20px'}} src={infoIcon} alt="infoIcon"/>}>
                                <span style={{whiteSpace: 'nowrap'}}>Enter GAS prise</span>
                            </Text>
                        }
                        showTokenName
                        tokenName={
                            <Text colors={'red'} size={'_14'}>
                                <span style={{fontWeight: 'bold'}}>GWEI</span>
                            </Text>
                        }
                    />
                    <Button auto size={'lg'} onClick={() => {
                    }}>
                        <Text title={'_3'}>APPROVE</Text>
                    </Button>
                    <Button isDisable auto size={'lg'} onClick={() => {
                    }}>
                        <Text title={'_3'}>ACCEPT</Text>
                    </Button>
                </div>
                <div className={tagContainer}>
                    <div className={tag}>
                        <Text size={'_12'} colors={'red'}>Safe</Text>
                    </div>
                    <div className={tag}>
                        <Text size={'_12'} colors={'red'}>Medium</Text>
                    </div>
                    <div className={tag}>
                        <Text size={'_12'} colors={'red'}>Fast</Text>
                    </div>
                </div>
                <div className={steps}>
                    <div/>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '200px'}}>
                        <div/>
                        <div className={cornerStep}>
                            <Text weight={'semiBold'} size={'_12'}>Step 1</Text>
                        </div>
                        <div className={cornerRight}>
                            <img style={{height: '12px'}} src={arrowRight} alt="arrowRight"/>
                        </div>
                    </div>
                    <div/>
                </div>
            </div>
        </div>
    );
};

const container = style({
    border: '3px solid rgba(138, 103, 255, 1)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    width: '575px',
    height: 'max-content'
})

const header = style({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'column',
    gap: '20px',
    borderRadius: '10px 10px 0 0',
})

const body = style({
    display: 'flex',
    flexDirection: 'column',
    padding: '28px',
})

const footer = style({
    marginTop: '14px',
    padding: '24px',
    borderRadius: '0 0 10px 10px',
})

const actions = style({
    display: 'flex',
    gap: '13px',
    alignItems: 'flex-end'
})

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

const tagContainer = style({
    display: 'flex',
    gap: '3px',
    marginTop: '4px'
})

const tag = style({
    padding: '2px 8px',
    borderRadius: '2px',
    display: 'flex',
    backgroundColor: 'rgba(255, 64, 9, 0.2)',
    color: 'rgba(188, 64, 28, 1)'
})

const steps = style({
    display: 'flex',
    justifyContent: 'space-between'
})

const cornerStep = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '24px',
    borderRadius: '24px',
    background: '#BC401C',
    padding: '0 7px 0 7px'
})

const cornerRight = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '24px',
    width: '24px',
    borderRadius: '24px',
    background: '#171C21'
})

export default VestingSplitDetails;