import PushAPIModule from "@dapp-sdk/messaging-push";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";
import ethers from "ethers";

const PRIVATE_KEY_1 = ethers.Wallet.createRandom().privateKey;
const PRIVATE_KEY_2 = ethers.Wallet.createRandom().privateKey;
const SIGNER_1 = new ethers.Wallet(PRIVATE_KEY_1);
const SIGNER_2 = new ethers.Wallet(PRIVATE_KEY_2);
const PUBLIC_ADDRESS_1 = SIGNER_1.address;
const PUBLIC_ADDRESS_2 = SIGNER_2.address;

const pushAPI = new PushAPIModule({ env: ENV.STAGING });

async function createUser() {
  const user = await pushAPI.createUser({
    signer: SIGNER_1,
  });

  console.log("Push API response for createUser(): ", user);
  return user;
}

async function getUser() {
  const user = await pushAPI.getUser({
    account: PUBLIC_ADDRESS_1,
  });

  console.log("Push API response for getUser(): ", user);
  return user;
}

// Get Chats of PUBLIC_ADDRESS_1
async function getChats() {
  // Fetch user
  const user = await getUser();

  // Decrypt PGP Key
  const pgpDecrpyptedPvtKey = await pushAPI.decryptPGPKey({
    encryptedPGPPrivateKey: user.encryptedPrivateKey,
    signer: SIGNER_1,
  });

  const response = await pushAPI.fetchChats({
    account: PUBLIC_ADDRESS_1,
    toDecrypt: true,
    pgpPrivateKey: pgpDecrpyptedPvtKey,
  });
  console.log("Push API response for getChats(): ", response);
  return response;
}
// Get Chat requests for PUBLIC_ADDRESS_1
async function getChatRequests() {
  // Fetch user
  const user = await getUser();

  // Decrypt PGP Key
  const pgpDecrpyptedPvtKey = await pushAPI.getPgpPrivateKey({
    encryptedPGPPrivateKey: user.encryptedPrivateKey,
    signer: SIGNER_1,
  });

  const response = await pushAPI.fetchChatRequest({
    account: PUBLIC_ADDRESS_1,
    toDecrypt: true,
    pgpPrivateKey: pgpDecrpyptedPvtKey,
  });

  console.log("Push API response for getChatRequests(): ", response);
  return response;
}

// getConversationHash between PUBLIC_ADDRESS_1 and PUBLIC_ADDRESS_2
async function getConversationHash() {
  const conversationHash = await pushAPI.conversationHash({
    account: PUBLIC_ADDRESS_1,
    conversationId: PUBLIC_ADDRESS_2, // Receiver Address
  });

  console.log(
    "Push API response for getConversationHash(): ",
    conversationHash
  );
  return conversationHash;
}

// getLatestChat between PUBLIC_ADDRESS_1 and PUBLIC_ADDRESS_2
async function getLatestChat() {
  // Fetch user
  const user = await getUser();
  // Decrypt PGP Key
  const pgpDecrpyptedPvtKey = await pushAPI.getPgpPrivateKey({
    encryptedPGPPrivateKey: user.encryptedPrivateKey,
    signer: SIGNER_1,
  });

  // Fetch conversation hash
  const conversationHash = await getConversationHash();

  const response = await pushAPI.latestChatBetweenTwoUsers({
    threadhash: conversationHash.threadHash,
    account: PUBLIC_ADDRESS_1,
    toDecrypt: true,
    pgpPrivateKey: pgpDecrpyptedPvtKey,
  });

  console.log("Push API response for getLatestChat(): ", response);
}

// Chat history between PUBLIC_ADDRESS_1 and PUBLIC_ADDRESS_2
async function getChatHistory() {
  // Fetch user
  const user = await getUser();

  // Decrypt PGP Key
  const pgpDecrpyptedPvtKey = await pushAPI.getPgpPrivateKey({
    encryptedPGPPrivateKey: user.encryptedPrivateKey,
    signer: SIGNER_1,
  });

  // Fetch conversation hash
  const conversationHash = await getConversationHash();

  const response = await pushAPI.chatHistoryBetweenTwoUsers({
    threadhash: conversationHash.threadHash,
    account: PUBLIC_ADDRESS_1,
    limit: 5,
    toDecrypt: true,
    pgpPrivateKey: pgpDecrpyptedPvtKey,
  });

  console.log("Push API response for getChatHistory(): ", response);
  return response;
}

// Send message
async function sendMessage() {
  // Fetch user
  const user = await getUser();

  // Decrypt PGP Key
  const pgpDecrpyptedPvtKey = await pushAPI.getPgpPrivateKey({
    encryptedPGPPrivateKey: user.encryptedPrivateKey,
    signer: SIGNER_1,
  });

  const response = await pushAPI.sendMessages({
    messageContent: "Hi from Push Chat!",
    messageType: "Text", // can be "Text" | "Image" | "File" | "GIF"
    receiverAddress: PUBLIC_ADDRESS_2,
    signer: SIGNER_1,
    pgpPrivateKey: pgpDecrpyptedPvtKey,
  });

  console.log("Push API response for sendMessage(): ", response);
  return response;
}

// Approve the chat request
async function approveChat() {
  // Fetch user
  const user = await getUser();

  // Decrypt PGP Key
  const pgpDecrpyptedPvtKey = await pushAPI.getPgpPrivateKey({
    encryptedPGPPrivateKey: user.encryptedPrivateKey,
    signer: SIGNER_1,
  });

  const approve = await pushAPI.approveRequest({
    status: "Approved",
    senderAddress: PUBLIC_ADDRESS_2,
    signer: SIGNER_1,
    pgpPrivateKey: pgpDecrpyptedPvtKey,
  });

  console.log("Push API response for approveChat(): ", approve);
}
