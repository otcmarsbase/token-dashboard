
const chainIdToHex = (chainId: number) => `0x${chainId.toString(16)}`

export const NETWORKS = ([
	{
		name: "Marsbase",
		chainId: 1337,
		rpcUrl: "https://happy-heron-57.deno.dev",
		mbaseTokenAddress: "0x605cc9e1C86A8dC0cFe7303D06f2889a4491906C",
		mbaseVestingAddress: "0x728f79949a66c9950C39A8FD0BF9d353655d689C",
		blockExplorerUrl: "https://134.122.65.135/",
	},
	{
		name: "Rinkeby",
		chainId: 4,
		rpcUrl: "https://rinkeby.infura.io/v3/d9d8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8",
		mbaseTokenAddress: "0x605cc9e1C86A8dC0cFe7303D06f2889a4491906C",
		mbaseVestingAddress: "0x728f79949a66c9950C39A8FD0BF9d353655d689C",
		blockExplorerUrl: "https://rinkeby.etherscan.io/",
	}
] as const).map(x => ({ ...x, chainIdStr: chainIdToHex(x.chainId) }))

export const DEFAULT_NETWORK = NETWORKS[0]

export type EvmNetwork = typeof NETWORKS[number]

export function getNetworkByChainId(chainId: string | number)
{
	if (typeof chainId == "string")
		chainId = parseInt(chainId)
	
	return NETWORKS.find(n => n.chainId === chainId)
}

export const TOKEN_THRESHOLD = [
	{ color: "red", threshold: 1_000_000 },
	{ color: "yellow", threshold: 10_000_000 },
	{ color: "cyan", threshold: 100_000_000 },
	{ color: "silver", threshold: undefined }, 
] as const
