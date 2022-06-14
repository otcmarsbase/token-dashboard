import React, {FC} from 'react';

import {NftCardProps} from "./types";
import {NftCardOverviewLocalized} from "./NftCardOverview";
import Container from "../Container";
import NftCardActions from "./NftCardActions";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {NftCardMobileProgressBar} from "./NftMobileProgressBar";

const NftCard: FC<NftCardProps> = (props) => {
        const isMobile = useMediaQuery(Queries.mobile);
        const isTablet = useMediaQuery(Queries.tablet);

        const isNotDesktop = (isMobile || isTablet);

        return (
            <Container
                direction={isNotDesktop ? undefined : 'horizontal'}
                padding={'_15'}
                gap={'_15'}
                backgroud={isNotDesktop ? 'mobileCard' : undefined}
                borderRadius={'_8'}
            >
                <NftCardOverviewLocalized
                    kind={props.kind}
                    price={props.price}
                    started={props.started}
                    amount={props.amount}
                    amountUsd={props.amountUsd}
                />
                <NftCardMobileProgressBar
                    token={props.token}
                    timeLeft={props.timeLeft}
                    timePassed={props.timePassed}
                    percentComplete={props.percentComplete}
                    locked={props.locked}
                />
                <NftCardActions
                    onClaim={props.onClaim}
                    onActions={props.onActions}
                    id={props.id}
                    unclaimed={props.unclaimed}
                    availableUsd={props.availableUsd}
                    token={props.token}
                />
            </Container>
        );
    }
;

export default NftCard;