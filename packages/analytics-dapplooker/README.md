# DappLooker Analytics SDK
The dapp-sdk/analytics-dapplooker provides developers with programmatic access to reliable and comprehensive blockchain data in the Web3 environment. By integrating the DappLooker SDK, you can easily retrieve popular charts data for your decentralized applications (Dapps).

> #### Node version: >=14

## Installation
To start using the DappLooker SDK, follow these steps:

#### 1. Install the SDK:
```bash
npm install @dapp-sdk/analytics-dapplooker
```

#### 2. Generate an API key:

- Create an account on the [DappLooker website](https://dapplooker.com/).
- After signing up, navigate to the [API keys](https://dapplooker.com/user/api) page.
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/APIPageHighlighted.png)
- Click on `+ API Key`.
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/AddKey.png)
- Provide a name for your API key and click on `Generate Key`.
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/generateKey.png)
- Copy your API key for future use.
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/copyAPIKey.png)

#### 3. Get Your Chart UUID

- Visit the [DappLooker Analytics Website](https://analytics.dapplooker.com/)
- Create a new Chart or Open a Existing Created Chart
  ![ChartImage.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/ChartImage.png)
- Click on the `API` Button
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/chartAPIButton.png)
- Get the UUID of your chart from by clicking on copy icon of `Copy Chart UUID`.
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/CopyChartUUID.png)


#### 4. Import the SDK

Once you have installed the SDK, import it into your project. With the imported SDK, create an instance of the DappLookerChartsAPI and make API calls using the API key and chart UUID obtained in the previous steps.

### Examples
Here's an example of how you can use the DappLooker SDK:

```javascript
//Javascript
const DLAnalytics = require("@dapp-sdk/analytics-dapplooker")

const getChartData = async () => {
    let chartUUID = ""; // Replace it with chart UUID you are working with
    let apiKey = ""; // Replace it with your API key
    let outputFormat = 'json'
    let baseConfig = {
      apiKey: apiKey,
      env: "dev"
    }
    let dappLookerSDK = new DLAnalytics.DLAnalytics(baseConfig);
    let response = await dappLookerSDK.getChartData(chartUUID, outputFormat);
    console.log("Chart API Data: ", JSON.stringify(response));
};

getChartData();


> Output (Without outputFormat):
/*{
  "rows": [["2023-02-26T00:00:00Z"]], // This will contain data of all rows in list of list format
  "cols": [{                          // This will contain details of each column
      "description": null,
      "semantic_type": null,
      "table_id": 872
    }],
  "insights": [{ "previous-value": 9}],
  "results_timezone": "GMT"
}*/


> Output (With outputFormat as json):
/*
In JSON format we will get result with list of objects with key as column name and value as column's row value
[
{"Day Timestamp":"2023-02-26","Sum of Attestation Requested Count":3.0,"Sum of Attestation Completed Count":0.0,"Success Percentage":0.0,"Failure Percentage":100.0},
{"Day Timestamp":"2023-03-05","Sum of Attestation Requested Count":16.0,"Sum of Attestation Completed Count":2.0,"Success Percentage":12.5,"Failure Percentage":87.5},
{"Day Timestamp":"2023-05-14","Sum of Attestation Requested Count":3.0,"Sum of Attestation Completed Count":0.0,"Success Percentage":0.0,"Failure Percentage":100.0}
]*/
```

The DappLooker SDK also provides TypeScript support for developers who prefer type-checking and enhanced code editor features.

```jsx
//Typescript
const DLAnalytics = require("@dapp-sdk/analytics-dapplooker")

const getChartData = async () => {
    let chartUUID = ""; // Replace it with chart UUID you are working with
    let apiKey = ""; // Replace it with your API key
    let outputFormat = 'json'
    let baseConfig = {
      apiKey: apiKey,
      env: "dev"
    }
    let dappLookerSDK = new DLAnalytics.DLAnalytics(baseConfig);
    let response = await dappLookerSDK.getChartData(chartUUID, outputFormat);
    console.log("Chart API Data: ", JSON.stringify(response));
};

getChartData();

> Output (Without outputFormat):
/*{
  "rows": [["2023-02-26T00:00:00Z"]],
  "cols": [{
      "description": null,
      "semantic_type": null,
      "table_id": 872
    }],
  "insights": [{ "previous-value": 9}],
  "results_timezone": "GMT"
}*/


> Output ((With outputFormat as json):
/*[
{"Day Timestamp":"2023-02-26","Sum of Attestation Requested Count":3.0,"Sum of Attestation Completed Count":0.0,"Success Percentage":0.0,"Failure Percentage":100.0},
{"Day Timestamp":"2023-03-05","Sum of Attestation Requested Count":16.0,"Sum of Attestation Completed Count":2.0,"Success Percentage":12.5,"Failure Percentage":87.5},
{"Day Timestamp":"2023-05-14","Sum of Attestation Requested Count":3.0,"Sum of Attestation Completed Count":0.0,"Success Percentage":0.0,"Failure Percentage":100.0}
]*/
```
By integrating the @dapp-sdk/analytics-dapplooker into your Dapp, you can easily access and utilize the most reliable and comprehensive blockchain data in the Web3 environment. Start exploring the possibilities and enhancing your decentralized applications with DappLooker SDK today!

## Resources
- **[Website](https://dapplooker.com/)** To checkout our Product.
- **[Docs](https://docs.dapplooker.com)** For comprehensive documentation.
- **[Medium](https://dapplooker.medium.com/)** To learn more about our partners, new launches, etc.
- **[GitHub](https://github.com/dapplooker/)** for source code, project board, issues, and pull requests.
- **[Youtube](https://www.youtube.com/channel/UC1KJmtb3UhnWSN_sDv71_fg)** Subscribe to our YouTube channel for video tutorials, demos, and informative content.

## Contributing

We invite you to become a valued member of the DappLooker community, an open-source project committed to transparency in our development process. We appreciate any contributions you can make, whether it's helping us identify and fix bugs, suggesting new features, improving our documentation, or spreading the word about DappLooker.

If you come across any errors or issues while using DappLooker, please take a moment to create a bug report. Your feedback is invaluable in improving the reliability. We also value the importance of comprehensive documentation. If you find any gaps or areas that need improvement in our documentation, please don't hesitate, Your suggestions will enable us to provide better resources for our users.

If you're unsure where to begin or need assistance, we invite you to join our Discord community. We'll be more than happy to help you get started on your journey with DappLooker.

## Social Links

Follow us to stay updated with the latest news and updates!

<a href="https://dapplooker.com/community" target="_blank">Discord</a> |
<a href="https://twitter.com/dapplooker" target="_blank">Twitter</a> |
<a href="https://t.me/dapplooker" target="_blank">Telegram</a> |
<a href="https://www.linkedin.com/company/dapplooker/" target="_blank">Linkedin</a>

