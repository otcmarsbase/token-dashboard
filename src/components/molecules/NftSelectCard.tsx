import React, {FC} from 'react';
import purpleNft from "../../assets/purpleNft.svg";
import goldNft from "../../assets/goldNft.svg";
import goldDarkNft from "../../assets/goldDarkNft.svg";
import redNft from "../../assets/redNft.svg";
import silverNft from "../../assets/silverNft.svg";

import {Label, Text} from "../atoms";
import {style} from "typestyle";

type ColorTypes = 'gold' | 'goldDark' | 'red' | 'silver' | 'purple';

interface INftSelectCard {
    active?: boolean;
    color: ColorTypes;
    amount: number;
    token: string;
    usd: number;
    price: number;
    started: number;
}

const NftSelectCard: FC<INftSelectCard> = (
    {
        active,
        color,
        amount,
        token,
        usd,
        price,
        started
    }) => {
    return (
        <div className={active ? containerActive : container}>
            <div style={{marginRight: '12px'}}>
                {(() => {
                    switch (color) {
                        case "purple":
                            return <img style={{height: '100%'}} src={purpleNft} alt=""/>
                        case "gold":
                            return <img style={{height: '100%'}} src={goldNft} alt=""/>
                        case "goldDark":
                            return <img style={{height: '100%'}} src={goldDarkNft} alt=""/>
                        case "red":
                            return <img style={{height: '100%'}} src={redNft} alt=""/>
                        case "silver":
                            return <img style={{height: '100%'}} src={silverNft} alt=""/>
                    }
                })()}
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <div>
                    <Text size={'_14'}>{`${amount} ${token}`}</Text>
                    <Text colors={'gray'}>~{usd}$</Text>
                </div>
                <div>
                    {(() => {
                        switch (color) {
                            case "purple":
                                return <Label colors={'cyan'}>
                                    <span>Price <b>{price}</b></span>
                                </Label>
                            case "gold":
                            case "goldDark":
                                return <Label colors={'yellow'}>
                                    <span>Price <b>{price}</b></span>
                                </Label>
                            case "red":
                                return <Label>
                                    <span>Price <b>{price}</b></span>
                                </Label>
                            case "silver":
                                return <Label>
                                    <span>Price <b>{price}</b></span>
                                </Label>
                        }
                    })()}
                    <Label disabled>
                        <span>Started <b>{new Date(started).toLocaleDateString('ru')}</b></span>
                    </Label>
                </div>
            </div>
        </div>
    );
};

const container = style({
    display: 'flex',
    padding: '12px 24px 12px 24px'
})

const containerActive = style({
    display: 'flex',
    padding: '12px 24px 12px 24px',
    backgroundColor: 'rgba(173, 54, 19, 0.2)'
});

export default NftSelectCard;