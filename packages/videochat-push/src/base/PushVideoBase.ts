import VideoChatInterface from "../../../videochat-interface/src/index";
import { IConfig } from "../interface/interface";

export class BasePushVideo extends VideoChatInterface {
  config: IConfig;
  constructor(config: IConfig) {
    super();
    this.config = config;
  }

  initializeVideoObject(params: object | any): any {
    throw new Error("Method not implemented.");
  }

  createLocalMediaStream(params: object | any): any {
    throw new Error("Method not implemented.");
  }

  requestVideoCall(params: object | any): any {
    throw new Error("Method not implemented.");
  }

  acceptVideoCall(params: object | any): any {
    throw new Error("Method not implemented.");
  }

  connectToVideoCall(params: object | any): any {
    throw new Error("Method not implemented.");
  }

  disconnectVideoCall(params: object | any): any {
    throw new Error("Method not implemented.");
  }

  toggleVideo(params: object | any): any {
    throw new Error("Method not implemented.");
  }

  toggleAudio(params: object | any): any {
    throw new Error("Method not implemented.");
  }
}
