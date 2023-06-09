# 0xOptimal

[0xOptimal](https://getoptimal.xyz/) is AdSense for web3. We help dApps monetize their audiences with highly targeted, relevant ads that pay users for their attention. At the same time we allow advertisers to reach their ideal users based on their on-chain activity.

Integrate Optimal and immediately start generating a stable revenue stream for your dApp.

Get onboarded and start monetising in minutes &ndash; [email us](mailto:nb@getoptimal.xyz) directly to find out more.


## Example

Here is an example integration of 0xOptimal ads in a React Native app:

Install the package with your package manager of choice:

```bash
# npm
npm install @getoptimal/react

# yarn
yarn add @getoptimal/react

# pnpm
pnpm add @getoptimal/react
```

Then simply include `OptimalProvider` in the root of your app:

```tsx
<OptimalProvider>
  <MyApp />
</OptimalProvider>
```

Your `publisher` and `adType` slugs can be obtained from the Optimal team &ndash; onboarding can take as little as minutes.

The following example will render the ad automatically, if you would like to have more control, check the next example.

#### Automatic

```jsx
import { OptimalAd } from "@getoptimal/react";

const opts = {
  publisher: "demo-publisher", // contact us to obtain your publisher slug 
  adType: "ad-type",
  viewerData: {
    wallets: ["137:<address>"], // here 1: reprensents the chain id, so 137 = MATIC, 1 = ETH mainnet, etc
  },
};

export const MyComponent = () => {
  return (
    <OptimalAd
      renderLoading={() => {
        return <Text>Loading...</Text>;
      }}
      opts={opts}
    />
  );
};
```

#### Manual

You can also use the following example for custom ads:

```tsx
import { type OptimalPredefinedAdProps, OptimalCustomAd } from "@getoptimal/react";

export const MyAd = (props: OptimalPredefinedAdProps) => {
  return (
    <OptimalCustomAd
      {...props}
      renderAd={(decision) => {
        return <>your custom component</>
      }
    />
  );
};
```

### More Examples

See the example app [stories](https://github.com/0xOptimal/optimal-js-sdk/tree/main/apps/react-test-app/src/components) for more examples.

You can watch this [video](https://www.youtube.com/watch?v=axgufz7kDqk) for a quick walkthrough of the product.


## Docs

For more information about the SDK, see the docs for [React Native](https://www.npmjs.com/package/@getoptimal/react-native) and [React](https://www.npmjs.com/package/@getoptimal/react).
