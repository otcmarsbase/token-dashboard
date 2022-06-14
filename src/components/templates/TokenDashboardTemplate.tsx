import React, {FC, ReactNode} from "react"
import {style} from "typestyle"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {HowIsLocalized} from "../molecules/HowIsDistributionDone";
import Container from "../Container";

export const TokenDashboardTemplate: FC<{ children: ReactNode }> = ({children}) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <div className={main(isMobile, isTablet)}>
            <Container padding={isMobile ? '_15' : undefined}>
                {children}
            </Container>
            {(isMobile || !isTablet) && (
                <HowIsLocalized/>
            )}
        </div>
    )
}

const main = (isMobile: boolean, isTablet: boolean) => style({
    display: "flex",
    flexDirection: isMobile ? 'column' : "row",
    maxWidth: '1433px',
    margin: '0 auto',
})
