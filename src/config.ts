import { TagLabelColors } from "./components/atoms"

export const PRIVNET = {
	rpcUrl: "https://happy-heron-57.deno.dev",
	mbaseTokenAddress: "0x605cc9e1C86A8dC0cFe7303D06f2889a4491906C",
	mbaseVestingAddress: "0x728f79949a66c9950C39A8FD0BF9d353655d689C",
}

export type TOKEN_THRESHOLD_TYPE = {color: TagLabelColors, threshold: number}[]

export const TOKEN_THRESHOLD : TOKEN_THRESHOLD_TYPE = [
	{ color: "red", threshold: 1_000_000 },
	{ color: "yellow", threshold: 10_000_000 },
	{ color: "cyan", threshold: 100_000_000 },
	{ color: "silver", threshold: Infinity },
]