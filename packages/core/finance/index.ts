import { Transak } from "./transak/Transak";

export class Index {
  provider: any = null;
  providerData = null;

  constructor() {}

  initialize(providerName) {
    if (providerName === "Transak") {
      this.provider = Transak;
    }
    if (providerName === "OtherProvider") {
      // this.provider = new
    }
  }

  async buyCryo to(symbol: string, network: string) {
    await this.provider.buyCrypto(symbol, network);
  }

  async sellCrypto(symbol: string, network: string) {
    await this.provider.sellCrypto(symbol, network);
  }
}
