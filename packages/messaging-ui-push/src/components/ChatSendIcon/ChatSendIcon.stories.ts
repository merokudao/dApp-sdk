import { Meta, StoryObj } from "@storybook/react";
import SendIcon from "./ChatSendIcon";

const meta: Meta = {
  title: "Chats/SendIcon",
  component: SendIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;
const customStyles = {
  backgroundColor: "#e03dc1",
};
export const Small: Story = {
  args: {
    onClick: () => {},
    className: customStyles,
  },
};
