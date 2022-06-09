import React, {FC} from 'react';
import {Text} from "../atoms/Text";
import {style} from "typestyle";

interface SplitDetailsSectionProps {
    amount?: number;
    token?: string;
    usd?: number;
    percent?: number;
    partIndex?: number;
    totalFee?: boolean;
    totalParts?: number;
}

const SplitDetailsSection: FC<SplitDetailsSectionProps> = (
    {
        amount,
        usd,
        token,
        percent,
        partIndex,
        totalFee,
        totalParts
    }) => {
    return (
        <div className={container}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                {totalFee && <Text size={'_14'}>Total fee</Text>}
                {partIndex && <Text size={'_14'}>Part ${partIndex}</Text>}
                {totalParts && <Text size={'_14'}>Total parts</Text>}
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                {totalParts}
                {!totalParts && (
                    <>
                        <Text weight={'semiBold'}>{amount} {token} ({percent}%)</Text>
                        {usd && (
                            <Text size={'_12'} colors={'gray'}>~20,000,00 $</Text>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

const container = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px',
    borderBottom: '1px solid rgba(42, 42, 44, 1)',
    marginBottom: '10px'
})

export default SplitDetailsSection;