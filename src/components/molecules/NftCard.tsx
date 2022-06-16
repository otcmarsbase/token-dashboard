import React, {FC} from 'react';

import {NftCardProps} from "./types";
import {NftCardOverviewLocalized} from "./NftCardOverview";
import Container from "../Container";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {NftCardActionsLocalized} from "./NftCardActions";
import {NftCardProgressLocalized} from "./NftCardProgress";

const NftCard: FC<NftCardProps> = (props) => {
        const isMobile = useMediaQuery(Queries.mobile);
        const isTablet = useMediaQuery(Queries.tablet);

        const isDesktop = (!isMobile && !isTablet);

        return (
            <Container
                gap={'_10'}
                padding={'_15'}
                backgroud={"dark1"}
                borderRadius={'_8'}
                direction={isDesktop ? 'horizontal' : undefined}
                gapRow={isDesktop ? '_10' : undefined}
                borderTop={isDesktop ? undefined : props.kind}
            >
                <NftCardOverviewLocalized
                    kind={props.kind}
                    price={props.price}
                    started={props.started}
                    amount={props.amount}
                    amountUsd={props.amountUsd}
                />
                <NftCardProgressLocalized
                    token={props.token}
                    timeLeft={props.timeLeft}
                    timePassed={props.timePassed}
                    percentComplete={props.percentComplete}
                    locked={props.locked}
                />
                <NftCardActionsLocalized
                    amount={props.amount}
                    onClaim={props.onClaim}
                    onActions={props.onActions}
                    id={props.id}
                    unclaimed={props.unclaimed}
                    availableUsd={props.availableUsd}
                    token={props.token}
                    kind={props.kind}
                />
            </Container>
        );
    }
;

export default NftCard;