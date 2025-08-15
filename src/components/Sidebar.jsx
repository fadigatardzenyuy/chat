import React from "react";

function Sidebar() {
  // Mock data for conversations
  const conversations = [
    { id: 1, title: "Getting Started with AI" },
    { id: 2, title: "React Project Ideas" },
    { id: 3, title: "History of Programming" },
  ];

  return (
    <aside className="sidebar">
      <h2>Conversations</h2>
      <ul className="conversation-list">
        {conversations.map((convo) => (
          <li key={convo.id} className="conversation-item">
            {convo.title}
          </li>
        ))}
      </ul>
      <button className="new-chat-button">+ New Chat</button>
    </aside>
  );
}

export default Sidebar;
