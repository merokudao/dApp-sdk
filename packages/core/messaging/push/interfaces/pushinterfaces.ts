import { ENV } from "@pushprotocol/restapi/src/lib/constants";
import * as PushAPI from "@pushprotocol/restapi";

export interface IConfig {
    env?: ENV;
  }
  
export interface IUserRequest {
    env?: ENV;
    account?: string;
    signer?: string;
    version?: string;
    additionalMeta?: {
      NFTPGP_V1?: {
        password: string;
      };
    };
    progressHook?: (progress: PushAPI.ProgressHookType) => void;
  }
  
 export interface fetchChatRequest {
    account: string;
    toDecrypt?: boolean;
    pgpPrivateKey?: string;
    env?: ENV;
  }

  export interface conversationHashRequest{
    account: string;
    conversationId: string;
    env?: ENV;
  }

  export interface conversationHashResponse{
    threadHash: string;
  }

  export interface ApproveChatRequest{
    status: 'Approved',
  account: string,
  senderAddress : string,
  }
  