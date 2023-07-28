import { BasePushVideo } from "../base/PushVideoBase";
import * as PushAPI from "@pushprotocol/restapi";
import { IConfig, InitVideo, LocalMediaStreamType, VideoAcceptType, VideoRequestType } from "../interface/interface";

export class PushVideoAPI extends BasePushVideo {
  constructor(config: IConfig) {
    super(config);
  }

  private videoObject: any;

  async initializeVideoObject(params: InitVideo): Promise<any> {
    try {
      this.videoObject = new PushAPI.video.Video(params);
      return this.videoObject;
    } catch (error) {
      throw error;
    }
  }

  async createLocalMediaStream(params: LocalMediaStreamType) {
    try {
      await this.videoObject.create(params);
    } catch (error) {
      throw error;
    }
  }

  async requestVideoCall(params: VideoRequestType) {
    try {
      await this.videoObject.request(params);
    } catch (error) {
      throw error;
    }
  }

  async acceptVideoCall(params: VideoAcceptType){
    try {
      await this.videoObject.acceptRequest(params);
    } catch (error) {
      throw error;
    }
  }

  async connectToVideoCall(params: object | any){
    try {
      await this.videoObject.connect(params);
    } catch (error) {
      throw error;
    }
  }

  async disconnectVideoCall(params: object | any) {
    try {
      await this.videoObject.disconnect(params);
    } catch (error) {
      throw error;
    }
  }

  async toggleVideo(params: object | any) {
    try {
      await this.videoObject.enableVideo(params);
    } catch (error) {
      throw error;
    }
  }

  async toggleAudio(params: object | any) {
    try {
      await this.videoObject.enableAudio(params);
    } catch (error) {
      throw error;
    }
  }
}
