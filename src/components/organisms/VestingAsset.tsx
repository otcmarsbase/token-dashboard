import React from 'react';
import {Text, Button} from '../atoms'
import {style} from "typestyle";
import gold1 from '../../assets/gold-1.svg'
import silver2 from '../../assets/silver-2.svg'
import Input from "../Input";
import Checkbox from "../Checkbox";

const container = style({
    border: '3px solid rgba(138, 103, 255, 1)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
})

const header = style({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'column',
    gap: '20px',
    backgroundColor: '#1f1f1f',
    borderRadius: '10px 10px 0 0',
})

const vestingAsset = style({
    display: 'flex',
    justifyContent: 'space-between'
})

const toSplit = style({
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-end'
})

const headerBody = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
})

const footer = style({
    backgroundColor: '#74250E',
    padding: '24px',
    borderRadius: '0 0 10px 10px',
})

const VestingAsset = () => {
    return (
        <div className={container}>
            <div className={header}>
                <div style={{padding: '20px'}}>
                    <div className={vestingAsset}>
                        <div>
                            <Text size={'_18'}>Сhoose vesting asset</Text>
                            <Text size={'_12'} colors={'gray'}>Set the parameters you need to suggest the best trading conditions</Text>
                        </div>
                        <Text colors={'red'} size={'_14'}>How to use?</Text>
                    </div>
                    <div className={toSplit}>
                        <div style={{width: '100%'}}>
                            <Text>To split</Text>
                            <Input color={'dark'} startIcon={<img src={gold1} alt=""/>} showStartIcon/>
                        </div>
                        <Button size={'xl'} onClick={() => null}>Change</Button>
                    </div>
                </div>

            </div>
            <div className={headerBody}>
                <div>
                    <Text>Split parameters</Text>
                    <Text>Сhoose the best strategy for exchanging your funds</Text>
                </div>
                <div>
                    <Text>Proportion</Text>
                    <Input
                        onChange={event => console.log(event.target.value)}
                        showStartIcon
                        startIcon={<img src={silver2} alt=""/>}
                        value={'18,000,000.00'}
                        color={'darkStroke'}
                    />
                </div>
                <div>
                    <Text>Proportion</Text>
                    <Input
                        onChange={event => console.log(event.target.value)}
                        showStartIcon
                        startIcon={<img src={silver2} alt=""/>}
                        color={'darkStroke'}
                    />
                    <Checkbox children={'Send to another wallet'}/>
                </div>
                <div>
                    <Text>Proportion</Text>
                    <Input
                        onChange={event => console.log(event.target.value)}
                        showStartIcon
                        startIcon={<img src={silver2} alt=""/>}
                        color={'darkStroke'}
                    />
                    <Checkbox children={'Send to another wallet'}/>
                </div>
            </div>
            <div className={footer}>
                <Button auto size={'lg'} onClick={() => null}>
                    <Text weight={'medium'}>SPLIT</Text>
                </Button>
                <div>
                    <Text>Fee:</Text>
                    <Text weight={'medium'} colors={'red'}>36,000 MBS (1%)</Text>
                </div>

            </div>
        </div>
    );
};

export default VestingAsset;