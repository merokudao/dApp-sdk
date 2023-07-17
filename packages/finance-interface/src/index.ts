import BaseConfig from "../../config/BaseConfig";

abstract class FinanceInterface {

  protected config: BaseConfig;

  protected constructor(config: BaseConfig) {
    if (this.constructor === FinanceInterface) {
      throw new Error("Can't instantiate abstract class!");
    }
    this.config = config;
  }

  abstract buyCrypto(symbol: string, network: string): void;
  abstract sellCrypto(symbol: string, network: string): void;
}

export default FinanceInterface;
