import React from "react"

import {FC, ReactNode, useContext} from "react"
import {Text} from "../atoms/Text"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import question from '../../assets/question.png';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {HeaderOverviewProps} from "./types";

const HeaderOverviewVisual: FC<HeaderOverviewProps> = ({title, subTitle}) => {

    const isMobile = useMediaQuery(Queries.mobile)

    return (
        <div>
            <div style={{display: "flex", alignItems: 'center'}}>
                <Text title={isMobile ? '_2' : '_1'}>{title}</Text>
                {isMobile
                    ? <img style={{height: '18px', width: '18px', marginLeft: '6px'}} src={question} alt=""/>
                    : (
                        <Text
                            colors={'red'}
                            size={'_14'}
                            iconLeft={<img style={{height: '18px', width: '18px', marginLeft: '16px'}} src={question} alt=""/>}
                            withIconLeft
                        >
                            <span style={{whiteSpace: 'nowrap'}}>How to use?</span>
                        </Text>
                    )}

            </div>
            <div style={{marginBottom: '8px'}}/>
            <Text colors={'gray'} size={'_12'}>{subTitle}</Text>
            <div style={{marginBottom: '24px'}}/>
        </div>
    )
}

export const NftOverviewLocalized: React.FC = () => {
    const {nft} = useContext(DictionaryContext);

    return <HeaderOverviewVisual title={nft.dashboard.page_title} subTitle={nft.dashboard.page_description}/>
}
