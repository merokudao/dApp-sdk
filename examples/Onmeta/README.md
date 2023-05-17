
# Onmeta

[MoonPay](https://www.moonpay.com/) is a fast, easy-to-use platform that allows users to purchase cryptocurrencies using a variety of payment methods, with a focus on security and compliance.

## Product Overview

MoonPay's embeddable widget is a customizable solution that allows businesses to seamlessly integrate MoonPay's on-ramping and off-ramping products into their own platforms. With easy integration and customization, businesses can tailor the widget to their user interface, creating a seamless and branded experience for their customers. The widget offers a variety of payment methods, including credit/debit cards, bank transfers, and Apple Pay, as well as the ability to purchase multiple cryptocurrencies. MoonPay's widget also provides a robust compliance infrastructure and advanced fraud prevention measures, ensuring security for both the businesses and their customers. With the embeddable widget, businesses can offer a complete, end-to-end cryptocurrency solution to their customers, while also generating additional revenue streams.

### On-ramping

MoonPay's on-ramping product provides a seamless experience for users to easily purchase cryptocurrencies, while ensuring fast transaction processing and competitive rates. With a strong focus on compliance and security, MoonPay's on-ramping product delivers a safe and user-friendly solution for anyone looking to enter the world of cryptocurrencies.

### Off-ramping

MoonPay's off-ramping product allows users to quickly and easily convert their cryptocurrencies back into fiat currency. Users can easily withdraw their funds in a timely and convenient manner.

## SDK

MoonPay's SDK simplifies the process of integrating MoonPay's widget into a partner's platform. The SDK allows partners to customize the widget's appearance and functionality, while also providing a communication channel for streamlined integration. One of the key benefits of the SDK is the ability to receive real-time notifications about important flow lifecycle events. This allows partners to provide an integrated sell flow where the MoonPay widget instructs the partner's wallet app to perform the necessary sell deposit.


## Example

An example off-ramping integration follows:

1. Add the MoonPay SDK as a script to your HTML file:

```HTML
<script async defer src="https://static.moonpay.com/web-sdk/v1/moonpay-web-sdk.min.js" />
```

2. Then, initialize the SDK in your application:

```TypeScript
const moonpaySdk = window.MoonPayWebSdk.init({
  flow: 'sell',
  environment: 'sandbox',
  variant: 'overlay',
  params: {
    apiKey: 'pk_test_key'
  },
  handlers: {
    async onInitiateDeposit(properties) {
      // Your own crypto deposit code
      const { cryptoCurrency, cryptoCurrencyAmount } = properties;
      const depositId = await deposit(cryptoCurrency.code, cryptoCurrencyAmount);
      return { depositId };
    }
  }
});
```

## API


## Example


## Docs

[MoonPay Docs](https://docs.moonpay.com/)


