import React, { useEffect, useRef } from "react";
import Message from "./Message";

function ChatWindow({ messages }) {
  const chatWindowRef = useRef(null);

  
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-window" ref={chatWindowRef}>
      {messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </div>
  );
}

export default ChatWindow;
