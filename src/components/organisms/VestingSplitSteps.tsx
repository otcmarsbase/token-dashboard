import React, {FC, useContext} from 'react';
import VestingStepCard from "../molecules/VestingStepCard";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import Container from "../Container";
import {DictionaryContext} from "../../contexts/DictionaryContext";
import {VestingSplitStepsLocalizedProps, VestingSplitStepsProps} from "./types";

const VestingSplitSteps: FC<VestingSplitStepsProps> = ({steps}) => {
    const isMobile = useMediaQuery(Queries.mobile);

    const formattedSteps = () => {
        return steps.map((step, idx) => ({active: idx === 1, ...step}));
    };

    const getActiveStep = () => formattedSteps().filter(s => s.active);

    return (
        <Container gapRow={'_30'} mb={'_30'}>
            {(isMobile ? getActiveStep() : steps).map((step, index) => (
                <VestingStepCard
                    key={index}
                    index={index + 1}
                    {...step}
                />
            ))}
        </Container>
    );
};

export const VestingSplitStepsLocalized: FC<VestingSplitStepsLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext);

    return <VestingSplitSteps
        steps={nft.vestingSplit.steps}
        {...props}
    />
}