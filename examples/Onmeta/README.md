
# Onmeta

[Onmeta](https://www.onmeta.in/) provides the underlying infrastructure that allows DeFi companies, Web3 Gaming companies, NFT marketplaces & other Dapps to allow their end users to exchange fiat currency for crypto tokens and crypto tokens for fiat currency.

## Product Overview

Onmeta provides quickest on and off ramp solutions (Widget/API integration) to web3 dapps to help them improve their user experience and accelerate their adoption by mainstream users. Onmeta aims to become a fully interoperable solution which supports all major fiat currencies as well as all tokens across all major blockchains. Currently, focussed on emerging markets like India & SEA, Onmeta is the only service provider supporting INR fiat on and off ramp. It supports 5000+ tokens across Polygon, Ethereum, Arbitrum, Avalanche, Fantom and BNB Smart Chain blockchains with work underway for supporting 25+ blockchains by the end of this year. It has 40+ dApps currently using its solution and has processed USD 1M worth of transactions.

We support the following integration methods for our services i.e. both On and Off Ramp. 
1. Widget Integration
2. API Integration




### On-ramping

One click checkout solution allows your user to purchase tokens without even leaving your platform. Whitelist API & SDK based widget integration available. <br />
Demo: [Purchasing PS1 with Onmeta](https://youtu.be/bp1C43jTI9o)


### Off-ramping

One click withdrawal solution allows your users to convert their tokens in fiat and withdraw to their bank account. Whitelist API & SDK based widget integration available. 
Demo: [Off-Ramp with Onmeta: MATIC to INR in a minute](https://www.youtube.com/watch?v=Hz7vw13uR2k)


### Widget
Onmeta's cryptocurrency widget is a versatile solution that enables businesses to quickly and easily integrate cryptocurrency buying and selling into their platforms. We support multiple currencies - INR (Indian National Rupee) and PHP (Philippine peso)
and hence provide multiple payment channels. <br />
	UPI, IMPS, NEFT - INR <br />
	GCASH, PAYMAYA, GRABPAY - PHP 

## Example

Given below are the integration steps to embed the widget in your website : 

1. Add the Onmeta sdk script tag to your HTML file:

```HTML
<script src="https://stg.platform.onmeta.in/onmeta-sdk.js"></script>
```

2. Then, initialize the widget in your application:

```HTML
<script >
    let createWidget = new onMetaWidget({
        // (It should be an id of an element not a class) which is set in step 2 above
        elementId: "widget", // Mandatory
        apiKey: "{api_key}", // Mandatory
        walletAddress: "0xEcc24eab0fb83Ef0c536b35C44C578F750FDBB6E", // Optional
        fiatAmount: 100, // Optional (If passed then minimum amount is 100 inr)
        userEmail: "test@test.com", // Optional (if passed user don't have to register in meta platform)
        chainId: "80001", // Optional (it should be passed along with the tokenAddress to show a particular token to the user)
        tokenAddress: "0xEcc24eab0fb83Ef0c536b35C44C578F750FDBB6E", // Optional
        metaData: {"userID" : "ABCDXXX", "userName" : "user"} // Optional
        successRedirectUrl : "https://www.sample.net", // Optional
        failureRedirectUrl : "https://www.sample.net", // Optional
    });
createWidget.init(); // it will initialize the widget inside the particular div element
createWidget.on(eventType, callbackFn); // this method will listen to the events of the widget
</script>
```

#### On successful embedding, you see below widget integrated in your website : 
<img width="496" alt="image" src="https://github.com/kunal768/dApp-sdk/assets/33108756/45c59bde-f311-4d39-9902-bebbdc39cc66">


## API
Onmeta also provides API support for on-ramp/off-ramp.
We provide multiple API's across all stages of an on/off - ramp transaction.

## Example

### Onmeta Create Order API (On-ramp)

### Request

`POST https://stg.api.onmeta.in/v1/orders/create`

	   curl --location --request POST 'https://stg.api.onmeta.in/v1/orders/create' \
	--header 'Accept: application/json' \
	--header 'x-api-key: string' \
	--data-raw '{"buyTokenSymbol":"string","chainId":"string","fiatCurrency":"string","fiatAmount":"string","buyTokenAddress":"string","receiverAddress":"string"}'

### Response
    {"success":true,"data":{"orderId":"6464ee5be1277df21b0b3946","receiverWalletAddress":"0xEcc24eab0fb83Ef0c536b35C44C578F750FDBB6E","gasPriceWei":"184300000000","gasUseEstimate":"70000","quote":"1.185862827","fiatCurrency":"inr","fiatAmount":100},"error":{}}↵


### Onmeta Create Order API (Off-ramp)

### Request

`POST https://stg.api.onmeta.in/v1/offramp/orders/create`

	   curl --location --request POST 'https://stg.api.onmeta.in/v1/offramp/orders/create' \
	--header 'Accept: application/json' \
	--header 'x-api-key: string' \
	--header 'Authorization: string' \
	--data-raw '{"sellTokenSymbol":"string","sellTokenAddress":"string","chainId":"Number","fiatCurrency":"string","fiatAmount":"string","senderWalletAddress":"string","bankDetails":"Object","refundWalletAddress":"string"}'

### Response

    {
    "success": true,
    "data": {
		"orderId":"1234",
		"receiverWalletAddress":"0x1234",
		"gasPriceWei":"1234200000",
		"gasUseEstimate":"70000",
		"quote":"1112233",
		"fiatCurrency": "inr",
        "fiatAmount": 168.23
	},
	"error": {}
	}


> **Note**
You receive the x-api-key and Authorization header values used in above requests, upon integrating with Onmeta and making an account in the Onmeta dashboard.

## Docs
For more API's and amazing features across widget, take a look :
[Onmeta Docs](https://docs.onmeta.in)


