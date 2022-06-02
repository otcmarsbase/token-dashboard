import React from "react"

import {FC, ReactNode, useContext} from "react"
import {Text} from "../atoms"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import question from '../../assets/question.png';
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

interface HeaderOverviewProps {
    title: ReactNode
    subTitle: ReactNode
}

const HeaderOverviewVisual: FC<HeaderOverviewProps> = (
    {
        title,
        subTitle
    }) => {

    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div>
            <div style={{display: "flex"}}>
                <Text title={isMobile ? '_2' : '_1'}>{title}</Text>
                {!isMobile && <Text
                    colors={'red'}
                    size={'_14'}
                    iconRight={<img style={{height: '18px', width: '18px'}} src={question} alt=""/>}
                    withIconRight
                ><span style={{whiteSpace: 'nowrap'}}>How to use?</span></Text>}

            </div>
            <Text colors={'gray'} size={'_12'}>{subTitle}</Text>
        </div>
    )
}

export const NftOverviewLocalized: React.FC = () => {
    const {nft} = useContext(DictionaryContext);

    return <HeaderOverviewVisual title={nft.dashboard.page_title} subTitle={nft.dashboard.page_description}/>
}

interface HeaderOverviewWrapperProps {
}

export const HeaderOverviewWrapper: React.FC<HeaderOverviewWrapperProps> = (props) => {
    return <NftOverviewLocalized/>
}

export default HeaderOverviewVisual
