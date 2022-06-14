import React, {FC, useContext, useEffect} from 'react';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {createPortal} from "react-dom";
import {style} from "typestyle";
import {Button} from '../atoms/Button';
import {Text} from '../atoms/Text';
import purpleNftIcon from '../../assets/purpleNft.svg';
import Input from "../Input";
import questionIcon from '../../assets/question.png';
import {ClaimRewardsModalProps, ClaimRewardsModalLocalizedProps} from "./types";
import {DictionaryContext} from "../../contexts/DictionaryContext";
import Container from "../Container";

const ClaimRewardsModal: FC<ClaimRewardsModalProps> = ({all, ...props}) => {
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    return <div className={container(isMobile)}>
        <div className={modalContainer}>
            <div className={modalWrapper(isMobile)}>
                <div className={modal(isMobile, isTablet)}>
                    <div className={modalContent}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                            <Text title={'_2'}>{props.headerTitle}</Text>
                            <Text colors={'gray'} size={'_12'}>{props.headerTitle}</Text>
                        </div>
                        <span style={{textAlign: 'start'}}>
                                <Text title={'_3'}>
                                    {props.bodyTitle}
                                </Text>
                            </span>
                        {!all && (
                            <div className={vestingAssetCard}>
                                <img src={purpleNftIcon} style={{marginRight: '10px', height: '60px'}} alt=""/>
                                <Text>{props.amount} {props.token}</Text>
                            </div>
                        )}
                        <Input
                            upLabel={
                                <Text
                                    iconRight={<img src={questionIcon} style={{height: '9px'}} alt=""/>}
                                    withIconRight
                                >
                                    <span style={{whiteSpace: 'nowrap'}}>{props.inputLabelUp}</span>
                                </Text>}
                            showUpLabel
                            color={'whiteStroke'}
                        />
                        <Container direction={'horizontal'} gap={'_10'}>
                            <Button colors={'defaultStroke'} onClick={props.onClose} size={'lg'} auto>
                                <Text weight={'medium'} size={'_14'}>Close</Text>
                            </Button>
                            <Button onClick={() => null} size={'lg'} auto>
                                <Text weight={'medium'} size={'_14'}>{props.btnClaim}</Text>
                            </Button>
                        </Container>

                    </div>
                </div>
            </div>
        </div>
    </div>

};

export const ClaimRewardsModalLocalized: FC<ClaimRewardsModalLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext);

    return <ClaimRewardsModal
        headerTitle={nft.dashboard.modals.claim_rewards.header_title}
        headerSubTitle={nft.dashboard.modals.claim_rewards.header_sub_title}
        bodyTitle={nft.dashboard.modals.claim_rewards.body_title}
        inputLabelUp={nft.dashboard.modals.claim_rewards.input_label_up}
        btnClaim={nft.dashboard.modals.claim_rewards.btn_claim}
        {...props}
    />
}

const container = (isMobile: boolean) => style({
    display: 'flex',
    alignItems: isMobile ? 'end' : 'center',
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
    justifyContent: 'center',
    marginBottom: '83px',
})

const modalWrapper = (isMobile: boolean) => style({
    width: isMobile ? '100%' : '462px',
    position: 'relative',
    background: isMobile ? 'unset' : `linear-gradient(151.47deg, #8A67FF -7.28%, #49D4FF 29.09%, #FE673C 65.78%, #A6498F 107.39%)`,
    borderRadius: isMobile ? 'unset' : '16px',
    padding: isMobile ? 'unset' : '3px',
})

const modal = (isMobile: boolean, isTablet: boolean) => style({
    display: 'flex',
    backgroundColor: 'black',
    width: isMobile ? '100%' : '462px',
    borderRadius: isMobile ? 'unset' : '16px',
})

const modalContent = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
    padding: '23px'
})

const vestingAssetCard = style({
    backgroundColor: 'rgba(42,42,44,0.4)',
    borderLeft: '6px solid rgba(152, 81, 255, 1)',
    padding: '14px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '16px'
})
