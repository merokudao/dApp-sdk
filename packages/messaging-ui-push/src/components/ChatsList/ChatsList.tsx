import React from "react";
import "./ChatsList.css";
import { ChatsListProps, IFeeds } from "./interface";

const ChatsList: React.FC<ChatsListProps> = ({
  chats,
  containerStyle,
  chatItemStyle,
  profilePictureStyle,
  chatInfoStyle,
  chatNameStyle,
  chatTimestampStyle,
  chatMessageStyle,
  dark,
  onChatItemClick,
}) => {
  const handleChatItemClick = (chat: IFeeds) => {
    if (onChatItemClick) {
      onChatItemClick(chat);
    }
  };

  const formatDate = (timestamp: Date) => {
    const chatDate = new Date(timestamp);
    const currentDate = new Date();

    if (
      chatDate.getDate() === currentDate.getDate() &&
      chatDate.getMonth() === currentDate.getMonth() &&
      chatDate.getFullYear() === currentDate.getFullYear()
    ) {
      // Show time if the date is today
      return chatDate.toLocaleTimeString();
    } else {
      // Show date in the format "day month" if the timestamp is older
      return chatDate.toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
      });
    }
  };

  return (
    <div
      className={`${dark ? "chat-list dark-mode" : "chat-list"}`}
      style={containerStyle}
    >
      {chats.map((chat) => (
        <div
          key={chat.chatId}
          className="chat-item"
          style={chatItemStyle}
          onClick={() => handleChatItemClick(chat)}
        >
          <img
            src={chat.profilePicture!}
            alt="Profile"
            className="profile-picture"
            style={profilePictureStyle}
          />
          <div className="chat-details" style={chatInfoStyle}>
            <div className="chat-info">
              <h3 className="chat-name" style={chatNameStyle}>
                {chat.wallets.slice(7) || "Unknown User"}
              </h3>
              <span className="chat-timestamp" style={chatTimestampStyle}>
                {formatDate(chat.intentTimestamp)}
              </span>
            </div>
            <p className="chat-message" style={chatMessageStyle}>
              {chat.msg.messageContent}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatsList;
