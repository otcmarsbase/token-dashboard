import React, {useState} from 'react';
import {Text, Button} from '../atoms'
import {style} from "typestyle";
import gold1 from '../../assets/gold-1.svg'
import silver2 from '../../assets/silver-2.svg'
import Input from "../Input";
import Checkbox from "../Checkbox";
import VestingSplitSectionOverview from "../molecules/VestingSplitSectionOverview";

const VestingAsset = () => {
    const [state, setState] = useState('18,000,000.00')
    return (
        <div className={container}>
            <div className={header}>
                <div style={{padding: '28px 21px 45px 21px'}}>
                    <div className={vestingAsset}>
                        <VestingSplitSectionOverview/>
                    </div>
                    <div className={toSplit}>
                        <Input
                            onChange={event => setState(event.target.value)}
                            value={state}
                            startIcon={<img src={gold1} alt=""/>}
                            showStartIcon
                        />
                        <Button size={'xl'} onClick={() => null}>Change</Button>
                    </div>
                </div>
            </div>
            <div className={headerBody}>
                <VestingSplitSectionOverview/>
                <Input
                    onChange={event => setState(event.target.value)}
                    value={state}
                    showStartIcon
                    startIcon={<img src={silver2} alt=""/>}
                    color={'whiteStroke'}
                    showUpLabel
                    upLabel={<Text size={'_14'}>Proportion</Text>}
                    showDownLabel
                    downLabel={<Text size={'_12'}>Fee: 14,000 MBase (1%) ~10,000 $ </Text>}
                />
                <Input
                    onChange={event => console.log(event.target.value)}
                    showStartIcon
                    startIcon={<img src={silver2} alt=""/>}
                    value={state}
                    color={'whiteStroke'}
                    showUpLabel
                    upLabel={<Text size={'_14'}>Proportion</Text>}
                    showDownLabel
                    downLabel={<Text size={'_12'}>Fee: 14,000 MBase (1%) ~10,000 $ </Text>}
                />
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
    backgroundColor: '#1B1B1C',
    borderRadius: '10px 10px 0 0',
})

const vestingAsset = style({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '25px'
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

export default VestingAsset;