import React, {FC} from 'react';

import {Button, Label, TagLabelColors, Text} from "../atoms";
import {style} from "typestyle";

import purpleNftIcon from "../../assets/purpleNft.svg";
import goldNftIcon from "../../assets/goldNft.svg";
import goldDarkNftIcon from "../../assets/goldDarkNft.svg";
import redNftIcon from "../../assets/redNft.svg";
import silverNftIcon from "../../assets/silverNft.svg";
import {ColorTypes} from "./NftSelectCard";
import {INft} from "../organisms/NftTable";


interface NftCardMobileProps extends INft {
    onClaim: (nftId: string) => void;
    onActions: (nftId: string) => void;
}

const NftCardMobile: FC<NftCardMobileProps> = (props) => {
        const {
            id,
            price,
            kind,
            started,
            onActions,
            onClaim
        } = props;

        return (
            <div className={mobileNftCart('purple')}>
                <div style={{padding: '13px'}}>
                    <div className={mobileNftCartHeader}>
                        <img style={{height: '52px'}} src={purpleNftIcon} alt=""/>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            gap: '10px'
                        }}>
                            <Label colors={'cyan'}>
                                <span>Price </span>
                                <span style={{fontWeight: '500'}}>{price}</span>
                            </Label>
                            <Label disabled>
                                <span>Started </span>
                                <span style={{fontWeight: '500'}}>{started}</span>
                            </Label>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Text colors={'gray'} size={'_12'}>
                                <b>Lot of NFT</b>
                            </Text>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                                <Text>36,000,000,000 MBase</Text>
                                <Text colors={'gray'} size={'_11'}>~56,000$</Text>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%', gap: '5px'}}>
                            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                                <Text size={'_10'}>1,500,780 MBS</Text>
                                <Text colors={'gray'}>14,500,780 MBS Locked</Text>
                            </div>
                            <div>
                                <div className={progressContainer}>
                                    <div className={progressLine(95.1)}/>
                                </div>
                            </div>
                            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                                <div>
                                    <Text size={'_10'}>95,1%</Text>
                                    <Text size={'_10'} colors={'gray'}>299 days</Text>
                                </div>
                                <div>
                                    <Text size={'_10'}>4,9%</Text>
                                    <Text size={'_10'} colors={'gray'}>66 days</Text>
                                </div>
                            </div>
                        </div>
                        <div className={availableContainer}>
                            <Text colors={'gray'} size={'_12'}>
                                <b>Availible for claim</b>
                            </Text>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                                <Text colors={'red'}>6,656,77 MBase</Text>
                                <Text colors={'gray'} size={'_11'}>~31,32$</Text>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', gap: '10px'}}>
                        <Button onClick={() => onClaim(id)} auto size={'sm'}>Claim</Button>
                        <Button onClick={() => onActions(id)} auto size={'sm'} colors={'defaultStroke'}>Actions</Button>
                    </div>
                </div>
            </div>
        );
    }
;

const mobileNftCart = (borderColor: string) => style({
    display: 'block',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderTop: `6px solid ${borderColor}`,
    borderRadius: '8px',
})

const mobileNftCartHeader = style({
    display: 'flex',
    marginBottom: '15px'
})

const availableContainer = style({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
    paddingBottom: '12px',
    borderBottom: '1px solid rgba(42, 42, 44, 1)'
})

const progressContainer = style({
    backgroundColor: 'rgba(104, 106, 110, 1)',
    borderRadius: '4px',
    position: 'relative',
    height: '6px'
})

const progressLine = (progress: number) => style({
    position: 'absolute',
    width: `${progress}%`,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    background: 'linear-gradient(90deg, #FF1414 0%, #EAEE2C 48.44%, #7BDA1D 100%)',
    borderRadius: '4px',
})

export default NftCardMobile;