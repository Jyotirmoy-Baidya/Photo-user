
import React from "react";

const ChatMessages = ({ messages }) => (
  <div className="flex flex-col space-y-2 p-4">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`flex ${msg.name === "me" ? "justify-end" : "justify-start"}`}
      >
        <div
          className={`max-w-xs p-3 rounded-md ${
            msg.name === "me" ? "bg-blue-600 text-white" : "bg-gray-600 text-white"
          }`}
        >
          <p className="text-sm">{msg.message}</p>
          <span className="block text-xs text-gray-400">{msg.time}</span>
        </div>
      </div>
    ))}
  </div>
);

export default ChatMessages;
