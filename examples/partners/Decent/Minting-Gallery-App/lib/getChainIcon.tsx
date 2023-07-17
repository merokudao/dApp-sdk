import Arbitrum from "../public/icons/arbitrum";
import Ethereum from "../public/icons/ethereum";
import Optimism from "../public/icons/optimism";
import Polygon from "../public/icons/polygon";

export const chainIconDict:{[key:string]:string} = {
  '1': Ethereum,
  '5': Ethereum,
  '42161': Arbitrum,
  '421613': Arbitrum,
  '137': Polygon,
  '80001': Polygon,
  '10': Optimism,
  '420': Optimism,
}

export default function getChainIcon(chainId: number) {
  return chainIconDict[`${chainId}`];
}
