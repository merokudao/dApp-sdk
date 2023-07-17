import { DecentSDK, edition } from "@decent.xyz/sdk";
import { useSigner, useAccount, allChains, useSwitchNetwork, useNetwork } from "wagmi";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { useState } from "react";
import handleTxError from "../lib/handleTxError";
import isWalletReadyToSign from "../lib/isWalletReady";

const MintButton = (props:any) => {
  const { data:signer } = useSigner();
  const { address:account } = useAccount();
  const [isMinting, setIsMinting] = useState(false);
  const { switchNetwork } = useSwitchNetwork();
  const { chain: activeChain } = useNetwork();

  const onSigning = (isMinting:boolean) => {
    setIsMinting(isMinting || false);
  };

  const onSuccess = (receipt:any) => {
    if (receipt) setIsMinting(false);
  };

  const onSuccessfulMint = async (receipt:any) => {
    onSuccess?.(receipt);
    toast.success("Minted successfully.");
  }

  const mint = async () => {
    const desiredChain = allChains.find((c) => c.id == props.chainId);
    if (!isWalletReadyToSign(signer, activeChain, desiredChain, switchNetwork))
      return;

    if (signer && account) {
      try {
        onSigning?.(true);
        const sdk = new DecentSDK(props.chainId, signer);
        const to = account;
        const price:number = props.price * props.quantity;
        const nft = await edition.getContract(sdk, props.contractAddress);
        const tx = await nft.mint(to, props.quantity, { value: ethers.utils.parseEther(price.toString()) });
        const receipt = await tx.wait();
        await onSuccessfulMint(receipt);
      } catch (error) {
        handleTxError(error);
        onSigning?.(false);
      }
    } else {
      toast.error("Please connect wallet to continue.");
    }
  }

  return <div className="flex gap-4 py-2 items-center px-4 sm:px-0">
      <button disabled={isMinting} className={`${props.className}`} onClick={mint}>{isMinting ? "..." : "Mint"}</button>
    </div>;
};

export default MintButton;