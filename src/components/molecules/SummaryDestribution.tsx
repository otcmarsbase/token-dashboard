import React from "react"

import {FC, ReactNode, useContext} from "react"
import {style} from "typestyle"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {Text} from "../atoms/Text"
import {Count} from "../atoms/Count"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import flyUsdIcon from '../../assets/flyUsd.png';

interface SummaryDestributionProps {
    icon?: ReactNode
    title: ReactNode
    subTitle: ReactNode
    count: ReactNode
}

const SummaryDestribution: FC<SummaryDestributionProps> = ({title, subTitle, count}) => {
    const isMobile = useMediaQuery(Queries.mobile)

    return (
        <div className={container(isMobile)}>
            <img style={{height: '36px', marginRight: '12px'}} src={flyUsdIcon} alt=""/>
            <div className={content}>
                <div className={contentHeader}>
                    <Text title={'_3'}>{title}</Text>
                    <Count distribution>
                        <Text title={'_4'} colors={'red'}>{count}</Text>
                    </Count>
                </div>
                <Text size={'_12'} colors={'gray'}>{subTitle}</Text>
            </div>
        </div>
    )
}

const container = (isMobile: boolean) => style({
    display: "flex",
    width: isMobile ? '100%' : "300px"
})
const content = style({
    display: "flex",
    flexDirection: "column"
})

const contentHeader = style({
    display: "flex",
    gap: "5px"
})

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

export default SummaryDestribution
