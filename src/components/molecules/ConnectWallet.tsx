import React, {FC, RefObject} from 'react';
import settingsIcon from '../../assets/settings.png';
import {style} from "typestyle";
import {Button, Text} from "../atoms";

interface ConnectWalletProps {
    ref?: RefObject<HTMLDivElement>
}

const ConnectWallet: FC<ConnectWalletProps> = ({ref}) => {
    const height = ref?.current?.clientHeight;

    return (
        <div className={container(height || 500)}>
            <div className={content}>
                <img style={{height: '64px', width: '64px', marginBottom: '16px'}} src={settingsIcon} alt=""/>
                <div style={{marginBottom: '16px'}}>
                    <Text title={'_3'} colors={'gray'}>
                        Connect your wallet
                    </Text>
                    <Text colors={'gray'} size={'_14'}>
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

const content = style({
    width: '440px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
})

export default ConnectWallet;