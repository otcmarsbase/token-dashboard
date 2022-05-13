import { BigNumber, BigNumberish, ethers } from "ethers"
import { INft } from "./components/organisms/NftTable"
import { MarsbaseVesting__factory, MarsbaseVesting } from "@otcmarsbase/token-contract-types"

type NftData = Awaited<ReturnType<MarsbaseVesting["getVestingRecord"]>>


export function createApi(mbaseAddress: string, vestingAddress: string, provider: ethers.Signer | ethers.providers.Provider)
{
	let vest = MarsbaseVesting__factory.connect(vestingAddress, provider)
	return {
		getNftList: (address: string) => getNftList(address, vest),
		requestClaimOneSignature: (nftId: string) => requestClaimOneSignature(nftId, vest),
		requestClaimAllSignature: (nfts: INft[]) => requestClaimAllSignature(nfts, vest)
	}
}

export async function requestMetamaskConnect(): Promise<string | undefined>
{
	if (!window.ethereum)
	{
		console.log('MetaMask is not installed!')
		return
	}

	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

	return accounts[0]
}
export async function getNftList(address: string, vest: MarsbaseVesting)
{
	const vestingsIds = await vest.getVestingsByOwner(address)
	const records = await Promise.all(vestingsIds.map((x: BigNumberish) => vest.getVestingRecord(x)))
	return records
}
export function calculateClaimableTokens(nft: NftData): BigNumber
{
	let start = nft.start.toNumber()
	let end = nft.end.toNumber()
	let now = Date.now() / 1000
	let vestingDuration = end - start
	let elapsed = Math.min(now - start, vestingDuration)
	let percent = elapsed / vestingDuration
	let claimable = nft.amount.mul(percent)
	return claimable
}
export async function requestClaimOneSignature(nftId: string, vest: MarsbaseVesting): Promise<boolean>
{
	const tx = await vest["unvest(uint256)"](nftId)

	await tx.wait()

	return true
}
export async function requestClaimAllSignature(nfts: INft[], vest: MarsbaseVesting): Promise<boolean>
{
	const tx = await vest["unvest(uint256[])"](nfts.map(x => x.id))

	await tx.wait()

	return true
}
