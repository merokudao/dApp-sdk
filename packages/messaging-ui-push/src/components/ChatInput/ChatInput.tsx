import React, { useState } from "react";
import "./ChatInput.css"; // Import the CSS file for ChatInput

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  placeholder,
}) => {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="chat-input-container">
      {" "}
      {/* Use the class name from the CSS file */}
      <input
        type="text"
        className="chat-input"
        placeholder={placeholder}
        value={message}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
    </div>
  );
};

export default ChatInput;
