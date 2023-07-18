import * as PushAPI from "@pushprotocol/restapi";

abstract class AbstractPushAPI{
    abstract createUser(
        userInput: PushAPI.user.CreateUserProps
      ): Promise<PushAPI.IUser>;
    
      abstract getUser(
        userInput: PushAPI.AccountEnvOptionsType
      ): Promise<PushAPI.IUser>
    
      abstract fetchChats(
        fetchChatInput: PushAPI.chat.ChatsOptionsType
      ): Promise<PushAPI.IFeeds[]>

      abstract fetchChatRequest(
        fetchChatInput: PushAPI.chat.RequestOptionsType
      ): Promise<PushAPI.IFeeds[]>
    
      abstract conversationHash(
        conversationHashInput: PushAPI.ConversationHashOptionsType
      ): Promise<any>
    
      abstract latestChatBetweenTwoUsers(
        latestChatInput: PushAPI.chat.LatestMessagesOptionsType
      ): Promise<PushAPI.IMessageIPFS[]>
    
      abstract chatHistoryBetweenTwoUsers(
        chatHistoryInput: PushAPI.chat.HistoricalMessagesOptionsType
      ): Promise<PushAPI.IMessageIPFS[]> 
    
      abstract getPgpPrivateKey(decryptPgpInput: any): Promise<any>
    
      abstract sendMessages(
        sendMessageInput: PushAPI.ChatSendOptionsType
      ): Promise<PushAPI.MessageWithCID>
    
      abstract approveRequest(
        approveRequestInput
      ): Promise<string>
}

export default AbstractPushAPI;