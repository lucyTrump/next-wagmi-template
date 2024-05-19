import { Abi, Address, erc20Abi } from 'viem';
import { base, baseSepolia } from 'wagmi/chains';
import MintAbi from './ABI/mint.json';
import ClaimAbi from './ABI/claim.json';

interface ContractConfig {
	abi: Abi;
	name: string;
	address: Address | Record<number, Address> | undefined;
}

export const contracts: ContractConfig[] = [
	{
		name: 'USD',
		abi: erc20Abi,
		address: {
			[base.id]: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
			[baseSepolia.id]: '0x081827b8C3Aa05287b5aA2bC3051fbE638F33152',
		},
	},
	{
		name: 'mint',
		address: {
			// mainet
			[base.id]: '0xc1ADDe247fEca3daEa7e13a0Aee74fcADD85beFd',
			// dev
			[baseSepolia.id]: '0xf14F33639124F0B1ba3a2811a42d801AdDF43e38',
		},
		abi: MintAbi as Abi,
	},
	{
		name: 'claim',
		address: {
			[base.id]: '0x87C270DE86D0089D07E75A13288d61EF0C2A3734',
			[baseSepolia.id]: '0xa1DcdBFe0D0De1Dc391747828a9Bed10907A43Bd',
		},
		abi: ClaimAbi as Abi,
	},
];
