import { BigNumber, BigNumberish, Contract, ethers, FixedNumber, utils } from "ethers"
import { INft } from "./components/organisms/NftTable"
import { MarsbaseVesting__factory, MarsbaseVesting, MarsbaseToken } from "@otcmarsbase/token-contract-types"
import { useContext } from "react"
import { MarsbaseTokenContext } from "./hooks/mbase-contract"
import { TOKEN_THRESHOLD } from "./config"
import { TagLabelColors } from "./components/atoms"

export type NftData = Awaited<ReturnType<MarsbaseVesting["getVestingRecord"]>>

export function createApi(mbaseAddress: string, vestingAddress: string, provider: ethers.Signer | ethers.providers.Provider) {
    let vest = MarsbaseVesting__factory.connect(vestingAddress, provider)
    return {
        getNftList: (address: string) => getNftList(address, vest),
        requestClaimOneSignature: (nftId: string) => requestClaimOneSignature(nftId, vest),
        requestClaimAllSignature: (nfts: INft[]) => requestClaimAllSignature(nfts, vest)
    }
}

export async function requestMetamaskConnect(): Promise<string | undefined> {
    if (!window.ethereum) {
        console.log('MetaMask is not installed!')
        return
    }

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

    return accounts[0]
}

export async function getNftList(address: string, vest: MarsbaseVesting) {
    const vestingsIds = await vest.getVestingsByOwner(address)
    const records = await Promise.all(vestingsIds.map((x: BigNumberish) => vest.getVestingRecord(x)))
    return records
}

export function calculateClaimableTokens(nft: NftData): BigNumber {
    let start = nft.start.toNumber()
    let end = nft.end.toNumber()
    let now = Date.now() / 1000
    let vestingDuration = end - start
    let elapsed = Math.min(now - start, vestingDuration)
    let percent = elapsed / vestingDuration
    let claimable = nft.amount.mul(percent)
    return claimable
}

export async function requestClaimOneSignature(nftId: string, vest: MarsbaseVesting): Promise<boolean> {

    const tx = await vest["unvest(uint256)"](nftId)

    await tx.wait()

    return true
}

export function calculateKind(amount: BigNumber, decimals: number): TagLabelColors {

    const _decimals = BigNumber.from(Math.pow(10, decimals).toString())

    for (let i = 0; i < TOKEN_THRESHOLD.length; i++) {
        const tresh = TOKEN_THRESHOLD[i].threshold
        if (tresh != undefined)
            if (amount.lte(tresh.mul(_decimals)))
                return TOKEN_THRESHOLD[i].color
    }

    return TOKEN_THRESHOLD[TOKEN_THRESHOLD.length - 1].color
}

export async function requestClaimAllSignature(nfts: INft[], vest: MarsbaseVesting): Promise<boolean> {
    const tx = await vest["unvest(uint256[])"](nfts.map(x => x.id))

    await tx.wait()

    return true
}

export async function nftDataToView(nfts: NftData[], token: MarsbaseToken, decimals: number): Promise<INft[]> {

    function lerp(timePassed: number, amount: BigNumber, duration: BigNumber) {
        if (BigNumber.from(Math.ceil(timePassed)).gt(duration)) /* TODO: убрать округление */
            return amount
        if (timePassed <= 0)
            return BigNumber.from('0')
        return ((amount.mul(BigNumber.from(Math.ceil(timePassed)))).div(duration)) /* и тут */
    }

    let result: INft[] = []
    const secondsInDay = 86400

    for (let i = 0; i < nfts.length; i++) {
        const duration = nfts[i].end.sub(nfts[i].start)
        const initialAmount = nfts[i].initialAmount

        const timePassed = Date.now() / 1000 - nfts[i].start.toNumber()

        const unclaimed = lerp(timePassed, initialAmount, duration)
        
        const totalTime = nfts[i].end.sub(nfts[i].initialStart).toNumber()

        const percentComplete_temp = ((Date.now() / 1000 - nfts[i].initialStart.toNumber()) * 100) / totalTime
        const percentComplete = percentComplete_temp < 100 ? percentComplete_temp : 100

        const daysPassed = (percentComplete * 0.01 * totalTime) / secondsInDay
        const daysLeft = ((1 - percentComplete * 0.01) * totalTime) / secondsInDay


        let nftView: INft = {
            id: i.toString(),
            kind: calculateKind(nfts[i].amount, decimals),
            amount: utils.formatUnits(nfts[i].initialAmount, decimals),
            locked: utils.formatUnits(nfts[i].amount.sub(unclaimed)),
            unclaimed: utils.formatUnits(unclaimed),
            token: await token.symbol(),
            started: new Date(nfts[i].initialStart.toNumber() * 1000).toString(),
            timePassed: `${daysPassed} days`,
            timeLeft: `${daysLeft} days`,
            percentComplete: percentComplete,
            unclaimedIncPerSec: FixedNumber.from(nfts[i].amount).divUnsafe(FixedNumber.from(totalTime)),

            amountUsd: '0',
            price: '0',
            available: '0',
            availableUsd: '0'
        }

        result.push(nftView)
    }
    return result
}