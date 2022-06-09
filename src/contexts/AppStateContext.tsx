import { BigNumber } from "ethers"
import { useMetaMask } from "metamask-react"
import React, { ReactNode, useContext, useEffect, useState } from "react"
import { NftData } from "../api"
import { SCREEN_DATA, HANDLERS, IScreenData } from "../data"
import { JrpcProviderPrivnet, useCurrentUser } from "../hooks/jrpc-provider"
import { MarsbaseVestingContext, useMarsbaseContracts } from "../hooks/mbase-contract"

export type AppStateContext = {
    data: IScreenData,
    handlers: {
        onClaim: (nftId: string) => void;
        onActions: (nftId: string) => void;
        onClaimAll: () => void;
        onSellWithPremium: () => void;
        onBuyNow: () => void;
    },
    nftsData: NftData[]
}

export const AppStateContext = React.createContext<AppStateContext>({
    data: SCREEN_DATA,
    handlers: HANDLERS,
    nftsData: []
})

export const AppStateProvider: React.FC<{ children: ReactNode }> = props => {
	
	let user = useCurrentUser()
    let contracts = useMarsbaseContracts()

    let state = React.useMemo(() => ({
		data: SCREEN_DATA,
		handlers: {
			...HANDLERS,
			onClaim: async (nftId: string) => {
				const tx = await contracts.vesting.populateTransaction["unvest(uint256)"](nftId)
				user?.signAndSendTx(tx)
			}
		},
		nftsData: []
	}), [user, contracts])

    // state.handlers.onClaimAll = api.requestClaimAllSignature

    return (
        <AppStateContext.Provider value={state}>
            {props.children}
        </AppStateContext.Provider>
    )
}
