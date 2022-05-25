import React, {FC} from 'react';
import Input from "../Input";
import silver2 from "../../assets/silver-2.svg";
import {Button, Text} from "../atoms";
import info from '../../assets/info.png'

interface VestingSplitParametrProps {

}

const VestingSplitParametr: FC<VestingSplitParametrProps> = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div style={{display: 'flex', alignItems: 'flex-start', width: '100%', gap: '12px'}}>
                <Input
                    value={'18,000,000.00'}
                    showStartIcon
                    startIcon={<img src={silver2} alt=""/>}
                    color={'whiteStroke'}
                    showUpLabel
                    upLabel={<Text size={'_14'}>Proportion</Text>}
                    showDownLabel
                    downLabel={
                        <>
                            <Text size={'_12'}>Fee: 14,000 MBase (1%)</Text>
                            <Text colors={'gray'} size={'_12'}>~10,000 $ </Text>
                        </>
                    }
                    showTokenName
                    tokenName={<Text colors={'red'} size={'_14'}>MBase</Text>}
                />
                <Input
                    value={'33%'}
                    color={'whiteStroke'}
                    showUpLabel
                    upLabel={
                        <Text
                            withIconRight
                            iconRight={<img height={'14px'} src={info} alt=""/>}
                            size={'_14'}>
                            Percent
                        </Text>
                    }
                    percent
                />
            </div>
            <Button size={'xl'} onClick={() => null}>+</Button>
        </div>
    );
};

export default VestingSplitParametr;