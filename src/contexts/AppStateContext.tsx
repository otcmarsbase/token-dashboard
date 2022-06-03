import { useMetaMask } from "metamask-react"
import React, { ReactNode, useContext, useEffect, useState } from "react"
import { SCREEN_DATA, HANDLERS } from "../data"
import { useEthersAccount, WalletContext } from "../hooks/jrpc-provider"
import { useMarsbaseContracts } from "../hooks/mbase-contract"

export const AppStateContext = React.createContext({
    data: SCREEN_DATA,
    handlers: HANDLERS
})

export const AppStateProvider: React.FC<{ children: ReactNode }> = props => {
    let state = React.useMemo(() => ({
        data: SCREEN_DATA,
        handlers: HANDLERS,
    }), [])

    const provider = useContext(WalletContext)?.value

    let contracts = useMarsbaseContracts()

    useEffect(() => {

        const signer = provider?.getSigner() 

        state.handlers.onClaim = async nftId => {
            const tx = await contracts.vesting.populateTransaction["unvest(uint256)"](nftId)

            signer?.sendTransaction(tx)
                .catch((err) => alert('tx denied'))

        }
    }, [])
    /* let acc = account

    let account = useEthersAccount()
    state.handlers.onClaim = async nftId =>
    {
        let tx = await contracts.vesting.populateTransaction["unvest(uint256)"](nftId)
        acc.signAndSendTx(tx)
    } */

    // state.handlers.onClaimAll = api.requestClaimAllSignature

    return (
        <AppStateContext.Provider value={state}>
            {/* {status == 'connected' ? props.children : render} */}
            {props.children}
        </AppStateContext.Provider>
    )
}
