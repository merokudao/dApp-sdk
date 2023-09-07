import AbstractMessaging from "../../messaging-interface/src/index";

export abstract class User extends AbstractMessaging {

  abstract createUser(userInput: object | any): void;
  abstract getUser(userInput: object | any): void;
  abstract fetchChats(fetchChatInput: object | any): void;
  abstract fetchChatRequest(fetchChatInput: object | any): void;
  abstract conversationHash(conversationHashInput: object | any): void;
  abstract latestChatBetweenTwoUsers(latestChatInput: object | any): void;
  abstract chatHistoryBetweenTwoUsers(chatHistoryInput: object | any): void;
  abstract getPgpPrivateKey(decryptPgpInput: any): void;
  abstract sendMessages(sendMessageInput: object | any): void;
  abstract approveRequest(approveRequestInput: object | any): void;
}
