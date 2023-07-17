import { toast } from "react-toastify";

const isWalletReadyToSign = (
  signer: any,
  activeChain: any,
  desiredChain: any,
  switchNetwork: any
) => {
  if (!signer) {
    toast.error("Please connect wallet.");
    return;
  }
  if (activeChain.id !== desiredChain.id) {
    toast.error(`Wrong network. Please switch to ${desiredChain.name}`);
    switchNetwork?.(desiredChain.id);
    return;
  }
  return true;
};

export default isWalletReadyToSign;
