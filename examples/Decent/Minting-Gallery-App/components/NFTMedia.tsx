import Image from "next/image";
import getIpfsLink from "../lib/getIpfsLink";
import { useState, useEffect } from "react";

interface NFTMedia {
  ipfsImage: string;
  ipfsAnimation: string;
  mimeType: string;
  width?: number;
  height?: number
}

const NFTMedia = ({ipfsImage, ipfsAnimation, mimeType, width, height}: NFTMedia) => {
  const [mediaType, setMediaType] = useState<string>('image');

  useEffect(() => {
    if (mimeType?.includes('video')) {
      setMediaType('video');
    } else {
      setMediaType('image');
    }
  }, [mediaType, mimeType]);

  return (
    <div className="relative">
      {mediaType === 'image' ? 
        <Image 
          className="aspect-square" 
          src={getIpfsLink(ipfsImage)}
          placeholder="blur"
          blurDataURL={"/images/placeholder.png"}
          alt="" 
          width={width || 360} 
          height={height || 360}
        /> :   
      mediaType === 'video' ? 
        <video className="max-h-[360px] aspect-video" height={height || 360} width={width || 360} controls src={getIpfsLink(ipfsAnimation)}></video> : 
        <div className="relative">
        <Image className="rounded-md" src="/images/card1.png" alt="" width={360} height={360} />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-[500] text-sm tracking-widest">Unsupported File Type</p>
      </div> 
      }
    </div>
  )
}

export default NFTMedia