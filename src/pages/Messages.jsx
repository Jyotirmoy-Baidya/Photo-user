
import React, { useState } from "react";
import ChatHeader from "../components/Message/ChatHeader";
import ChatInput from "../components/Message/ChatInput";
import ChatMessages from "../components/Message/ChatMessages";

const initialMessages = {
  primary: [
    { id: 1, name: "Gru", messages: [{ message: "Lorem ipsum dolor sit", time: "11:00" }] },
    { id: 2, name: "Gabimaru", messages: [{ message: "Hi", time: "10:58" }] },
    { id: 3, name: "Gabimaru", messages: [{ message: "Lorem ipsum", time: "10:58" }] },
    { id: 4, name: "Gabimaru", messages: [{ message: "Gabimaru Gabimaru", time: "10:58" }] },
  ],
  general: [
    { id: 5, name: "Gabimaru", messages: [{ message: "General message", time: "9:30" }] },
  ],
  request: [
    { id: 6, name: "Gabimaru", messages: [{ message: "Request message", time: "8:15" }] },
  ],
};

const MessageItem = ({ message, onClick }) => (
  <div className="flex items-center gap-3 py-2 cursor-pointer" onClick={onClick}>
    <img
      src="./assets/image.png"
      alt="profile"
      className="rounded-full w-12 h-12"
    />
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <h4 className="text-white font-semibold">{message.name}</h4>
        <span className="text-gray-400 text-xs">{message.messages[message.messages.length - 1].time}</span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm truncate">{message.messages[message.messages.length - 1].message}</p>
      </div>
    </div>
  </div>
);

const ChatSection = ({ messages, onSendMessage }) => {
  return (
    <div className="flex flex-col h-full">
      <ChatHeader messages={messages.name} />
      <div className="flex-grow overflow-y-auto">
        <ChatMessages messages={messages.messages} />
      </div>
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};

const MessageSection = () => {
  const [activeTab, setActiveTab] = useState("primary");
  const [selectedId, setSelectedId] = useState(null);
  const [messageData, setMessageData] = useState(initialMessages);

  // Function to handle sending a new message
  const handleSendMessage = (newMessageText) => {
    if (selectedId === null) return;

    const newMessage = {
       name: "me",
      message: newMessageText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // Update the selected contact's messages
    setMessageData((prevMessageData) => ({
      ...prevMessageData,
      [activeTab]: prevMessageData[activeTab].map((msg) =>
        msg.id === selectedId ? { ...msg, messages: [...msg.messages, newMessage] } : msg
      ),
    }));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="w-full md:w-1/4 bg-gray-800 p-4 md:border-r border-gray-600">
        <h2 className="text-white text-lg font-bold mb-4">Messages</h2>
        <div className="flex space-x-4 mb-4">
          {["Primary", "General", "Request"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`pb-2 ${activeTab === tab.toLowerCase() ? "border-b-2 border-white text-white" : "text-gray-400"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="space-y-4 overflow-y-auto">
          {messageData[activeTab].map((message) => (
            <MessageItem 
              key={message.id} 
              message={message} 
              onClick={() => setSelectedId(message.id)} 
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-3/4 flex-grow bg-gray-900 p-4">
        {messageData[activeTab].map((message) => (
          message.id === selectedId && 
            <ChatSection 
              key={message.id} 
              messages={message} 
              onSendMessage={handleSendMessage} 
            />
        ))}
      </div>
    </div>
  );
};

export default MessageSection;
