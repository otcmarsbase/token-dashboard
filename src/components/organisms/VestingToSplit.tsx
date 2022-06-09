import React, {useState} from 'react';
import {Text} from '../atoms/Text'
import {Button} from '../atoms/Button'
import {style} from "typestyle";
import VestingSplitSectionOverview from "../molecules/VestingSplitSectionOverview";
import VestingSplitParametr from "../molecules/VestingSplitParametr";
import silver2 from "../../assets/silver-2.svg";
import question from '../../assets/question.png'
import Input from "../Input";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

export interface ISplitParametr {
    id: string;
    proportion: number;
    percent: number
}

const VestingToSplit = () => {
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const [splitParameters, setSplitParameters] = useState<ISplitParametr[]>([{
        id: uuidv4(),
        proportion: 18000000.00,
        percent: 33
    }, {
        id: uuidv4(),
        proportion: 18000000.00,
        percent: 33
    }])


    const handleAdd = () => {
        setSplitParameters([...splitParameters, {
            id: uuidv4(),
            proportion: 0,
            percent: 0
        }])
    };

    const handleDelete = (id: string) => () => {
        setSplitParameters(splitParameters.filter(p => p.id !== id))
    };

    const handleEdit = (id: string, value: number, key: keyof ISplitParametr) => {
        setSplitParameters(splitParameters.map(p => p.id === id ? {...p, [key]: value} : p))
    };

    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div className={containerWrapper(isTablet, isMobile)}>
            <div className={container(isTablet, isMobile)}>
                <div className={header}>
                    <div style={{padding: '28px 21px 45px 21px'}}>
                        <VestingSplitSectionOverview
                            title={'To Split'}
                            subTitle={'Set the parameters you need to suggest the best trading conditions'}
                            actionText={'How to split?'}
                            actionIcon={<img style={{height: '18px'}} src={question} alt=""/>}
                            onAction={() => null}
                        />
                        <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                            <div className={nftInfo}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <img src={silver2} alt="silver nft"/>
                                    <Text>36,597,345.03</Text>
                                    {!isMobile && <Text colors={'gray'} size={'_12'}>~20,000,00 $</Text>}
                                </div>
                                <div>
                                    <Text colors={'red'}>MBase</Text>
                                </div>
                            </div>
                            {!isMobile && <Button onClick={() => null} size={'lg'}>Change</Button>}
                        </div>
                    </div>
                </div>
                <div className={body}>
                    <VestingSplitSectionOverview
                        title={'Split parameters'}
                        subTitle={'You can split your NFT up to 10 parts'}
                    />
                    {splitParameters.map((splitParametr, index) => (
                        <VestingSplitParametr
                            handleAdd={handleAdd}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            parametersLength={splitParameters.length}
                            position={index}
                            key={splitParametr.id}
                            {...splitParametr}
                        />
                    ))}
                </div>
                <div className={footer}>
                    <Button auto size={'lg'} onClick={() => null}>
                        <Text title={'_3'}>SPLIT</Text>
                    </Button>
                    <div>
                        <Text colors={'gray'} size={'_14'}>Total fee:</Text>
                        <Text weight={'medium'} size={'_14'}>36,000 MBS (1%)</Text>
                        <Text colors={'gray'} size={'_12'}>~10,000 $</Text>
                    </div>
                </div>
            </div>
        </div>

    );
};

const nftInfo = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(81, 84, 96, 0.4)',
    padding: '12px 14px 12px 14px',
    borderRadius: '8px',
    width: '100%'
})

const containerWrapper = (isTablet: boolean, isMobile: boolean) => style({
    padding: '3px',
    background: `linear-gradient(151.47deg, #8A67FF -7.28%, #49D4FF 29.09%, #FE673C 65.78%, #A6498F 107.39%)`,
    borderRadius: '10px',
    marginBottom: (isTablet || isMobile) ? '112px' : 'unset',
})

const container = (isTablet: boolean, isMobile: boolean) => {
    return style({
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: (isTablet || isMobile) ? '100%' : '575px',
        height: 'max-content',
        backgroundColor: 'black'
    })
}

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
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
})

export default VestingToSplit;