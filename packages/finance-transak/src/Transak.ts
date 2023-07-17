import transakSDK from "@transak/transak-sdk";
import { IQueryParamsFull, IQueryParamsRequired } from "./Interfaces";
//import FinanceInterface from "@dapp-sdk/finance-interface";
import BaseConfig from "../../config/BaseConfig";

export class Transak /*extends FinanceInterface */{
  sdk: any;
  params?: IQueryParamsRequired;

  constructor(config: IQueryParamsFull) {
    // super({
    //   apiKey: config.apiKey as string,
    //   env: config.environment as string,
    // });
  }

  initialize(params: IQueryParamsRequired): void {
    if (!params) throw new Error("Query parameters are required");
    this.sdk = new transakSDK(params);
  }

  buyCrypto(symbol: string, network: string) {
    if (!this.params) throw new Error("Query parameters are required");
    const _params = { ...this.params, symbol, network };
    if (!this.sdk) this.initialize(_params);
    this.sdk.init();
  }

  sellCrypto(symbol: string, network: string) {
    if (!this.params) throw new Error("Query parameters are required");
    const _params = { ...this.params, symbol, network };
    if (!this.sdk) this.initialize(_params);
    this.sdk.init();
  }
}
