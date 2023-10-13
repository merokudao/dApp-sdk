export class WebAuthnNotSupportedError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "WebAuthnNotSupportedError";
    }
}

export class AuthenticationFailError extends Error {
    constructor(message : string) {
        super(message)
        this.name = "AuthenticationFailError"
    }
}
