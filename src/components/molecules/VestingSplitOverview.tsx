import React, {FC, ReactNode, useContext} from 'react';
import {Text} from '../atoms';
import {style} from 'typestyle';
import {DictionaryContext} from "../../contexts/DictionaryContext";
import q from '../../assets/question.png';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

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
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div className={container(isMobile)}>
            <div style={{display: 'flex', marginBottom: isMobile ? '8px' : '0'}}>
                <Text title={isMobile ? '_2' : "_1"}>{title}</Text>
                <Text colors={"red"} withIconLeft iconLeft={<img style={{height: '18px'}} src={q} alt=""/>}>
                    <span style={{whiteSpace: 'nowrap'}}>{howToUse}</span>
                </Text>
            </div>
            <div style={{marginBottom: isMobile ? '8px' : '0'}}>
                <Text colors={'gray'} size={'_14'}>
                    {subTitle}
                </Text>
            </div>
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

const container = (isMobile: boolean) => style({
    width: isMobile ? '100%' : '500px'
})

export const VestingSplitOverviewWrapper = () => <VestingSplitOverviewLocalized/>

export default VestingSplitOverview;