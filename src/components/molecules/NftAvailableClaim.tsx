import React from "react"

import {FC, useContext} from "react"
import {Text} from '../atoms/Text'
import {Button} from '../atoms/Button'
import {DictionaryContext} from "../../contexts/DictionaryContext"
import {NftAvailableClaimLocalizedProps, NftAvailableClaimProps} from "./types";
import Container from "../Container";

export const NftAvailableClaim: FC<NftAvailableClaimProps> = (
    {
        available,
        availableUsd,
        btnActionsText,
        btnClaimText,
        token,
        onClaim,
        onActions
    }) => {
    return (
        <Container gap={'_10'} direction={'horizontal'}>
            <Container align={'end'}>
                <Text colors={"red"} size={'_14'}><b>{`${available} ${token}`}</b></Text>
                <Text colors={'gray'} size={'_12'}>~{availableUsd}$</Text>
            </Container>
            <Container gap={'_10'} direction={'horizontal'}>
                <Button size={'md'} onClick={onClaim}>
                    <span style={{fontWeight: 600}}>{btnClaimText}</span>
                </Button>
                <Button size={'md'} colors={'defaultStroke'} onClick={onActions}>
                    <span style={{fontWeight: 600}}>{btnActionsText}</span>
                </Button>
            </Container>
        </Container>
    )
}

export const NftAvailableClaimLocalized: FC<NftAvailableClaimLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext)

    return (
        <NftAvailableClaim
            {...props}
            btnClaimText={nft.dashboard.nft_table.nft_card.claim_btn}
            btnActionsText={nft.dashboard.nft_table.nft_card.actions_btn}
        />
    )
}
