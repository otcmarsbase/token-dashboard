import React, {FC, ReactNode, useContext} from 'react';
import {Text} from "../atoms/Text";
import {style} from "typestyle";
import {SplitDetailsSectionLocalizedProps, SplitDetailsSectionProps} from "./types";
import {DictionaryContext} from "../../contexts/DictionaryContext";

const SplitDetailsSection: FC<SplitDetailsSectionProps> = (
    {
        amount,
        usd,
        token,
        percent,
        partIndex,
        totalFee,
        totalParts,
        totalPartsLabel,
        totalFeeLabel,
        partsLabel
    }) => {

    return (
        <div className={container}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                {totalFee && <Text size={'_14'}>{totalPartsLabel}</Text>}
                {partIndex && <Text size={'_14'}>{partsLabel} ${partIndex}</Text>}
                {totalParts && <Text size={'_14'}>{totalFeeLabel}</Text>}
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                {totalParts}
                {!totalParts && (
                    <>
                        <Text weight={'semiBold'}>{amount} {token} ({percent}%)</Text>
                        {usd && (
                            <Text size={'_12'} colors={'gray'}>~{usd} $</Text>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export const SplitDetailsSectionLocalized: FC<SplitDetailsSectionLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext);

    return <SplitDetailsSection
        totalPartsLabel={nft.vestingSplit.splitDetails.totalPartsLabel}
        totalFeeLabel={nft.vestingSplit.splitDetails.totalFeeLabel}
        partsLabel={nft.vestingSplit.splitDetails.partsLabel}
        {...props}
    />
}

const container = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px',
    borderBottom: '1px solid rgba(42, 42, 44, 1)',
    marginBottom: '10px'
})