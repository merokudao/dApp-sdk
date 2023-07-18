import * as PushAPI from "@pushprotocol/restapi";
import { PushAPIModule } from "../src/PushImplementation";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";
const ethers = require("ethers");

describe("PushAPIModule", () => {
  let pushAPIModule: PushAPIModule;

  const PRIVATE_KEY = ethers.Wallet.createRandom().privateKey;
  const SIGNER = new ethers.Wallet(PRIVATE_KEY);
  const PUBLIC_ADDRESS = SIGNER.address;
  console.log("PUBLIC_ADDRESS", PUBLIC_ADDRESS);

  beforeEach(() => {
    const config = {
      ENV: ENV.STAGING,
    };
    pushAPIModule = new PushAPIModule(config);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a user successfully", async () => {
    const mockCreateUserProps = {
      signer: SIGNER,
      env: ENV.STAGING,
    };

    const user = await pushAPIModule.createUser(mockCreateUserProps);
    expect(user).toBeDefined();
  });

  it("should get a user successfully", async () => {
    const mockGetUserInput = {
        account: PUBLIC_ADDRESS,
        env: ENV.STAGING,
    }
    const user = await pushAPIModule.getUser(mockGetUserInput);
    const mock = await PushAPI.user.get(mockGetUserInput);
    expect(user).toBeDefined();
    expect(user).toEqual(mock);
  });

  it("should fetch chats successfully", async () => {
    const mockFetchChatInput = {
        account: PUBLIC_ADDRESS,
        env: ENV.STAGING,
    }
    const chats = await pushAPIModule.fetchChats(mockFetchChatInput);
    const mock = await PushAPI.chat.chats(mockFetchChatInput);
    expect(chats).toBeDefined();
    expect(chats).toEqual(mock);
  })
});