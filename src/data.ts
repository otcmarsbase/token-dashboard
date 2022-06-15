import { FixedNumber } from "ethers"
import {INft} from "./components/organisms/types";

export type LocalizedDictionary = typeof DICT[keyof typeof DICT]
export const DICT = {
	en: {
		nft: {
			dashboard: {
				page_title: "Vesting Token Dashboard",
				how_to_use: "How to use?",
				page_description: "The perfect place for making large volume deals with hundreds of altcoins \n" +
					"without slippage or market price impact",
				sell_with_premium_btn: (token: string) => `Sell ${token} with premium`,
				buy_now_btn: (token: string) => `Buy ${token} now`,
				summary: {
					header: "Distribution",
					desc: "Enter parameters of a part static bid"
				},
				claim_all: {
					total_unclaimed: "Total unclaimed",
					claim_all_btn: "Claim all"
				},
				nft_table: {
					headers: ["Lot of NFT", "Progress", "Available for claim"],
					nft_card: {
						price_label: "Price:",
						unvest_start_date_label: "Started",
						locked_caption: "Locked",
						claim_btn: "Claim",
						actions_btn: "Actions"
					}
				},
				pagination: {
					prev: "Prev",
					next: "Next"
				},
				distribution_video: {
					header: "How is distribution done?",
					description: "For the first time, a crypto OTC desk and even"
				},
				connect_your_wallet: {
					title: 'Connect your wallet',
					text: 'We will calculate the profit from the Marsbase deal and give recommendations on the parameters',
					btn_text: 'Connect wallet'
				},
				modals: {
					claim_rewards: {
						header_title: 'Claim rewards',
						header_sub_title: 'Additional text, preview subtitle',
						body_title: 'Vesting asset',
						input_label_up: 'Available for claim',
						btn_claim: 'Claim'
					},
					is_being_splitted: {
						title: 'NFT is being splitted',
						subTitle: 'Please wait for a few moments. Colonizing Mars make take a while...'
					}
				}
			},
			vestingSplit: {
				page_title: "Vesting split",
				how_to_use: "How to use?",
				page_description: "The perfect place for making large volume deals with hundreds of altcoins \n" +
					"without slippage or market price impact",
				sell_with_premium_btn: (token: string) => `Sell ${token} with premium`,
				buy_now_btn: (token: string) => `Buy ${token} now`,
			}
		}
	},
	// ru: {
	// 	nft: {
	// 		dashboard: {
	// 			page_title: "Панель токенов",
	// 			how_to_use: "Как использовать?",
	// 			page_description: "Новый децентрализованный. Мы представляем уникальную фармацию",
	// 			sell_with_premium_btn: (token: string) => `Продать ${token} с премиумом`,
	// 			buy_now_btn: (token: string) => `Купить ${token} сейчас`,
	// 			summary: {
	// 				header: "Распределение",
	// 				desc: "Введите параметры части постоянного запроса"
	// 			},
	// 			claim_all: {
	// 				total_unclaimed: "Всего необходимо заключить",
	// 				claim_all_btn: "Заключить все"
	// 			},
	// 			nft_table: {
	// 				headers: ["Лот NFT", "Прогресс", "Доступно для заключения"],
	// 				nft_card: {
	// 					price_label: "Цена:",
	// 					unvest_start_date_label: "Начало",
	// 					locked_caption: "Заблокировано",
	// 					claim_btn: "Заключить",
	// 					actions_btn: "Действия"
	// 				}
	// 			},
	// 			pagination: {
	// 				prev: "Предыдущий",
	// 				next: "Следующий"
	// 			},
	// 			distribution_video: {
	// 				header: "Как распределяется?",
	// 				description: "Для первого раза, крипто ОТС деск и даже"
	// 			},
	// 			connect_your_wallet: {
	// 				title: 'Connect your wallet',
	// 				text: 'We will calculate the profit from the Marsbase deal and give recommendations on the parameters',
	// 				btn_text: 'Connect wallet'
	// 			}
	// 		},
	// 		vestingSplit: {
	// 			page_title: "Vesting split",
	// 			how_to_use: "How to use?",
	// 			page_description: "The perfect place for making large volume deals with hundreds of altcoins \n" +
	// 				"without slippage or market price impact",
	// 			sell_with_premium_btn: (token: string) => `Sell ${token} with premium`,
	// 			buy_now_btn: (token: string) => `Buy ${token} now`,
	// 		}
	// 	}
	// }
}
export const HANDLERS = {
	onClaim: (nftId: string) => Promise.resolve(),
	onActions: (nftId: string) => console.log(`clicked Actions on ${nftId}`),
	onClaimAll: () => console.log(`claimed all!`),
	onSellWithPremium: () => console.log(`sell with premium`),
	onBuyNow: () => console.log(`buy now`)
}

export interface IScreenData {
	nfts: INft[]
	token: string
	distributionAmount: number
	unclaimedTotal: number
}

export const SCREEN_DATA: IScreenData = {
	token: "MBase",
	distributionAmount: 18,
	unclaimedTotal: 312416.72,
	nfts: [
		{
			id: "1",
			kind: "yellow",
			amount: '100_000_000',
			amountUsd: '100',
			token: "MBase",
			price: '135',
			end: "",
			started: "02.03.2022",
			locked: '100_780',
			unclaimed: '10780',
			percentComplete: 90.951,
			timePassed: "299 days",
			timeLeft: "66 days",
			available: '6656.77',
			availableUsd: '31.32',
		},
		/*
		{
			id: "2",
			kind: "red",
			amount: 36_000_000_000,
			amountUsd: 56_000,
			token: "MBase",
			price: 0.0035,
			started: "02.03.2022",
			locked: 14_500_780,
			unclaimed: 1_500_780,
			percentComplete:50.7,
			timePassed: "200 days",
			timeLeft: "165 days",
			available: 6656.77,
			availableUsd: 31.32
		},,
		unclaimedIncPerSec: FixedNumber.from('1.0')
		{
			id: "3",
			kind: "silver",
			amount: 36_000_000_000,
			amountUsd: 56_000,
			token: "MBase",
			price: 0.0035,
			started: "02.03.2022",
			locked: 14_500_780,
			unclaimed: 1_500_780,
			percentComplete: 5.65,
			timePassed: "179 days",
			timeLeft: "87 days",
			available: 6656.77,
			availableUsd: 31.32
		},,
		unclaimedIncPerSec: FixedNumber.from('1.0')
		{
			id: "4",
			kind: "cyan",
			amount: 36_000_000_000,
			amountUsd: 56_000,
			token: "MBase",
			price: 0.0035,
			started: "02.03.2022",
			locked: 14_500_780,
			unclaimed: 1_500_780,
			percentComplete: 0.33,
			timePassed: "102 days",
			timeLeft: "163 days",
			available: 6656.77,
			availableUsd: 31.32
		},,
		unclaimedIncPerSec: FixedNumber.from('1.0')
		{
			id: "5",
			kind: "yellow",
			amount: 36_000_000_000,
			amountUsd: 56_000,
			token: "MBase",
			price: 0.0035,
			started: "02.03.2022",
			locked: 14_500_780,
			unclaimed: 1_500_780,
			percentComplete:10.1,
			timePassed: "97 days",
			timeLeft: "178 days",
			available: 6656.77,
			availableUsd: 31.32
		},
		unclaimedIncPerSec: FixedNumber.from('1.0') */
	]
}
