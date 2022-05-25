import React, {FC, ReactNode, useContext} from 'react';
import {Text} from '../atoms';
import {style} from 'typestyle';
import {DictionaryContext} from "../../contexts/DictionaryContext";
import q from '../../assets/question.png';

interface VestingSplitOverviewProps {
    title: ReactNode
    howToUse: ReactNode;
    subTitle: ReactNode
}

const VestingSplitOverview: FC<VestingSplitOverviewProps> = (
    {
        title,
        howToUse,
        subTitle
    }) => {
    return (
        <div className={container}>
            <div style={{display: 'flex'}}>
                <Text title={"_1"}>{title}</Text>
                <Text colors={"red"} withIconLeft iconLeft={<img style={{height: '18px'}} src={q} alt=""/>}>
                    <span style={{whiteSpace: 'nowrap'}}>{howToUse}</span>
                </Text>
            </div>
            <Text colors={'gray'} size={'_14'}>
                {subTitle}
            </Text>
        </div>
    );
};

const VestingSplitOverviewLocalized = () => {
    const {nft} = useContext(DictionaryContext);

    return <VestingSplitOverview
        title={nft.vestingSplit.page_title}
        subTitle={nft.vestingSplit.page_description}
        howToUse={nft.vestingSplit.how_to_use}
    />
}

const container = style({
    width: '500px'
})

export const VestingSplitOverviewWrapper = () => <VestingSplitOverviewLocalized/>

export default VestingSplitOverview;