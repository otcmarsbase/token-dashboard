import { BigNumber } from "ethers"
import { TagLabelColors } from "./components/atoms"

export const PRIVNET = {
	rpcUrl: "https://happy-heron-57.deno.dev",
	mbaseTokenAddress: "0x605cc9e1C86A8dC0cFe7303D06f2889a4491906C",
	mbaseVestingAddress: "0x728f79949a66c9950C39A8FD0BF9d353655d689C",
}

export type TOKEN_THRESHOLD_TYPE = {color: TagLabelColors, threshold: BigNumber}[]

export const TOKEN_THRESHOLD : TOKEN_THRESHOLD_TYPE = [
	{ color: "green", threshold: BigNumber.from(1_000_000) },
	{ color: "yellow", threshold: BigNumber.from(10_000_000) },
	{ color: "cyan", threshold: BigNumber.from(100_000_000) },
	{ color: "purple", threshold: BigNumber.from(Number.MAX_SAFE_INTEGER - 1) }, /* так можно? */
]