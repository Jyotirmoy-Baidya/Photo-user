
import React from "react";

const ChatHeader = ({ messages }) => (
  <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-600">
    <div className="flex items-center">
      <img
        className="rounded-full w-10 h-10"
        src="./assets/image.png"
        alt="Profile"
      />
      <div className="ml-3">
        <h4 className="text-white font-semibold">{messages}</h4>
        <p className="text-green-400 text-sm">Online</p>
      </div>
    </div>
    {/* <div className="flex space-x-3">
      <i className="text-gray-400 cursor-pointer">🔍</i>
      <i className="text-gray-400 cursor-pointer">⋮</i>
    </div> */}
  </div>
);

export default ChatHeader;
