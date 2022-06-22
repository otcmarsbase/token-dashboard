import React from 'react';

import {Text} from '../atoms/Text'
import {Button} from '../atoms/Button'
import VestingSplitSectionOverview from "../molecules/VestingSplitSectionOverview";
import Input from "../Input";

import arrowLeft from '../../assets/arrowLeft.png';
import arrowRight from '../../assets/arrowRight.png';
import silver2 from "../../assets/silver-2.svg";
import infoIcon from "../../assets/info.png";

import {style} from "typestyle";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {SplitDetailsSectionLocalized} from "../molecules/SplitDetailsSection";

const VestingSplitDetailsExample: React.FC = () =>
{
	return <VestingSplitDetails
		title="Check split details"
	/>
}

export type VestingSplitDetailsProps = {
	title: React.ReactNode
}
const VestingSplitDetails: React.FC<VestingSplitDetailsProps> = props => {
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div className={containerWrapper(isMobile, isTablet)}>
            <div className={container(isMobile, isTablet)}>
                <div className={header}>
                    <div style={{padding: '28px 21px 10px 21px'}}>
                        <VestingSplitSectionOverview
                            title={props.title}
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
                    <SplitDetailsSectionLocalized
                        totalParts={2}
                    />
                    <SplitDetailsSectionLocalized
                        amount={1800000.00}
                        token={'MBase'}
                        percent={33}
                        partIndex={1}
                        usd={20000}
                    />
                    <SplitDetailsSectionLocalized
                        amount={1800000.00}
                        token={'MBase'}
                        percent={33}
                        partIndex={2}
                        usd={20000}
                    />
                    <SplitDetailsSectionLocalized
                        amount={36000}
                        token={'MBase'}
                        percent={1}
                        usd={20000}
                        totalFee
                    />
                </div>
                <div className={footer}>
                    <div className={actions(isMobile, isTablet)}>
                        <div style={{width: '100%'}}>
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
                        </div>
                        <div style={{display: 'flex', width: '100%'}}>
                            <Button auto size={'lg'} onClick={() => null}>
                                <Text title={'_3'}>APPROVE</Text>
                            </Button>
                            <Button disabled auto size={'lg'} onClick={() => null}>
                                <Text title={'_3'}>ACCEPT</Text>
                            </Button>
                        </div>
                    </div>
                    <div className={steps}>
                        {!isMobile && <div style={{width: '200px'}}/>}
                        <div style={{display: 'flex', justifyContent: 'space-between', width: '200px'}}>
                            <div/>
                            <div className={cornerStep(false)}>
                                <Text weight={'semiBold'} size={'_12'}>Step 1</Text>
                            </div>
                            <div className={cornerRight}>
                                <img style={{height: '12px'}} src={arrowRight} alt="arrowRight"/>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', width: '200px'}}>
                            <div/>
                            <div className={cornerStep(true)}>
                                <Text colors={'gray'} size={'_12'}>Step 2</Text>
                            </div>
                            <div/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const containerWrapper = (isMobile: boolean, isTablet: boolean) => style({
    padding: '3px',
    background: `linear-gradient(151.47deg, #8A67FF -7.28%, #49D4FF 29.09%, #FE673C 65.78%, #A6498F 107.39%)`,
    borderRadius: '10px',
    width: (isMobile || isTablet) ? '100%' : '575px',
})

const container = (isMobile: boolean, isTablet: boolean) => style({
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    width: (isMobile || isTablet) ? '100%' : '575px',
    height: 'max-content',
    marginBottom: (isMobile || isTablet) ? '100px' : 'unset',
    backgroundColor: 'black'
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

const actions = (isMobile: boolean, isTablet: boolean) => style({
    display: 'flex',
    alignItems: (isTablet) ? 'center' : 'flex-end',
    flexDirection: (isMobile) ? 'column' : 'row',
    marginBottom: '20px'
})

const nftInfo = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(81, 84, 96, 0.4)',
    padding: '12px 14px 12px 14px',
    borderRadius: '8px'
})

const tagContainer = style({
    display: 'flex',
    gap: '3px',
    marginTop: '4px',
    width: '100%',
    marginBottom: '28px'
})

const tag = style({
    padding: '2px 8px',
    borderRadius: '2px',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 64, 9, 0.2)',
    color: 'rgba(188, 64, 28, 1)'
})

const steps = style({
    display: 'flex',
    justifyContent: 'space-between'
})

const cornerStep = (disable: boolean) => style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '24px',
    borderRadius: '24px',
    background: disable ? 'rgba(113,138,167,0.2)' : '#BC401C',
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