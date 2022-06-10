import React, {FC} from 'react';
import {Button} from "../atoms/Button";
import {NftCardMobileProps} from "./types";

const NftCardMobileActions: FC<Pick<NftCardMobileProps, 'id' | 'onClaim' | 'onActions'>> = (
    {
        onActions,
        onClaim,
        id
    }) => {
    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <Button onClick={() => onClaim(id)} auto size={'sm'}>
                <span style={{fontWeight: 600}}>Claim</span>
            </Button>
            <Button onClick={() => onActions(id)} auto size={'sm'} colors={'defaultStroke'}>
                <span style={{fontWeight: 600}}>Actions</span>
            </Button>
        </div>
    );
};

export default NftCardMobileActions;