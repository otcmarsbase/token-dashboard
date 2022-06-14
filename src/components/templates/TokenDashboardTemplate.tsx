import React, {FC, ReactNode} from "react"
import {style} from "typestyle"
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {HowIsLocalized} from "../molecules/HowIsDistributionDone";
import Container from "../Container";

export const TokenDashboardTemplate: FC<{ children: ReactNode }> = ({children}) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet)

    return (
        <main className={main(isMobile, isTablet)}>
            <Container padding={isMobile ? '_15' : undefined}>
                {children}
            </Container>
            {(isMobile || !isTablet) && (
                <HowIsLocalized/>
            )}
        </main>
    )
}

const main = (isMobile: boolean, isTablet: boolean) => style({
    display: "flex",
    flexDirection: isMobile ? 'column' : "row",
    gap: "20px",
    maxWidth: '1433px',
    backgroundColor: (!isMobile && isTablet) ? 'rgba(27, 27, 28, 0.4)' : 'unset',
    margin: '10px auto',
    borderRadius: '12px',
    // width: '100%'
})
