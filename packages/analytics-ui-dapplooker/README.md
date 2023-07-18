# DappLooker Visualizer Components

The DappLooker visualizer components provides developers with programmatic access and visualize to reliable and comprehensive blockchain data in the Web3 environment. By integrating the DappLooker Visualizer Compoenets, you can easily retrieve popular charts table for your decentralized applications (Dapps).

> #### Node version: >=14

## Installation

To start using the DappLooker Visualizer Components, follow these steps:

#### 1. Install the package:

```bash
npm install @dapp-sdk/analytics-ui-dapplooker
```

#### 2. Import the package

Once you have installed our package, import it into your project. With the imported package, use it as a component and pass the JSON response as a attribute or props with the component. You can get the JSON response by making Chart API calls from our the [Analytics SDK](https://github.com/merokudao/dApp-sdk/tree/main/packages/analytics-dapplooker)

### Example (ReactJS)

Here's an example of ReactJS project of how you can use our Visualizer component just like a normal React component:

```jsx
//App.tsx (Typescript)
import {useEffect, useState} from 'react';
import './App.css';
import {DLAnalytics} from '@dapp-sdk/analytics-dapplooker';
import {DLTableReactElement} from '@dapp-sdk/analytics-ui-dapplooker';

function App() {
	const [chartData, setChartData] = useState([]);

	useEffect(() => {
		getAPIData().then(() => console.log("Done"))
	}, [])

	const getAPIData = async () => {
		try {
			let chartUUID = "";
			let apiKey = "";
			let outputFormat = 'json'
			let baseConfig = {
				apiKey: apiKey,
				env: "dev"
			}
			console.log("yaha hu")
			let dappLookerSDK = new DLAnalytics(baseConfig);
			let response = await dappLookerSDK.getChartData(chartUUID, outputFormat);
			console.log("Chart API Data: ", JSON.stringify(response));
			setChartData(response);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<div>
				<h1>Hello World</h1>
				<DLTableReactElement className='my-wrapper' data={chartData}></DLTableReactElement>
			</div>
		</>
	)
}

export default App;
```

### Example (Angular)

Here's an example of a Angular project of how you can use our Visualizer component just like a normal Angular component:

- Import our package in `app.module.ts` file
- Import `CUSTOM_ELEMENTS_SCHEMA` from `@angular/core` in schemas which enables external components to use in your package.

```jsx
//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'dapplooker-visualizer-sdk';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- Add the component just like a normal angular component, and pass the JSON data as an attribute.
```html
//app.component.html
<chart-table [data]="chartData">
</chart-table>
```

#### 3. Output

Here's the output of the DappLooker's Visualizer Component
![ChartTableComponent.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/chart-table-component.png)

By integrating the dapplooker visualizer components into your Dapp, you can easily access chart API data in form of tables and utilize the most reliable and comprehensive blockchain data in the Web3 environment. Start exploring the possibilities and enhancing your decentralized applications with DappLooker Visualizer Components today!

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
