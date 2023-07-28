import { PushNotificationAPIModule } from "../src/implementation/push";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";
const ethers = require("ethers");

describe("PushNotificationAPIModule", () => {
  let pushNotificationAPIModule: PushNotificationAPIModule;

  const PRIVATE_KEY =
    "0x89b53ba917d474eb9fab41d17d72a18f3ae09ac941c3e15048407c2ab96a0814";
  const SIGNER = new ethers.Wallet(PRIVATE_KEY);
  const PUBLIC_ADDRESS = SIGNER.address;
  console.log("PUBLIC_ADDRESS", PUBLIC_ADDRESS);

  beforeEach(() => {
    const config = {
      ENV: ENV.STAGING,
    };
    pushNotificationAPIModule = new PushNotificationAPIModule(config);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should send broadcast notification successfully", async () => {
    const mockNotificationParams = {
      signer: SIGNER,
      type: 1,
      identityType: 2,
      notification: {
        title: `[SDK-TEST] notification TITLE:`,
        body: `[sdk-test] notification BODY`,
      },
      payload: {
        title: `[sdk-test] payload title`,
        body: `sample msg body`,
        cta: "",
        img: "",
      },
      channel: `eip155:80001:${PUBLIC_ADDRESS}`,
      env: ENV.STAGING,
    };

    const response = await pushNotificationAPIModule.sendNotification(
      mockNotificationParams
    );
    expect(response).toBeDefined();
  });
  it("should send subset/targeted notification successfully", async () => {
    const mockNotificationParams = {
      signer: SIGNER,
      type: 4,
      identityType: 2,
      notification: {
        title: `[SDK-TEST] notification TITLE:`,
        body: `[sdk-test] notification BODY`,
      },
      payload: {
        title: `[sdk-test] payload title`,
        body: `sample msg body`,
        cta: "",
        img: "",
      },
      recipients: [PUBLIC_ADDRESS],
      channel: `eip155:80001:${PUBLIC_ADDRESS}`,
      env: ENV.STAGING,
    };

    const response = await pushNotificationAPIModule.sendNotification(
      mockNotificationParams
    );
    expect(response).toBeDefined();
  });
});
