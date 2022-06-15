import { BigNumber, BigNumberish, ethers, utils } from "ethers"
import { MarsbaseVesting__factory, MarsbaseVesting, MarsbaseToken } from "@otcmarsbase/token-contract-types"
import { TOKEN_THRESHOLD } from "./config"
import { TagLabelColors } from "./components/atoms/Label"
import { INftDynamic, INftStatic, INft } from "./components/organisms/types"

export type NftData = Awaited<ReturnType<typeof getVestingNftInfo>>

export function createApi(mbaseAddress: string, vestingAddress: string, provider: ethers.Signer | ethers.providers.Provider) {
    let vest = MarsbaseVesting__factory.connect(vestingAddress, provider)
    return {
        getNftList: (address: string) => getNftList(address, vest),
        requestClaimOneSignature: (nftId: string) => requestClaimOneSignature(nftId, vest),
        requestClaimAllSignature: (nfts: INft[]) => requestClaimAllSignature(nfts, vest)
    }
}

export async function getVestingNftInfo(id: BigNumberish, vest: MarsbaseVesting)
{
	let nft = await vest.getVestingRecord(id)
	return {
		id: id.toString(),
		...nft,
	}
}

export async function getNftList(address: string, vest: MarsbaseVesting) {
    const vestingsIds = await vest.getVestingsByOwner(address)
    const records = await Promise.all(vestingsIds.map(id => getVestingNftInfo(id, vest)))
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

    const _decimals = BigNumber.from(10).pow(decimals).toString()
	const amountInTokens = amount.div(_decimals).toNumber()

    for (let i = 0; i < TOKEN_THRESHOLD.length; i++) {
        const tresh = TOKEN_THRESHOLD[i].threshold
        if (tresh != undefined)
            if (amountInTokens < tresh)
                return TOKEN_THRESHOLD[i].color
    }

    return TOKEN_THRESHOLD[TOKEN_THRESHOLD.length - 1].color
}

export async function requestClaimAllSignature(nfts: INft[], vest: MarsbaseVesting): Promise<boolean> {
    const tx = await vest["unvest(uint256[])"](nfts.map(x => x.id))

    await tx.wait()

    return true
}

function lerp(timePassed: number, amount: BigNumber, duration: BigNumber) {
    if (BigNumber.from(Math.ceil(timePassed)).gt(duration)) /* TODO: убрать округление */
        return amount
    if (timePassed <= 0)
        return BigNumber.from('0')
    return ((amount.mul(BigNumber.from(Math.ceil(timePassed)))).div(duration)) /* и тут */
}

export function convertBcNftToUi(nft: NftData, decimals: number, symbol: string): INftStatic
{
	return {
		id: nft.id,
		kind: calculateKind(nft.amount, decimals),
		amount: utils.formatUnits(nft.initialAmount, decimals),
		token: symbol,

		start: new Date(nft.start.toNumber() * 1000).toString(), /* время с последнего клейма */
		initialStart: new Date(nft.initialStart.toNumber() * 1000).toString(),
		
		started: new Date(nft.initialStart.toNumber() * 1000).toString(), /* то же, что и initialStart */
		end: nft.end.toString(),
		
		amountUsd: '0',
		price: '0',
	}
}

export function nftDataToView(nfts: NftData[], decimals: number, symbol: string, now: number): INft[] {

	return nfts
		.map(nft => convertBcNftToUi(nft, decimals, symbol))
		.map(nft => ({
			...nft,
			...calculateDynamicNft(nft, decimals, now)
		}))
}

export const calculateDynamicNft = (nft: INftStatic, decimals: number, now: number): INftDynamic => { /* динамическое обновление данных (пока что только unclaimed) */
    const secondsInDay = 86400

	const started = Date.parse(nft.started) / 1000
	const sinceClaim = Date.parse(nft.start) / 1000
	const timePassed = Math.floor(now / 1000 - started)
	const duration = parseInt(nft.end) - sinceClaim
	const amount = utils.parseUnits(nft.amount, decimals)
	const totalTime = (BigNumber.from(nft.end).sub(BigNumber.from(started))).toNumber()

	const percentComplete_temp = (timePassed * 100) / totalTime
	const percentComplete = percentComplete_temp < 100 ? percentComplete_temp : 100

	const unclaimed = lerp(timePassed, amount, BigNumber.from(duration))

	const daysPassed = (percentComplete * 0.01 * totalTime) / secondsInDay
	const daysLeft = ((1 - percentComplete * 0.01) * totalTime) / secondsInDay

	return {
		unclaimed: utils.formatUnits(unclaimed, decimals),
		percentComplete: percentComplete,
		locked: utils.formatUnits(amount.sub(unclaimed), decimals),
		timePassed: `${daysPassed} days`,
		timeLeft: `${daysLeft} days`,
		available: utils.formatUnits(unclaimed, decimals),
		availableUsd: '0',
	}
}