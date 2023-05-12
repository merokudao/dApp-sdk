# Polygon ID
### Identity infrastructure for Web3 

## What is Polygon ID?

Polygon ID enables trust issuers to connect with trust verifiers. Individuals receive and store claims like a KYC check in a personal wallet, and use zero-knowledge (ZK) proofs to privately verify the statements made about them. Polygon ID can securely interact with smart contracts and other identities without revealing personal information.

## What We Do

Polygon ID gives you the power to build trusted and secure relationships between users and dApps, following the principles of self sovereign identity and privacy by default.

## Core Concepts of Polygon ID: Verifiable Credentials, Identity Holder, Issuer and Verifier (Triangle of Trust)

Every identity is identified by a unique identifier called [DID (Decentralized Identifier)](https://www.w3.org/TR/did-core/). Every identity-based information is represented via a [Verifiable Credentials (VCs)](https://www.w3.org/TR/vc-data-model/).  In the simplest terms, a VC represents any type of information related to an individual/enterprise/object. The VC could be as simple as the age of the entity or the highest degree held by it. It could be a membership certificate issued by a DAO, for instance.

The toolset made available by Polygon ID is fully compliant with the W3C standards. We have a [definition spec. for the Polygon ID DID method](https://github.com/0xPolygonID/did-polygonid).

The architecture of the framework is composed of three modules: Identity Holder, Issuer, and Verifier. These three, together, form what we call the **Triangle of Trust**. Let us see what role each entity plays in Polygon ID. 

1. **Identity Holder**: An entity that holds claims in its [Wallet](https://0xpolygonid.github.io/tutorials/wallet/wallet-overview/). A VC, as mentioned above, is issued by an Issuer to the Holder. The Identity Holder generates zero-knowledge proofs of the VCs issued and presents these proofs to the Verifier, which verifies that the proof is authentic and matches specific criteria. 

2. [**Issuer**](https://0xpolygonid.github.io/tutorials/issuer/issuer-overview/): An entity (person, organization, or thing) that issues VCs to the Holders. VCs are cryptographically signed by the Issuer. Every VC comes from an Issuer. 

3. [**Verifier**](https://0xpolygonid.github.io/tutorials/verifier/verifier-overview/): A Verifier verifies the proof presented by a Holder. It requests the Holder to send a proof based on the VCs they hold in their wallet. While verifying a proof, the Verifier performs a set of checks, for example that the VC was signed by the expected Issuer and that the VC matches the criteria requested by the Verifier. The simplest examples of a Verifier is a Bar that wants to verify if you are over 18. In the real world, the Identity Holder would need to provide an ID and show all their personal information. With Polygon ID, they only need to pass a proof.

A core concept here is the *trust* that must exist between a Verifier and an Issuer: the fact that the information contained inside a VC is cryptographically verifiable doesn't guarantee its truth. The Issuer must be a trusted and reputable party so that Verifier can consume the VCs originated by that Issuer.

**The verification of a VC can happen either off-chain or on-chain.**

<div align="center">
<img src= "./triangle-of-trust-simple.png" align="center" width="50%"/>
</div>
<br>

## How we do it

You can follow these links and understand how to:

- [Setup issuer node](https://0xpolygonid.github.io/tutorials/issuer-node/issuer-node-guide/)
- [Run a verifier](https://0xpolygonid.github.io/tutorials/verifier/verification-library/verifier-set-up/#verifier-client-setup)
- [Check our smart contracts](https://0xpolygonid.github.io/tutorials/contracts/overview/)
- [Use our mobile SDK plugin](https://0xpolygonid.github.io/tutorials/wallet/wallet-sdk/polygonid-sdk/polygonid-sdk-plugin/)
- [Create a browser wallet demo](https://0xpolygonid.github.io/tutorials/js-sdk/js-sdk-browser-wallet-demo/)

## Demos and dApps

- [Polygon ID demo issuer](https://issuer-demo.polygonid.me/)
- [Polygon ID refernce app iOS](https://apps.apple.com/us/app/polygon-id/id1629870183)
- [Polygon ID refernce app Android](https://play.google.com/store/apps/details?id=com.polygonid.wallet&pli=1)
- [Polygon ID demo verifier](https://verifier-demo.polygonid.me/)

## Other important Links

- [Polygon ID website](https://polygon.technology/polygon-id)
- [Polygon ID GitHub](https://github.com/0xPolygonID)
- [Polygon ID docs](https://0xpolygonid.github.io/tutorials/)
- [Polygon ID ecosystem](https://ecosystem.polygon.technology/PolygonID/)
- [Learn ID](https://www.youtube.com/playlist?list=PLslsfan1R_z2PW_cRkBumQiUJs4tPc455)

###### Polygon ID and Iden3

<a href="https://iden3.io/" target="_blank">Iden3</a> is the open-source protocol at the basis of Polygon ID. The protocol defines on a low-level how the parties listed above communicate and interact with each other. Polygon ID is an abstraction layer to enable developers to build applications leveraging the Iden3 protocol.
