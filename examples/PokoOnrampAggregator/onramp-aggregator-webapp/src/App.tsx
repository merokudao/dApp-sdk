import React from "react";
import logo from "./logo.svg";
import "./App.css";

const URL_PARAMS = {
  USER_ID: "mock_user_id",
  API_KEY: "c95f413b-d3b3-42b9-adfa-92d2d0678bb4",
  FIAT: "USD",
  CRYPTO: "ETH",
  FIAT_AMOUNT: "50",
  NETWORK: "ethereum",
  RECEIVE_WALLET_ADDRESS: "",
  FIAT_LIST: ["VND", "USD", "BRL"].join(","),
  CRYPTO_LIST: ["USDT-ethereum", "USDT-bsc", "USDT-polygon"].join(","),
};

function App() {
  /**
   * Build the URL for iframe
   * Full list of parameters: https://pokoapp.gitbook.io/documentation/onramp-aggregator/sdk-integration-and-documentation/web-integration/parameters
   */
  const urlQueryString = [
    `userId=${URL_PARAMS.USER_ID}`, // required
    `apiKey=${URL_PARAMS.API_KEY}`, // required
    `fiat=${URL_PARAMS.FIAT}`,
    `crypto=${URL_PARAMS.CRYPTO}-${URL_PARAMS.NETWORK}`,
    `fiatAmount=${URL_PARAMS.FIAT_AMOUNT}`,
    `receiveWalletAddress=${URL_PARAMS.RECEIVE_WALLET_ADDRESS}`,
    `fiatList=`,
    `cryptoList=`,
    `cryptoAmount=`,
    `strictMode=`,
    `excludeProviderIds=`,
    `signature=`,
    `providerId=`,
    `paymentMethodId=`,
  ].join("&");
  const widgetUrl = `https://stg.onramp.pokoapp.xyz?${urlQueryString}`;

  return (
    <div className="App" style={{ marginTop: 40 }}>
      <h3>Poko - Onramp Aggregator</h3>
      <a
        href="https://pokoapp.gitbook.io/documentation/onramp-aggregator/what-is-onramp-aggregator"
        target="_blank"
        style={{ color: "#ff9933" }}
      >
        <p>Get Started - Documentation</p>
      </a>

      <iframe
        src={widgetUrl}
        height="700px"
        width="550px"
        style={{ border: "solid 1px #d0d5dd", borderRadius: 8 }}
        title="Poko widget"
        allow="autoplay; camera; clipboard-read; clipboard-write"
      />
    </div>
  );
}

export default App;
