import * as PushAPI from "@pushprotocol/restapi";
import { IConfig } from "../interfaces/pushinterfaces";

export abstract class BasePushNotificationAPI {
  config: IConfig;
  constructor(config: IConfig) {
    this.config = config;
  }

  async sendNotification(
    params: PushAPI.ISendNotificationInputOptions
  ): Promise<PushAPI.ApiNotificationType> {
    throw new Error(
      "Method 'sendNotification' must be overridden in subclass."
    );
  }
}
