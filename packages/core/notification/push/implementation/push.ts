import * as PushAPI from "@pushprotocol/restapi";
import { BasePushNotificationAPI } from "../base/BasePushAPI";

export class PushNotificationAPIModule extends BasePushNotificationAPI {
  constructor(config) {
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
}
