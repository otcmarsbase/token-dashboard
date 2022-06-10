import React from "react"

import {FC, ReactNode, useContext} from "react"
import {style} from "typestyle"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {Text} from "../atoms/Text"

import Button from "../Button"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {SummaryTotalUnclaimedLocalizedProps, SummaryTotalUnclaimedProps} from "../stateful/types";

export const SummaryTotalUnclaimed: FC<SummaryTotalUnclaimedProps> = (
    {
        title,
        unclaimedAmount,
        buttonText,
        token,
        onClaimAll
    }) => {
    const isMobile = useMediaQuery(Queries.mobile)
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div className={container(isMobile)}>
            <div className={content(isMobile)}>
                <Text colors={'gray'} size={'_14'}>{title}</Text>
                <Text colors={"red"}><span style={{fontWeight: 600}}>{`${unclaimedAmount} ${token}`}</span></Text>
            </div>
            <Button auto={isMobile} size="lg" onClick={onClaimAll}><b>{buttonText}</b></Button>
        </div>
    )
}

export const SummaryTotalUnclaimedLocalized: FC<SummaryTotalUnclaimedLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext)
    return <SummaryTotalUnclaimed {...props} buttonText={nft.dashboard.claim_all.claim_all_btn}
                                  title={nft.dashboard.claim_all.total_unclaimed}/>
}

const container = (isMobile: boolean) => style({
    display: "flex",
    gap: "5px",
    width: isMobile ? '100%' : 'unset',
    marginBottom: isMobile ? '32px' : 'unset'
})

const content = (isMobile: boolean) => style({
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    width: isMobile ? '270px' : 'unset',
    marginRight: '20px',
})
