export abstract class FinanceBase {
  protected config;

  protected constructor(config) {
    this.config = config;
  }

  abstract buyCrypto(symbol: string, network: string): void;
  abstract sellCrypto(symbol: string, network: string): void;
}
