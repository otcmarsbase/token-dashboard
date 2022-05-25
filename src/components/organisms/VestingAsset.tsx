import React from 'react';
import {Text, Button} from '../atoms'
import {style} from "typestyle";
import VestingSplitSectionOverview from "../molecules/VestingSplitSectionOverview";
import VestingSplitParametr from "../molecules/VestingSplitParametr";

const VestingAsset = () => {
    return (
        <div className={container}>
            <div className={header}>
                <div style={{padding: '28px 21px 45px 21px'}}>
                    <VestingSplitSectionOverview
                        title={'To Split'}
                        subTitle={'Set the parameters you need to suggest the best trading conditions'}
                        howToUse={'How to split?'}
                    />
                    <VestingSplitParametr/>
                </div>
            </div>
            <div className={body}>
                <VestingSplitSectionOverview
                    title={'Split parameters'}
                    subTitle={'You can split your NFT up to 10 parts'}
                />
                <VestingSplitParametr/>
            </div>
            <div className={footer}>
                <Button auto size={'lg'} onClick={() => null}>
                    <Text weight={'medium'}>SPLIT</Text>
                </Button>
                <div>
                    <Text colors={'gray'}>Fee:</Text>
                    <Text weight={'medium'} colors={'red'}>36,000 MBS (1%)</Text>
                    <Text colors={'gray'}>~10,000 $</Text>
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
    width: '575px',
    height: 'max-content'
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

const body = style({
    display: 'flex',
    flexDirection: 'column',
    padding: '28px',
})

const footer = style({
    backgroundColor: '#74250E',
    padding: '24px',
    borderRadius: '0 0 10px 10px',
    textAlign: 'center'
})

export default VestingAsset;