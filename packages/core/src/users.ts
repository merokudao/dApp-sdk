import * as PushAPI from "@pushprotocol/restapi";

export abstract class User {

  abstract createUser(userInput: object | any): void;

  abstract getUser(userInput: object | any): void;

}
