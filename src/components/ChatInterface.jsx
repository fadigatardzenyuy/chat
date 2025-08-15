import React from "react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

function ChatInterface({ messages, onSendMessage, isLoading }) {
  return (
    <main className="chat-interface">
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
    </main>
  );
}

export default ChatInterface;
