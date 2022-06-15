import { BigNumber, utils } from "ethers";
import React, {FC, ReactNode, useContext} from "react";
import { NFTS_PER_TRANSACTION } from "../../config";
import {AppStateContext} from "../../contexts/AppStateContext";
import { NftsContext } from "../../contexts/NftsContext";
import { TxSasResult, useCurrentUser } from "../../hooks/jrpc-provider";
import { useMarsbaseContracts } from "../../hooks/mbase-contract";
import {NftTableSummary} from "../organisms/NftTableSummary";

export const NftTableSummaryWrapper = () => {
    const {data, handlers} = useContext(AppStateContext);
    const {nftsG} = useContext(NftsContext)
    let user = useCurrentUser()
    let contracts = useMarsbaseContracts()

    return (
        <NftTableSummary
            distributionAmount={data.distributionAmount}
            token={data.token}
            unclaimedTotal={data.unclaimedTotal}
            onClaimAll={async () => {
                let nftsToClaim = nftsG.sort((a, b) => {
                    const bigA = BigNumber.from(utils.parseUnits(a.unclaimed, 18))
                    const bigB = BigNumber.from(utils.parseUnits(b.unclaimed, 18))
                    if (bigA.eq(bigB)) 
                        return 0
                    if (bigA.lt(bigB))
                        return 1
                    return -1
                })

                if (nftsToClaim.length > NFTS_PER_TRANSACTION) 
                    nftsToClaim = nftsToClaim.slice(NFTS_PER_TRANSACTION - 1)

                const nftIds = nftsToClaim.map(nft => nft.id)

                console.log(nftIds)

                const tx = await contracts.vesting.populateTransaction["unvest(uint256[])"](nftIds)
                let signedTx: TxSasResult | undefined = await user?.signAndSendTx(tx)
                console.log(signedTx)
            }}
        />
    )
}