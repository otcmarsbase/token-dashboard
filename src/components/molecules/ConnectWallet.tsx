import React, {FC, RefObject} from 'react';
import settingsIcon from '../../assets/setting.svg';
import {style} from "typestyle";
import {Button, Text} from "../atoms";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

interface ConnectWalletProps {
    ref?: RefObject<HTMLDivElement>
}

const ConnectWallet: FC<ConnectWalletProps> = ({ref}) => {
    const height = ref?.current?.clientHeight;
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    return (
        <div className={container(height || 500)}>
            <div className={content(isMobile, isTablet)}>
                <div className={settingStyle}>
                    <img style={{height: '24px', width: '24px'}} src={settingsIcon} alt=""/>
                </div>

                <div style={{marginBottom: '16px'}}>
                    <Text title={'_3'} colors={'gray'}>
                        Connect your wallet
                    </Text>
                    <Text className={style({textAlign: 'center'})} colors={'gray'} size={'_14'}>
                        We will calculate the profit from the Marsbase deal and give recommendations on the parameters
                    </Text>
                </div>
                <div style={{width: '240px'}}>
                    <Button size={'xl'} auto onClick={() => null} colors={'gradient'}>
                        <Text title={'_4'}>Connect wallet</Text>
                    </Button>
                </div>
            </div>
        </div>
    );
};

const container = (height: number) => style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: '100%'
})

const content = (isMobile: boolean, isTablet: boolean) => style({
    width: (isMobile || isTablet) ? '100%' :'440px',
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

export default ConnectWallet;