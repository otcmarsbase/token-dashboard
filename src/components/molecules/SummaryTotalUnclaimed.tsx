import React from "react"

import {FC, ReactNode, useContext} from "react"
import {style} from "typestyle"
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {Text} from "../atoms"

import Button from "../Button"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

interface SummaryTotalUnclaimedProps {
    title: ReactNode
    unclaimedAmount: ReactNode
    buttonText: ReactNode
    token: ReactNode
    onClaimAll: () => void;
}

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

type SummaryTotalUnclaimedLocalizedProps = Pick<SummaryTotalUnclaimedProps, "unclaimedAmount" | "token" | 'onClaimAll'>

export const SummaryTotalUnclaimedLocalized: FC<SummaryTotalUnclaimedLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext)
    return <SummaryTotalUnclaimed {...props} buttonText={nft.dashboard.claim_all.claim_all_btn}
                                  title={nft.dashboard.claim_all.total_unclaimed}/>
}

interface SummaryTotalUnclaimedWrapperProps {
    unclaimedAmount: number
    token: string;
    onClaimAll: () => void;
}

export const SummaryTotalUnclaimedWrapper: FC<SummaryTotalUnclaimedWrapperProps> = ({
                                                                                        unclaimedAmount,
                                                                                        token,
                                                                                        onClaimAll
                                                                                    }) => {
    return <SummaryTotalUnclaimedLocalized unclaimedAmount={unclaimedAmount} token={token} onClaimAll={onClaimAll}/>
}
