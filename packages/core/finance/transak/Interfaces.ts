export interface IBuyParams extends IQueryParamsRequired {
  isBuyOrSell: boolean;
}

export interface ISellParams extends IQueryParamsRequired {
  isBuyOrSell: boolean;
}

export interface IQueryParamsFull {
  apiKey: string | null;
  environment: string | null;
  cryptoCurrencyCode: string | null;
  defaultCryptoCurrency: string | null;
  cryptoCurrencyList: string | null;
  symbol: string | null;
  network: string | null;
  networks: string | null;
  walletAddress: string | null;
  walletAddressesData: object | null;
  fiatCurrency: string | null;
  countryCode: string | null;
  fiatAmount: number | null;
  defaultNetwork: string | null;
  defaultFiatAmount: number | null;
  defaultCryptoAmount: number | null;
  defaultPaymentMethod: string | null;
  paymentMethod: string | null;
  disablePaymentMethods: string | null;
  email: string | null;
  userData: object | null;
  partnerOrderId: string | null;
  partnerCustomerId: string | null;
  redirectURL: string | null;
  hideExchangeScreen: boolean | null;
  disableWalletAddressForm: boolean | null;
  isAutoFillUserData: boolean | null;
  themeColor: string | null;
  widgetHeight: string | null;
  widgetWidth: string | null;
  hideMenu: boolean | null;
  isFeeCalculationHidden: boolean | null;
  exchangeScreenTitle: string | null;
  cryptoAmount: number | null;
  productsAvailed: string | null;
  excludeFiatCurrencies: string | null;
}

export interface IQueryParamsRequired {
  apiKey: string | null;
  environment: string | null;
}
