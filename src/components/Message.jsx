import React from "react";

function Message({ message }) {
  const messageClass =
    message.sender === "user" ? "user-message" : "bot-message";
  return (
    <div className={`message-container ${message.sender}`}>
      <div className={`message ${messageClass}`}>
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
