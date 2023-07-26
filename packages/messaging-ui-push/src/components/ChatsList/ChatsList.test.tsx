import React from "react";
import { render } from "@testing-library/react";
import ChatsList from "./ChatsList";

describe("ChatsList", () => {
  test("renders the ChatsList component", () => {
    render(<ChatsList chats={[]} />);
  });
});
