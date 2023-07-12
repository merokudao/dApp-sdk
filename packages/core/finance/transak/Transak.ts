import transakSDK from "@transak/transak-sdk";
import { IQueryParamsRequired } from "./Interfaces";

export abstract class Transak {
  sdk: any;
  params: IQueryParamsRequired;

  constructor() {
    // Initialize the query parameters
  }

  initialize(params: IQueryParamsRequired): void {
    this.sdk = new transakSDK(params);
  }

  buyCrypto(symbol: string, network: string) {
    const _params = { ...this.params, symbol, network };
    if (!this.sdk) this.initialize(_params);
    this.sdk.init();
  }

  sellCrypto(symbol: string, network: string) {
    const _params = { ...this.params, symbol, network };
    if (!this.sdk) this.initialize(_params);
    this.sdk.init();
  }
}
