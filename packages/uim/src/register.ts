import { client } from "@passwordless-id/webauthn";
import axios from "axios";
import { RegistrationEncoded, ResponseInterface } from "./interface.js";

const BASE_URL = process.env.API_BASE_URL || "https://uim-alpha.meroku.org";

export async function registerUser(username: string,origin:string): Promise<string> {
  const challengeResponse = await axios.post(
    `${BASE_URL}/request-challenge`,
    { username }
  );
  const challenge = challengeResponse.data.challenge;

  let registration: RegistrationEncoded;
  let payload: any;

  try {
    registration = await client.register(
      username,
      challenge,
      {
        authenticatorType: "auto",
        userVerification: "required",
        timeout: 60000,
        attestation: false,
        debug: false,
      }
    );

    payload = {
      registration,
      origin
    }
  } catch (error) {
    throw new Error("Registration denied by the user");
  }

  let response: ResponseInterface;

  try {
    response = await axios.post(
      `${BASE_URL}/userIntention`,
      {
        userIntent: "register",
        payload
      }
    );

    return JSON.stringify(response.data);
  } catch (error) {
    throw new Error("Registration failed: " + error.message);
  }
}
