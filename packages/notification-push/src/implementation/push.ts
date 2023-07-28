import * as PushAPI from "@pushprotocol/restapi";
import { BasePushNotificationAPI } from "../base/BasePushNotificationAPI";
import { IConfig } from "../interfaces/pushinterfaces";

export class PushNotificationAPIModule extends BasePushNotificationAPI {
  constructor(config: IConfig) {
    super(config);
  }

  async sendNotification(
    params: PushAPI.ISendNotificationInputOptions
  ): Promise<PushAPI.ApiNotificationType> {
    try {
      const notification_response: any =
        await PushAPI.payloads.sendNotification(params);
      return notification_response;
    } catch (error) {
      console.error(`Failed to send notification: ${error}`);
      throw error;
    }
  }

  async getUserNotification(
    params: PushAPI.user.FeedsOptionsType
  ): Promise<any> {
    try {
      const user_notification_response: any = await PushAPI.user.getFeeds(
        params
      );
      return user_notification_response;
    } catch (error) {
      console.error(`Failed to get user notification: ${error}`);
      throw error;
    }
  }

  async getUserSpamNotification(
    params: PushAPI.user.FeedsOptionsType
  ): Promise<any> {
    try {
      const user_spam_notification_response: any = await PushAPI.user.getFeeds(
        params
      );
      return user_spam_notification_response;
    } catch (error) {
      console.error(`Failed to get user spam notification: ${error}`);
      throw error;
    }
  }

  async getSubscriptions(
    params: PushAPI.user.UserSubscriptionsOptionsType
  ): Promise<any> {
    try {
      const subscriptions_response: any = await PushAPI.user.getSubscriptions(
        params
      );
      return subscriptions_response;
    } catch (error) {
      console.error(`Failed to get subscriptions: ${error}`);
      throw error;
    }
  }

  async getChannelDetails(
    params: PushAPI.channels.GetChannelOptionsType
  ): Promise<any> {
    try {
      const channel_details_response: any = await PushAPI.channels.getChannel(
        params
      );
      return channel_details_response;
    } catch (error) {
      console.error(`Failed to get channel details: ${error}`);
      throw error;
    }
  }

  async getChannelSubscribers(
    params: PushAPI.channels.GetSubscribersOptionsType
  ): Promise<any> {
    try {
      const channel_subscribers_response: any =
        await PushAPI.channels.getSubscribers(params);
      return channel_subscribers_response;
    } catch (error) {
      console.error(`Failed to get channel subscribers: ${error}`);
      throw error;
    }
  }

  async searchChannels(
    params: PushAPI.channels.SearchChannelOptionsType
  ): Promise<any> {
    try {
      const search_channels_response: any = await PushAPI.channels.search(
        params
      );
      return search_channels_response;
    } catch (error) {
      console.error(`Failed to search channels: ${error}`);
      throw error;
    }
  }

  async optInChannel(
    params: PushAPI.channels.SubscribeOptionsType
  ): Promise<any> {
    try {
      await PushAPI.channels.subscribe({
        signer: params.signer,
        channelAddress: params.channelAddress,
        userAddress: params.userAddress,
        onSuccess: () => {
          console.log("opt in success");
        },
        onError: () => {
          console.error("opt in error");
        },
        env: this.config.env,
      });
    } catch (error) {
      console.error(`Failed to opt in channel: ${error}`);
      throw error;
    }
  }

  async optOutChannel(
    params: PushAPI.channels.UnSubscribeOptionsType
  ): Promise<any> {
    try {
      await PushAPI.channels.unsubscribe({
        signer: params.signer,
        channelAddress: params.channelAddress,
        userAddress: params.userAddress,
        onSuccess: () => {
          console.log("opt out success");
        },
        onError: () => {
          console.error("opt out error");
        },
        env: this.config.env,
      });
    } catch (error) {
      console.error(`Failed to opt out channel: ${error}`);
      throw error;
    }
  }
}
