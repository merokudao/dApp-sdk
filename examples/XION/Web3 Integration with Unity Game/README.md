# Setting up ThirdWeb and Xion Payment System in Unity using the FPS Microgame

This guide will show you how to integrate ThirdWeb SDK and Xion Pay APIs or .net SDK into an existing FPS Microgame template in Unity. This setup enables one-click crypto payments and a mechanism for instant digital asset delivery upon successful transactions.

<p align="center"> <img width="1792" alt="Screenshot 2023-05-19 at 12 14 35" src="https://github.com/xion-global/fps_unity_demo/assets/67911815/758e48d7-623d-4aab-b518-2d276d19e4d2"></p>


[Click here to watch how a one-click USDT Polygon payment works with the Xion Pay APIs in this Unity FPS Demo](https://twitter.com/xionglobal/status/1659499160905691136?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet)

# Requirements:
- Unity 2019.4.16f1 or later
- FPS Microgame template: [FPS Microgame](https://learn.unity.com/project/fps-template)
- ThirdWeb SDK: [ThirdWeb SDK](https://github.com/thirdweb-dev/unity-sdk/tree/main)
- Xion Pay APIs or .net SDK: [Xion Pay APIs](https://www.apimatic.io/apidocs/xionglobal/v/2_0_0#/net-standard-library/api-endpoints/api/single-bill-payment)

# Unity Setup
1. Start by downloading the above existing Unity project that has been setup using the FPS Microgame template.
2. Import the ThirdWeb SDK into the project.

# Integration
The scripts we will be using and/or modifying include **Prefab_Miscellaneous**, **Player Actions** and **ConnectWallet**. Prefab_Miscellaneous.cs can be found within the ThirdWebSdk prefab example scripts, as well as the ConnectWallet.cs script.

A new UI element has been added for the jetpack buy button. In the FPS Microgame, find the Canvas named **canvas_price**. We also have a payment spinner, find the UI Spinner called **canvas_spinner_jetpack**. As well as the **Weaponcrate_Jetpack** object that has the buy button, spinner and jetpack prefab attached.

**Player Actions Script:**

The Player Actions script is an essential component in making the interaction between the player and the game world possible. This script is attached to the player and requires a reference to the camera, buy button, processing spinner, and player activation distance.

This script not only controls the player movement, actions, and interactions, but also manages the UI states for the buy button and the processing spinner. It listens to events from the Prefab_Miscellaneous script such as OnPaymentProcessingStarted and OnPaymentProcessingEnded. These events respectively hide the buy button and show the spinner, and vice versa, providing visual feedback to the player about the payment status.

**Prefab Miscellaneous Script:**

This script is at the heart of the payment process. It uses the ThirdWeb SDK to check if the player has enough allowance to buy the item. If not, it sets the allowance for the player. This functionality enables one-click crypto payments: once the approval is done, the player can simply click to make the payment.

In the PayWithXion function, the script makes a POST request to the Xion Payment API. For this demo, the USDT Polygon token is used, but the Xion Payment APIs can accommodate a variety of different tokens and networks. Simply specify your desired token and network within this function. It's important that you replace the placeholder for the API key with a real key. You can generate this key by going to https://xionpay.app, navigating to the developer dashboard, and creating a new API key.

Upon a successful payment, the script creates an instance of a success object (in this case, a Jetpack prefab) and calls the OnPaymentProcessingEnded event. This success object represents the successful purchase and the player can claim the jetpack, providing instant gratification and delivery of the digital asset.

Please note that the actual payment process and response should be handled on the server-side in a production environment to ensure security.

**ConnectWallet Script:**

The ConnectWallet script, which is part of the ThirdWeb SDK, is responsible for allowing users to connect their digital wallets to the game. It interacts with the ConnectWallet prefab, also found in the ThirdWeb SDK.

This prefab should be added to your game scene where you want the wallet connection controls to appear. It includes UI elements that will let the player connect their wallet to the game. The ConnectWallet script attached to this prefab then handles the interaction with the ThirdWeb SDK to establish the connection to the player's wallet.

# Conclusion:

This guide has shown you how to integrate ThirdWeb and Xion Payment systems into an existing FPS Microgame template in Unity, allowing for one-click blockchain transactions and instant asset delivery upon successful payment within your game. Although this demo utilizes the USDT Polygon token, the Xion Payment APIs accommodate a wide range of different tokens and networks, granting you the flexibility to customize the transactional elements of your game to suit your specific needs.

All the necessary objects, canvases, and prefabs have been set up in the Unity project, and you will just need to locate them and modify them to suit your preference. This system provides an immersive and innovative method of transacting in a gaming environment, giving players the ability to use a variety of cryptocurrencies and connecting them more closely with the blockchain-powered gaming world.
