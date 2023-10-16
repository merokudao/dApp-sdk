export interface ResponseInterface {
  data: {
    success: boolean;
    username:string;
    credentialId:string;
    publicKey:string;
  };
}

export interface CredentialKey {
  id: string;
  publicKey: string;
  algorithm: "RS256" | "ES256";
}

export interface RegistrationEncoded {
  username: string;
  credential: CredentialKey;
  authenticatorData: string;
  clientData: string;
  attestationData?: string;
}

export interface AuthenticationEncoded {
    credentialId: string;
    authenticatorData: string;
    clientData: string;
    signature: string;
}
