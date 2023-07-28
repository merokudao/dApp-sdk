import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChatInput from './ChatInput';

const meta:Meta = {
  title: 'Chats/ChatInput',
  component: ChatInput,
 
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;


const handleSendMessage = (message:any) => {
  action('Event ')(message);
};

export const Input: Story = {
  args: {
    placeholder:`Type a message...`,
    onSendMessage: handleSendMessage

  },
};

