import * as PushAPI from "@pushprotocol/restapi";
import {
  ApproveChatRequest,
  IConfig,
  conversationHashResponse,
} from "../interfaces/pushinterfaces";
import { BasePushAPI } from "../base/BasePushAPI";


export class PushAPIModule extends BasePushAPI {
  
    constructor(config) {
      super(config);
    }
  
    async createUser(
      createUserInput: PushAPI.user.CreateUserProps
    ): Promise<PushAPI.IUser> {
      try {
        const user = await PushAPI.user.create(createUserInput);
        return user;
      } catch (error) {
        console.error(`Failed to create user: ${error}`);
        throw error;
      }
    }
  
    async getUser(
      getUserInput: PushAPI.AccountEnvOptionsType
    ): Promise<PushAPI.IUser> {
      try {
        const user = await PushAPI.user.get(getUserInput);
        return user;
      } catch (error) {
        console.error(`Failed to get user: ${error}`);
        throw error;
      }
    }
  
    async fetchChats(
      fetchChatInput: PushAPI.chat.ChatsOptionsType
    ): Promise<PushAPI.IFeeds[]> {
      try {
        const chats = await PushAPI.chat.chats(fetchChatInput);
        return chats;
      } catch (error) {
        console.error(`Failed to fetch chats: ${error}`);
        throw error;
      }
    }
  
    async fetchChatRequest(
      fetchChatInput: PushAPI.chat.RequestOptionsType
    ): Promise<PushAPI.IFeeds[]> {
      try {
        const chatrequests = await PushAPI.chat.requests(fetchChatInput);
        return chatrequests;
      } catch (error) {
        console.error(`Failed to fetch chat request: ${error}`);
        throw error;
      }
    }
  
    async conversationHash(
      conversationHashInput: PushAPI.ConversationHashOptionsType
    ): Promise<conversationHashResponse> {
      try {
        const conversationHash = await PushAPI.chat.conversationHash(
          conversationHashInput
        );
        return conversationHash;
      } catch (error) {
        console.error(`Failed to get conversation hash: ${error}`);
        throw error;
      }
    }
  
    async latestChatBetweenTwoUsers(
      latestChatInput: PushAPI.chat.LatestMessagesOptionsType
    ): Promise<PushAPI.IMessageIPFS[]> {
      try {
        const latestChat = await PushAPI.chat.latest(latestChatInput);
        return latestChat;
      } catch (error) {
        console.error(`Failed to get latest chat between users: ${error}`);
        throw error;
      }
    }
  
    async chatHistoryBetweenTwoUsers(
      chatHistoryInput: PushAPI.chat.HistoricalMessagesOptionsType
    ): Promise<PushAPI.IMessageIPFS[]> {
      try {
        const chatHistory = await PushAPI.chat.history(chatHistoryInput);
        return chatHistory;
      } catch (error) {
        console.error(`Failed to get chat history between users: ${error}`);
        throw error;
      }
    }
  
    async getPgpPrivateKey(decryptPgpInput: any): Promise<any> {
      try {
        const pgpDecryptedPvtKey = await PushAPI.chat.decryptPGPKey(
          decryptPgpInput
        );
        return pgpDecryptedPvtKey;
      } catch (error) {
        console.error(`Failed to get PGP private key: ${error}`);
        throw error;
      }
    }
  
    async sendMessages(
      sendMessageInput: PushAPI.ChatSendOptionsType
    ): Promise<PushAPI.MessageWithCID> {
      try {
        const message_res = await PushAPI.chat.send(sendMessageInput);
        return message_res;
      } catch (error) {
        console.error(`Failed to send message: ${error}`);
        throw error;
      }
    }
  
    async approveRequest(
      approveRequestInput: ApproveChatRequest
    ): Promise<string> {
      try {
        const approve = await PushAPI.chat.approve(approveRequestInput);
        return approve;
      } catch (error) {
        console.error(`Failed to approve request: ${error}`);
        throw error;
      }
    }
  }