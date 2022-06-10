import React, {FC, ReactNode, RefObject, useContext} from 'react';
import settingsIcon from '../../assets/setting.svg';
import {style} from "typestyle";
import {Text} from '../atoms/Text'
import {Button} from '../atoms/Button'
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {DictionaryContext} from "../../contexts/DictionaryContext";
import {ConnectWalletProps} from "./types";

const ConnectWallet: FC<ConnectWalletProps> = ({onConnectClick, text, btnText, title}) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    return (
        <div className={container(500, isMobile, isTablet)}>
            <div className={content(isMobile, isTablet)}>
                <div className={settingStyle}>
                    <img style={{height: '24px', width: '24px'}} src={settingsIcon} alt=""/>
                </div>
                <div style={{marginBottom: '16px'}}>
                    <Text title={'_3'} colors={'gray'}>
                        {title}
                    </Text>
                    <Text className={style({textAlign: 'center'})} colors={'gray'} size={'_14'}>
                        {text}
                    </Text>
                </div>
                <div style={{width: '240px'}}>
                    <Button size={'xl'} auto onClick={onConnectClick} colors={'gradient'}>
                        <Text title={'_4'}>{btnText}</Text>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const ConnectWalletLocalized: FC<ConnectWalletProps> = (props) => {
    const {nft} = useContext(DictionaryContext);

    return <ConnectWallet
        {...props}
        title={nft.dashboard.connect_your_wallet.title}
        text={nft.dashboard.connect_your_wallet.text}
        btnText={nft.dashboard.connect_your_wallet.btn_text}
    />
}

const container = (height: number, isMobile: boolean, isTablet: boolean) => style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: (isMobile || isTablet) ? '100%' : '1066px',
    backgroundColor: (isMobile || isTablet) ? 'unset' : 'rgba(27,27,28,0.6)',
    borderRadius: '16px'
})

const content = (isMobile: boolean, isTablet: boolean) => style({
    width: (isMobile || isTablet) ? '100%' : '440px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
})

const settingStyle = style({
    height: '60px',
    width: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    backgroundColor: 'rgba(44, 44, 46, 1)',
    borderRadius: '50%'
})