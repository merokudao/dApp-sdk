import React from "react";
import { render } from "@testing-library/react";
import ChatInput from "./ChatInput";

describe("ChatInput", () => {
  test("renders the ChatInput component", () => {
    render(
      <ChatInput
        onSendMessage={(e) => {
          console.log(e);
        }}
        placeholder="Please type a message"
      />
    );
  });
});
