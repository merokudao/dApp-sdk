import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta = {
  title: "Chats/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Create User",
  },
};

export const Medium: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Create User",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Create User",
  },
};
