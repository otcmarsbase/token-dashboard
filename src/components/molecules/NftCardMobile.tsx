import React, {FC} from 'react';

import {NftCardMobileProps} from "./types";
import {NftCardMobileOverviewLocalized} from "./NftCardMobileOverview";
import Container from "../Container";
import {NftCardMobileProgress} from "./NftCardMobileProgress";
import NftCardMobileActions from "./NftCardMobileActions";

const NftCardMobile: FC<NftCardMobileProps> = (props) => {
        return (
            <Container>
                <Container padding={'_15'}>
                    <NftCardMobileOverviewLocalized kind={props.kind} price={props.price} started={props.started}/>
                    <NftCardMobileProgress {...props}/>
                    <NftCardMobileActions onClaim={props.onClaim} onActions={props.onActions} id={props.id}/>
                </Container>
            </Container>
        );
    }
;

export default NftCardMobile;