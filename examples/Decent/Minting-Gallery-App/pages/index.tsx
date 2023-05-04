import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import absoluteUrl from '../lib/absoluteUrl';
import { useState, useEffect } from "react";
import MintButton from '../components/MintButton';
import NFTMedia from '../components/NFTMedia';
import Navbar from '../components/Navbar/Navbar';
import getIpfsLink from '../lib/getIpfsLink';

const Home: NextPage = (props: any) => {
  const [activeNft, setActiveNft] = useState<any>();
  useEffect(() => {
    setActiveNft(props.nfts[0])
  }, [props.nfts])

  return <>
    <Head>
      <title>Decent Portfolio</title>
      <meta
        name="description"
        content='Custom mint site by decent.xyz to curate NFTs deployed through the protocol.'
      />
      <link rel="icon" href="/images/decent-icon.png" />
    </Head>
    <Navbar name="Charlie" />
    <div className={`${styles.container} min-h-screen flex flex-wrap relative`}>
      <div className='md:sticky top-0 z-10 right-0 md:w-1/2 w-full h-screen flex items-center pt-12'>
        {activeNft &&
        <div className='tracking-widest w-full'>
            <div className='relative flex justify-center mb-4'>
              <NFTMedia 
                ipfsImage={activeNft.metadata.image} 
                ipfsAnimation={activeNft.metadata?.animation_url} 
                mimeType={activeNft.mimeType} 
                width={260} 
                height={260} />
              <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                {activeNft.mimeType?.includes('audio') &&
                <audio
                  controls
                  src={getIpfsLink(activeNft.metadata?.animation_url)}
                  className="h-4 my-1 w-56"
                ></audio>
              }</div>
          </div>
          <div className='items-end border-b border-black flex gap-4 border-b border-black'>
            <p className='p-2'>Selected:</p>
            <p className='p-2 font-medium text-lg'>{activeNft.metadata.name}</p>
          </div>
          <div className='grid border-b border-black grid-cols-2'>
            <p className='border-r border-black p-2'>Creator:</p>
            <p className='p-2'>{activeNft.creator?.ensName || `${activeNft.creator?.address.slice(0, 6)}…${activeNft.creator?.address.slice(38, 42)}`}</p>
          </div>
          <div className='grid border-b border-black grid-cols-2'>
            <p className='border-r border-black p-2'>Description:</p>
            <p className='p-2 h-[20vh] overflow-auto'>{activeNft.metadata.description}</p>
          </div>
          <div className='grid border-b border-black grid-cols-2'>
            <p className='border-r border-black p-2'>Statistics:</p>
            <p className='p-2'>{activeNft.data.totalSupply} / {activeNft.data.MAX_TOKENS > 9999999 ? 'Open' : activeNft.data.MAX_TOKENS} Minted</p>
          </div>
          <div className='grid border-b border-black grid-cols-2'>
            <p className='border-r border-black p-2'>Buy one:</p>
            <p className='px-2'>
              <MintButton chainId={activeNft.chainId} price={activeNft.data.tokenPrice} quantity={1} contractAddress={activeNft.address} className="font-medium hover:opacity-80 bg-black px-12 py-1 rounded-full text-white" />
            </p>
          </div>
        </div>}
      </div>
      <div className='md:w-1/2 w-full mt-20 relative'>
        <div className='flex-1 overflow-auto flex flex-col justify-center items-center'>
          <div className='grid grid-cols-2 gap-12 place-items-center'>
            {props.nfts && props.nfts.map((nft:any, i:number) => {
              return (
                <div onClick={() => setActiveNft(nft)} key={i} className='cursor-pointer'>
                  <div className='relative flex justify-center'><>
                    <div className='aspect-square'>
                    <NFTMedia 
                      ipfsImage={nft.metadata?.image} 
                      ipfsAnimation={nft.metadata?.animation_url} 
                      mimeType={nft.mimeType} 
                      width={220} 
                      height={220} />
                    </div>
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                    {nft.mimeType?.includes('audio') &&
                      <audio
                        controls
                        src={getIpfsLink(nft.metadata?.animation_url)}
                        className="h-4 my-1 w-48"
                      ></audio>
                    }</div>
                  </></div>
                  <p className="py-1 text-lg truncate w-[220px]">{nft.metadata.name}</p>
                  <p className="text-sm truncate w-[220px]">{nft.creator?.ensName || `${nft.creator?.address.slice(0, 6)}…${nft.creator?.address.slice(38, 42)}`}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    <footer className='mt-8 py-4 justify-center flex items-center border-t border-black'>
    <p className='pr-2 tracking-widest text-sm font-[400]'>Powered by </p>
    <Link href="http://decent.xyz/" className='pt-1'>
        <Image src='/images/decent.png' height={12} width={85} alt='Decent 💪' />
      </Link>
    </footer>
  </>;
};

export default Home;

export async function getStaticProps() {
  // INPUTS TO FETCH YOUR CURATED SET OF NFTS
  // ex. creatorAddress: nvak collective - 0xDB83ea3B2A65300078532966Fd48322518632EE4
  // ex. symbols: RCGS1, BNCMVGS4
  // ex. addresses: 0xC9AB1884Cf178946BF4B2645bc44FcC1429ea614, 0x175eDB154Ed7a0E54410A7f547Aaa7e3fbF21a34
  const identifiers = ["RCGS1"];

  // 1: Ethereum
  // 137: Polygon
  // 10: Optimism
  // 42161: Arbitrum
  const chainIds = ['1', '137', '10', '42161'];

  // pick between 'symbol' ; 'address' ; 'creatorAddress'
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