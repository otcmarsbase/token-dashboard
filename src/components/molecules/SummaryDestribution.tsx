import React from "react"

import {FC, useContext} from "react"
import {style} from "typestyle"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {Text} from "../atoms/Text"
import {Count} from "../atoms/Count"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import flyUsdIcon from '../../assets/flyUsd.png';
import {SummaryDestributionProps} from "./types";
import Container from "../Container";

const SummaryDestribution: FC<SummaryDestributionProps> = ({title, subTitle, count}) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);
    const isDesktop = (!isMobile && !isTablet)

    return (
        <Container direction={'horizontal'} auto={!isMobile} justify={'start'}>
            <img style={{height: '36px', marginRight: '12px'}} src={flyUsdIcon} alt=""/>
            <Container align={'start'}>
                <Container gap={'_5'} justify={'start'} direction={'horizontal'}>
                    <Text title={'_3'}>{title}</Text>
                    <Count distribution>
                        <Text title={'_4'} colors={'red'}>
                            <div>
                                {count}
                            </div>
                           </Text>
                    </Count>
                </Container>
                <Text size={'_12'} colors={'gray'}>{subTitle}</Text>
            </Container>
        </Container>
    )
}

type SummaryDestributionLocalizedProps = Pick<SummaryDestributionProps, "count" | "icon">

export const SummaryDestributionLocalized: FC<SummaryDestributionLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext)

    return <SummaryDestribution {...props} title={nft.dashboard.summary.header.toUpperCase()}
                                subTitle={nft.dashboard.summary.desc}/>
}

interface SummaryDestributionWrapperProps {
    count: number
}

export const SummaryDestributionWrapper: FC<SummaryDestributionWrapperProps> = ({count}) => {
    return <SummaryDestributionLocalized count={count}/>
}
