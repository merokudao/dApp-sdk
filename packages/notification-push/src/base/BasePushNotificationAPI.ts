import * as PushAPI from "@pushprotocol/restapi";
import { IConfig } from "../interfaces/pushinterfaces";
import AbstractNotification from "../../../notification-interface/src/index";

export class BasePushNotificationAPI extends AbstractNotification {
  config: IConfig;
  constructor(config: IConfig) {
      super();
    this.config = config;
  }

  async sendNotification(
    params: PushAPI.ISendNotificationInputOptions
  ): Promise<PushAPI.ApiNotificationType> {
    throw new Error(
      "Method 'sendNotification' must be overridden in subclass."
    );
  }

  async getUserNotification(params: PushAPI.user.FeedsOptionsType) {
    throw new Error(
      "Method 'getUserNotification' must be overridden in subclass."
    );
  }

  async getUserSpamNotification(params: any) {
    throw new Error(
      "Method 'getUserSpamNotification' must be overridden in subclass."
    );
  }

  async getSubscriptions(params: any) {
    throw new Error(
      "Method 'getSubscriptions' must be overridden in subclass."
    );
  }

  async getChannelDetails(params: any) {
    throw new Error(
      "Method 'getChannelDetails' must be overridden in subclass."
    );
  }

  async getChannelSubscribers(params: any) {
    throw new Error(
      "Method 'getChannelSubscribers' must be overridden in subclass."
    );
  }

  async searchChannels(params: any) {
    throw new Error(
      "Method 'searchChannels' must be overridden in subclass."
    );
  }

  async optInChannel(params: any) {
    throw new Error(
      "Method 'optInChannel' must be overridden in subclass."
    );
  }

  async optOutChannel(params: any) {
    throw new Error(
      "Method 'optOutChannel' must be overridden in subclass."
    );
  }
}
