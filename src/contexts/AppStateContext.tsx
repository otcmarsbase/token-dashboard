import React, {ReactNode, useEffect, useState} from "react"
import {createApi} from "../api"
import {SCREEN_DATA, HANDLERS} from "../data"
import {ethers, Signer} from "ethers";

export const AppStateContext = React.createContext({
    data: SCREEN_DATA,
    handlers: HANDLERS
})

export const AppStateProvider: React.FC<{ children: ReactNode }> = props => {
    let state = React.useMemo(() => ({
        data: SCREEN_DATA,
        handlers: HANDLERS,
    }), [])

    const [provider, setProvider] = useState<Signer | ethers.providers.Provider>();
    const getProvider = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signerProvider = await provider.send("eth_requestAccounts", []);
        if (!signerProvider) {
            return provider;
        }
        return provider.getSigner();
    }

    useEffect(() => {
        getProvider().then(provider => setProvider(provider));
    }, [])

    let api = React.useMemo(() => {
        return createApi(
            "0xCcb684ACA4068D75692f3414328A65A65BBc2A09",
            "0xcFE1A80bc0de6723c955fB496520cEF3f52072C0",
            provider!)
    }, [provider])

    state.handlers.onClaim = api.requestClaimOneSignature
    // state.handlers.onClaimAll = api.requestClaimAllSignature

    return (
        <AppStateContext.Provider value={state}>
            {props.children}
        </AppStateContext.Provider>
    )
}
