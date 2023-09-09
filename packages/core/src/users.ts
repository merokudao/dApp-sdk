import * as PushAPI from "@pushprotocol/restapi";

export abstract class User {

  abstract createUser(userInput: object | any): void;

  abstract getUser(userInput: object | any): void;

  abstract fetchChats(fetchChatInput: object | any): void;

  abstract latestChatBetweenTwoUsers(latestChatInput: object | any): void;

  abstract chatHistoryBetweenTwoUsers(chatHistoryInput: object | any): void;

  abstract sendMessages(sendMessageInput: object | any): void;

}
