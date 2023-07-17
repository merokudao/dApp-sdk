# WEB3 Custom Integration
1) Approve spending address (XGWallet contract in our case) with a specific amount using the approve function.
    This will allow the approved spender (XGWallet) to withdraw the specified amount from their wallet at anytime.
2) Check Balance and Allowance of the User Wallet, if its enough or not.
3) Send a POST request to our Payment API, get the TxHash in the response.

For Playground to Our Web3 Custom APIs or knowing about request and response objects, please refer to
### [Xion API Documentation](https://www.apimatic.io/apidocs/xionglobal/v/2_0_0#/rest/api-endpoints/api/single-bill-payment)

## *__Pre-requisites:__*

Before you start, you will need the following:

* A development environment with Web3.js or any other web3 library installed

**Next Steps:**

1. Connect to the [Polygon network](https://wiki.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/) using Web3:

```javascript
const Web3 = require('web3');
const web3 = new Web3('https://polygon-mainnet.infura.io/v3/YOUR-API-KEY');
```

*Replace 'YOUR-API-KEY' with your own [Infura](https://www.infura.io/) API KEY.*

2. Load the ERC20 token contract using Web3.js:

```javascript
const tokenAddress = '<ERC20-token-contract-address>';
const tokenABI = <ERC20-token-contract-ABI>;

const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
```

Replace with the address of the ERC20 token contract you want to interact with,
and with the ABI (Application Binary Interface) of the token contract.

Example of an [ABI for USDT Polygon](https://polygonscan.com/token/0xc2132d05d31c914a87c6611c10748aeb04b58e8f#code):
```
[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
```


## **Check Allowance for ERC20 Token**

Before spending an ERC20 token on behalf of the user, it is important to check whether the contract has been granted the necessary allowance to spend the token. This can be done by calling the allowance() function on the ERC20 token contract. The allowance() function takes two parameters: the address of the token owner (e.g. the clients wallet address) and the address of the spender (the Xion Pay XGWallet contract address).

Here's an example code snippet to check allowance for an ERC20 token:

```javascript
const owner = '<your-wallet-address>'; //User Wallet
const spender = '<spender-wallet-address>'; //XGWallet Contract Address

tokenContract.methods.allowance(owner, spender).call((err, allowance) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Allowance for ${spender}: ${allowance}`);
    
    if (allowance < "Required Value") {
      // Take approval from the user to spend the tokens
      // See step 4 below
    }
  }
});
```

_Replace with client wallet address that is approving the token allowance_
and with the XGWallet contract address to approve for spending your tokens.


## **Approve Spending of ERC20 Token**

If the allowance for the ERC20 token is lower than required, then the contract will need to request approval from the user to spend the token. This can be done by calling the approve() function on the ERC20 token contract. The approve() function takes two parameters: the address of the spender and the amount of tokens to approve.

Here's an example code snippet to request approval for an ERC20 token:

```javascript
const spender = '<spender-wallet-address>';
const value = '<amount-to-approve>';

tokenContract.methods.approve(spender, value).send({from: '<your-wallet-address>'}, (err, txHash) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Transaction hash: ${txHash}`);
  }
});
```

Replace with the XGWallet address that you want to approve for spending your tokens,
and with the amount of tokens you want to approve.

In our scenario, spender is the address of the XGWallet contract that will be spending the ERC20 token(USDT) on behalf of the user, and amount is the number of tokens that the XGWallet contract is requesting approval to spend.

Once the user has approved the spending of the ERC20 token(USDT), the XGWallet contract can then spend the token as needed.

## Making a POST call to the Xion Payment API
The Xion Payment API allows users to make payments for various digital products and services. This API supports a POST request method that enables users to create a single payment transaction for a given product.

### Endpoint:
The endpoint URL for this API is https://prodp-api.xion.app/api/v2/single/payment

Authorization:
All requests to the API require authentication using an access token that must be included in the request headers. Include the following header in your request:

Authorization: Bearer AccessToken(have to get it from the dapp)

Request Headers:
The following headers must be included in the request:

Accept: application/json
Content-Type: application/json

Request Payload:
The request payload must be a JSON object containing the following keys:

productName: The name of the product being purchased.
amount: The amount of the product being purchased.
currency: The currency used for the transaction.
buyerAddress: The address of the buyer's wallet.

### Example Code Snippet:
Here is an example snippet using Axios to make a POST call to the API:

```javascript
import axios from 'axios';

const apiUrl = 'https://prodp-api.xion.app/api/v2/single/payment';
const accessToken = 'AccessToken';

const postData = {
  productName: 'Example NFT',
  amount: 5,
  currency: 'usdt',
  buyerAddress: <userAddress>
};

const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

axios.post(apiUrl, postData, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

In this example, we first define the API URL and access token. We then define the payload data for the POST request, which includes the product name, amount, currency, and buyer address.

Next, we define the headers for the request, which include the authorization token and content type. We use Axios to make the POST call, passing in the API URL, payload data, and headers.

The `.then()` function handles the successful response from the API, and we log the response data to the console. The `.catch()` function handles any errors that may occur during the API call.

Conclusion:

In this guide, we have shown you how to check the allowance for an ERC20 token and take approval from the user to spend the tokens, using the Web3.js library for interacting with the Polygon network, then send a request to the APIs for the Payments
