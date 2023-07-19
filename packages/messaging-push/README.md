## Push Protocol Chat SDK
The @dapp-sdk/messaging-push allows to integrate Push Chat features into the dapp, including wallet to wallet chat and group chat. By integrating Push Chat SDK, you can setup messaging and support chat between users

## Installation
To start using Push Chat SDK, follow this steps :

## Install the package :
```bash
npm i @dapp-sdk/messaging-push
```
## Import the SDK 
Once installed, import the SDK and create an object of the class ```PushAPIModule``` with the config, and this object can be used to access various class methods to interact with Push Chat features

## Example :

### Create a user

```typescript

const pushAPI = new PushAPIModule({ env: ENV.STAGING });

async function createUser(signer: ethers.Signer) {
  const user = await pushAPI.createUser({
    signer: signer,
  });

  console.log("Push API response for createUser(): ", user);
  return user;
}
```

### Send a message

```typescript
async function sendMessage(
  publicAddress: string,
  signer: ethers.Signer,
  publicAddress2: string
) {
  // Fetch user
  const user = await getUser(publicAddress);

  // Decrypt PGP Key
  const pgpDecryptedPvtKey = await pushAPI.getPgpPrivateKey({
    encryptedPGPPrivateKey: user.encryptedPrivateKey,
    signer: signer,
  });

  const response = await pushAPI.sendMessages({
    messageContent: "Hi from Push Chat!",
    messageType: "Text", // can be "Text" | "Image" | "File" | "GIF"
    receiverAddress: publicAddress2,
    signer: signer,
    pgpPrivateKey: pgpDecryptedPvtKey,
  });

  console.log("Push API response for sendMessage(): ", response);
  return response;
}
```

## Resources 
- **[Website](https://push.org)**
- **[GitHub](https://github.com/ethereum-push-notification-service)**
- **[Docs](https://docs.push.org)**
