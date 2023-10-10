import axios from "axios";
import { client } from "@passwordless-id/webauthn";
import { AuthenticationEncoded, ResponseInterface } from "./interface.js";
import { config } from "dotenv";
import { WebAuthnNotSupportedError, AuthenticationFailError } from "./errorClass.js";

config();

const BASE_URL = process.env.API_BASE_URL || "https://uim-alpha.meroku.org";

export async function authenticateUser(username: string, origin:string): Promise<string> {
  try {
    if (client.isAvailable()) {
      const challengeResponse = await axios.post(
        `${BASE_URL}/request-challenge`,
        { username }
      );
      const challenge = challengeResponse.data.challenge;

      const credentialsResponse = await axios.get(
        `${BASE_URL}/credentials/${username}`
      );
      const credentials = credentialsResponse.data.credentialIds;

      const authentication:AuthenticationEncoded = await client.authenticate(credentials, challenge, {
        authenticatorType: "auto",
        userVerification: "required",
        timeout: 60000,
      });

      const authResponse: ResponseInterface = await axios.post(
        `${BASE_URL}/authenticate`,
        {
          challenge,
          authentication,
          origin
        }
      );

      if (authResponse.data.success) {
        const response = await axios.get(
          `${BASE_URL}/credentials/${username}`
        );
        if (response.data && response.data.walletAddress) {
          return response.data.walletAddress;
        } else {
          throw new Error("Wallet address not found");
        }
      }else{
        throw new AuthenticationFailError("Authentication failed !");
      }
    } else {
      throw new WebAuthnNotSupportedError("WebAuthn not supported on the current platform");
    }
  } catch (error: any) {
    throw new Error("Authentication failed: " + error.message);
  }
}
