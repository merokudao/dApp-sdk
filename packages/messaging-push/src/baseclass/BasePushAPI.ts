import * as PushAPI from "@pushprotocol/restapi";
import {
  ApproveChatRequest,
  IConfig,
  conversationHashResponse,
} from "../interfaces/pushinterfaces";
import AbstractMessaging from "../../../messaging-interface/src/index";

export class BasePushAPI extends AbstractMessaging {
    config: IConfig;
    constructor(config: IConfig) {
        super();
      this.config = config;
    }
  
    async createUser(
      userInput: PushAPI.user.CreateUserProps
    ): Promise<PushAPI.IUser> {
      throw new Error("Method 'create' must be overridden in subclass.");
    }
  
    async getUser(
      userInput: PushAPI.AccountEnvOptionsType
    ): Promise<PushAPI.IUser> {
      throw new Error("Method 'get' must be overridden in subclass.");
    }
  
    async fetchChats(
      fetchChatInput: PushAPI.chat.ChatsOptionsType
    ): Promise<PushAPI.IFeeds[]> {
      throw new Error("Method 'fetchChats' must be overridden in subclass.");
    }
  
    async fetchChatRequest(
      fetchChatInput: PushAPI.chat.RequestOptionsType
    ): Promise<PushAPI.IFeeds[]> {
      throw new Error(
        "Method 'fetchChatRequest' must be overridden in subclass."
      );
    }
  
    async conversationHash(
      conversationHashInput: PushAPI.ConversationHashOptionsType
    ): Promise<conversationHashResponse> {
      throw new Error(
        "Method 'conversationHash' must be overridden in subclass."
      );
    }
  
    async latestChatBetweenTwoUsers(
      latestChatInput: PushAPI.chat.LatestMessagesOptionsType
    ): Promise<PushAPI.IMessageIPFS[]> {
      throw new Error(
        "Method 'latestChatBetweenTwoUsers' must be overridden in subclass."
      );
    }
  
    async chatHistoryBetweenTwoUsers(
      chatHistoryInput: PushAPI.chat.HistoricalMessagesOptionsType
    ): Promise<PushAPI.IMessageIPFS[]> {
      throw new Error(
        "Method 'chatHistoryBetweenTwoUsers' must be overridden in subclass."
      );
    }
  
    async getPgpPrivateKey(decryptPgpInput: any): Promise<any> {
      throw new Error(
        "Method 'getPgpPrivateKey' must be overridden in subclass."
      );
    }
  
    async sendMessages(
      sendMessageInput: PushAPI.ChatSendOptionsType
    ): Promise<PushAPI.MessageWithCID> {
      throw new Error("Method 'sendMessages' must be overridden in subclass.");
    }
  
    async approveRequest(
      approveRequestInput: ApproveChatRequest
    ): Promise<string> {
      throw new Error("Method 'approveRequest' must be overridden in subclass.");
    }
  }