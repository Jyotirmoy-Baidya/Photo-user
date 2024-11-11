
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="p-3 border-t border-gray-600 bg-gray-700">
      <form className="flex" onSubmit={sendMessage}>
        <input
          className="flex-grow p-2 bg-gray-600 text-white rounded-l-md focus:outline-none"
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
         <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full focus:outline-none flex justify-center items-center shadow-md">
      <FontAwesomeIcon icon={faPaperPlane} className="mr-2 h-4 w-4" />
      Send
    </button>
      </form>
    </div>
  );
};

export default ChatInput;
