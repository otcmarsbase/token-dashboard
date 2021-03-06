import React, {FC} from 'react';
import {Button} from "../atoms/Button";
import {NftCardActionsProps} from "./types";
import {Text} from "../atoms/Text";
import Container from "../Container";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

const NftCardActions: FC<NftCardActionsProps> = (
    {
        onActions,
        onClaim,
        id,
        unclaimed,
        availableUsd,
        token
    }) => {

    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);
    const isOther = (!isMobile && !isTablet);

    return (
        <Container direction={isOther ? 'horizontal' : undefined}>
            <Container direction={'horizontal'} justify={'between'}>
                {!isOther && (
                    <Text colors={'gray'} size={'_12'}>
                        <b>Available for claim</b>
                    </Text>
                )}
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                    <Text colors={'red'}>{unclaimed} {token}</Text>
                    <Text colors={'gray'} size={'_11'}>~{availableUsd}$</Text>
                </div>
            </Container>
            <Container direction={'horizontal'} gap={'_10'}>
                <Button onClick={() => onClaim(id)} auto size={'sm'}>
                    <span style={{fontWeight: 600}}>Claim</span>
                </Button>
                <Button onClick={() => onActions(id)} auto size={'sm'} colors={'defaultStroke'}>
                    <span style={{fontWeight: 600}}>Actions</span>
                </Button>
            </Container>
        </Container>
    );
};

export default NftCardActions;