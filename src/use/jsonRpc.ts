import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useMetaMask } from "metamask-react"

import { MarsbaseVesting__factory } from "@otcmarsbase/token-contract-types"

export const useJsonRpc = () => {
	const { account, chainId } = useMetaMask()
	// const provider = new ethers.providers.JsonRpcProvider("http://142.93.160.132:8110")
	const provider = new ethers.providers.JsonRpcProvider("https://happy-heron-57.deno.dev")
	// const provider = new ethers.providers.JsonRpcProvider("https://eth-privnet.otcmarsbase.io:8110")
	// const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/6d6c70e65c77429482df5b64a4d0c943")
	// const provider = new ethers.providers.JsonRpcProvider("https://red-snowflake-523c.zlumer.workers.dev")

	const [blockNumber, setBlockNumber] = useState(0)
	const [status, setStatus] = useState("started connecting")

	const getBlockNumber = async () => {
		setStatus("waiting for provider.ready")
		await provider.ready
		setStatus("provider is ready, getting block number")
		const blockNumber = await provider.getBlockNumber()
		setStatus(`got block number: ${blockNumber}`)
		setBlockNumber(blockNumber)
		const mbase = MarsbaseVesting__factory.connect("0xcFE1A80bc0de6723c955fB496520cEF3f52072C0", provider)
		let testUser = `0x60c56553495612d4b93b6BC1deffE937223eaF51`
		setStatus(`getting vestings for ${testUser}`)
		const vestings = await mbase.getVestingsByOwner(testUser)
		setStatus(`got vestings: ${vestings}`)
	}

	const handleGetVestingsByOwner = async () => {
		if (!account) return

		const mbase = MarsbaseVesting__factory.connect("0xcFE1A80bc0de6723c955fB496520cEF3f52072C0", provider)

		try {
			const vestings = await mbase.getVestingsByOwner(account)
			console.log(vestings)
		} catch (error) {
			console.log(error)
		}
	}

	const signTypedDataV4 = async () => {
		if (!account) return
		if (!window.ethereum) return

		const provider = new ethers.providers.Web3Provider(window.ethereum)
		const signer = provider.getSigner()
		try {
			const signature = await signer.signMessage("test test test")
			const address = await signer.getAddress()
			console.log({ signature, address })
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getBlockNumber()
		// handleGetVestingsByOwner()
		// signTypedDataV4()
	}, [])

	return {
		blockNumber,
		status
	}
}
