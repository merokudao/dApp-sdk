import React from "react";
import { FiSend } from "react-icons/fi"; // Import the send icon from the react-icons library
import "./ChatSendIcon.css"; // Import the CSS file for SendIcon

interface SendIconProps {
  onClick: () => void;
  className?: React.CSSProperties;
}

const SendIcon: React.FC<SendIconProps> = ({ onClick, className }) => {
  return (
    <button className={`send-button`} style={className} onClick={onClick}>
      <FiSend size={24} />
    </button>
  );
};

export default SendIcon;
