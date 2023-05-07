// use this example to deploy Decent's 1155 NFT contract
// Series is highly customizable with a number of unique features like USD pricing; please see the documentation for the full contract overview: https://docs.decent.xyz/docs/series

// Example deploy function:
// Function params currently placeholder strings; would want to set via user input in form for live implementation
import { DecentSDK, edition } from '@decent.xyz/sdk';
import { useSigner, useNetwork } from 'wagmi';
import { NFTStorage, Blob } from 'nft.storage';
import { ethers } from "ethers";
import { useState } from "react"; 

export async function deployFunction() {
  const { data: signer } = useSigner();
  const { chain } = useNetwork();

  const [nftImage, setNftImage] = useState({ preview: '/images/icon.png', raw: { type: "" } });
  const [audioFile, setAudioFile] = useState({ preview: '/images/icon.png', raw: { type: "" } });

  try {
      // create metadata
      // send metadata file to ipfs
      const client = new NFTStorage({
        token: process.env.NFT_STORAGE_TOKEN || ''
      });
      
      const promise = (fileo: any) => new Promise((resolve) => {
        const fr = new FileReader()

        fr.onload = async function () {
          const b = new Blob([fr.result as ArrayBuffer])
          const ipfsImg = await client.storeBlob(b)
          resolve(ipfsImg)
        }
        fr.readAsArrayBuffer(fileo as any)
      })

      const ipfsImg = await promise(nftImage.raw)
      const ipfsAudio = (audioFile as any)?.raw?.size && (audioFile as any)?.raw?.size > 0 ? await promise(audioFile.raw) : ipfsImg
      
      // create metadata
      const metadata = {
        description: "description",
        image: `ipfs://${ipfsImg}?`,
        name: "collectionName",
        animation_url: `ipfs://${ipfsAudio}?`
      }

      // build metadata json file
      const data = JSON.stringify(metadata, null, 1);
      const bytes = new TextEncoder().encode(data);
      const blob = new Blob([bytes], {
        type: "application/json;charset=utf-8",
      });

      const ipfs = await client.storeBlob(blob);

      const sdk = new DecentSDK(chain.id, signer);
      let nft;

      try {
        nft = await edition.deploy(
          sdk,
          "collectionName", // name
          "symbol", // symbol
          false, // hasAdjustableCap
          false, // isSoulbound
          "editionSize", // maxTokens
          ethers.utils.parseEther("tokenPrice"), // tokenPrice
          "maxTokenPurchase" || 100, // maxTokensPurchase
          null, //presaleMerkleRoot
          0, // presaleStart
          0, // presaleEnd
          0, // saleStart
          Math.floor((new Date()).getTime() / 1000 + (60 * 60 * 24 * 365)), // saleEnd = 1 year (default)
          parseFloat("royalty") * 100, // royaltyBPS
          ethers.constants.AddressZero, // payoutAddress (if not owner)
          `ipfs://${ipfs}/metadata.json`, // contractURI
          `ipfs://${ipfs}/metadata.json`, // metadataURI
          null, // metadataRendererInit
          null, // tokenGateConfig
          (pending: any) => { console.log("Pending nonce: ", pending.nonce) },
          (receipt: any) => { console.log("Receipt block: ", receipt.blockNumber) },
          undefined, //parentIP
        );
      } catch (error) {
        console.error(error);
      }
  } catch (error: any) {
    if (error.code === "INSUFFICIENT FUNDS") {
      console.error("get more $$, fren");
    }
  }
}