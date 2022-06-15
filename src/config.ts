
const chainIdToHex = (chainId: number) => `0x${chainId.toString(16)}`

const mbaseTokenAddress = '0x765Eb9A1518C2906D11D330a11dBA294a7673E84'

const mbaseVestingAddress = '0xd37A38DC1BE88c33033821025A7CC5664d2b7328'

export const NETWORKS = ([
	{
		name: "Marsbase",
		chainId: 1337,
		rpcUrl: "https://happy-heron-57.deno.dev",
		mbaseTokenAddress: mbaseTokenAddress,
		mbaseVestingAddress: mbaseVestingAddress,
		blockExplorerUrl: "https://134.122.65.135/",
	},
	{
		name: "Rinkeby",
		chainId: 4,
		rpcUrl: "https://rinkeby.infura.io/v3/d9d8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8",
		mbaseTokenAddress: mbaseTokenAddress,
		mbaseVestingAddress: mbaseVestingAddress,
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

export const NFTS_PER_TRANSACTION = 5