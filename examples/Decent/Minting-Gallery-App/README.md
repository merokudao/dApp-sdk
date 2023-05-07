# Portfolio Marketplace Starter – Decent NFTs

Custom NFT marketplace starter repo built on [Next.js](https://nextjs.org/), [Tailwind](https://tailwindcss.com/docs/customizing-colors), and [Decent](http://decent.xyz/), deployed on [Vercel](https://vercel.com/).

![](/public/images/example.png)

The purpose of this repository is to get you up & running quickly with a curated NFT marketplace.  You can filter the Decent Protocol for any set of creator addresses, contract addresses, or contract symbols to showcase those NFTs on your marketplace page.  The primary functionality demonstrated in this repo is the ability to mint NFTs from Decent's [Editions](https://docs.decent.xyz/docs/editions) & [Rentable](https://docs.decent.xyz/docs/rentable) contracts and search for specific sets of contracts using Decent's API.

To create a custom minting page for just one NFT release, please visit this repository's companion repo: [Custom Minting Page](https://github.com/decentxyz/Minting-Page).  The Minting Page repository also includes a video tutorial.

## Deployment Instructions

You will need to create a [Decent NFT](https://hq.decent.xyz/), [Decent API Key](https://docs.google.com/forms/d/e/1FAIpQLSdPBORZGU-JsMxwlhan9aUl01QCTgu2KJMEEPjhHC_9v1PQqA/viewform), and [Alchemy API Key](https://www.alchemy.com/) to use this starter. Here are the steps:

1. Go to https://hq.decent.xyz/create/Editions and create a new NFT

2. From the success page, copy the contract address and note the chain ID number.  You can deploy your NFT to Ethereum, Polygon, Arbitrum or Optimism.  These chains have the following IDs:

| Chain       | ID Number   |
| ----------- | ----------- |
| Ethereum    | 1           |
| Polygon     | 137         |
| Arbitrum    | 42161       |
| Optimism    | 10          |

 On the `index.tsx` page, enter the identifiers (contract address(es), creator address(es), contract symbol(s)), identifier type, and chain Ids in the `getServerSideProps` request.
 
 ```bash
 export async function getStaticProps() {
  const identifiers = ["RCGS1"];
  const chainIds = ['1', '137', '10', '42161'];
  const matchItem = 'symbol';
  
  let { data: nfts } = await axios.get(`${absoluteUrl().origin}/api/getReleases`, { params: {
    chainIds: `${chainIds}`,
    matchItem: matchItem,
    matchingArray: `${identifiers}`,
  }});
  return {
    props: {nfts},
  };
}
 ```

3. Request a [Decent API Key](https://docs.google.com/forms/d/e/1FAIpQLSdPBORZGU-JsMxwlhan9aUl01QCTgu2KJMEEPjhHC_9v1PQqA/viewform) and add it to your .env file.  Once inputted, your minting page will automatically populate with your NFT's data and metadata.  If you would like to add or swap information, please visit [Decent's API Documentation](https://docs.decent.xyz/reference/get_contracts-chainid-address) to query for your contract and view the JSON response to see the available information.

4. Create an Alchemy account and visit [your dashboard](https://dashboard.alchemy.com/) to create an Alchemy API key. Alchemy facilitates the connection between your application and the chain of your choice.

Reach out to [@cdurbinxyz](https://twitter.com/cdurbinxyz) on Twitter if you run into any issues.

## To Run

First, install dependencies using npm:

```bash
npm i
```

Next, run `cp .env.example .env.local` to create your file to enter the information detailed above.  It should look like:

```bash
DECENT_API_KEY=<your-decent-api-key>
ALCHEMY_API_KEY=<your-alchemy-api-key>
```

Lastly, run the development server:

```bash
npm run dev
```

## Demo

https://minting-page-decent-webapp.vercel.app/

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DecentSDK](https://www.npmjs.com/package/@decent.xyz/sdk)
- [Decent API](https://docs.decent.xyz/reference/get_allowlists-merkleroot)
- [RainbowKit](https://www.rainbowkit.com/)
