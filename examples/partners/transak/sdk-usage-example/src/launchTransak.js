import transakSDK from "@transak/transak-sdk";

export const launchTransak = (params) => {
  const {
    apiKey,
    environment,
    defaultCryptoCurrency,
    walletAddress,
    fiatCurrency,
    partnerOrderId,
    email,
  } = params;

  console.log("launching transak");

  /**
   * All the params supported by Transak SDK is here.
   * https://docs.transak.com/docs/query-parameters
   */
  let transak = new transakSDK({
    widgetHeight: "750px",
    widgetWidth: "450px",
    fiatCurrency,
    apiKey,
    environment,
    defaultCryptoCurrency,
    email,
    walletAddress,
    partnerOrderId,
    disableWalletAddressForm: true,
  });

  return transak;
};
