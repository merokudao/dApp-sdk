 import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";

const getReleases: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const chainIds = req.query.chainIds as string;
  const matchItem = req.query.matchItem as string;
  const matchingArray = req.query.matchingArray as string;

  const cleanIds = chainIds.split(",");
  const cleanArray = matchingArray.split(",");

  try {
    const url = `https://hq.decent.xyz/api/1.0/contracts/${cleanIds[0]}%2C${cleanIds[1]}%2C${cleanIds[2]}%2C${cleanIds[3]}`
    const { data: nfts } = await axios.get(url, {
      params: {
        limit: 100000, 
        page: 0, 
        sort: -1
      },
      headers: {
        accept: 'application/json',
        'x-api-key': `${process.env.DECENT_API_KEY}`
      }
    });
    let projectNFTs = [];
    for (let i = 0; i < cleanArray.length; i++) {
      for (let j = 0; j < nfts.data.length; j++) {
        if (matchItem === 'symbol') {
          if (cleanArray[i] === nfts.data[j].data.symbol) {           
            projectNFTs.push(nfts.data[j]);
          }
        } else if (matchItem === 'address') {
          if (cleanArray[i] === nfts.data[j].address) {           
            projectNFTs.push(nfts.data[j]);
          }
        } else if (matchItem === 'creatorAddress') {
          if (cleanArray[i] === nfts.data[j].creator.address) {           
            projectNFTs.push(nfts.data[j]);
          }
        }
      }
    }
    let sorted = projectNFTs.sort((a,b) => b.data.totalSupply - a.data.totalSupply);
    res.status(200).json(sorted);
  } catch (e) {
    console.error(e)
    res.status(500).end();
  }
}

export default getReleases;