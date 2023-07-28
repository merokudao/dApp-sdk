import { ENV } from "@pushprotocol/restapi/src/lib/constants";
import * as PushAPI from "@pushprotocol/restapi";
import ethers from "ethers";

export interface IConfig {
  env?: ENV;
}

export interface InitVideo {
    signer: ethers.Signer;
    chainId: number;
    pgpPrivateKey: string;
    env?: ENV;
    setData: (fn: (data: PushAPI.VideoCallData) => PushAPI.VideoCallData) => void;
}

export interface LocalMediaStreamType{
  video?: boolean; // for frontend use
  audio?: boolean; // for frontend use
  stream?: MediaStream; // for backend use
}

export interface VideoRequestType{
  senderAddress: string;
  recipientAddress: string;
  chatId: string;
  onReceiveMessage?: (message: string) => void;
  retry?: boolean;
}

export interface VideoAcceptType{
  signalData: any;
  senderAddress: string;
  recipientAddress: string;
  chatId: string;
  onReceiveMessage?: (message: string) => void;
  retry?: boolean;
}