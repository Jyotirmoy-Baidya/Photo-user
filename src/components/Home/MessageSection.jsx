import React, { useState } from "react";

const messages = {
    primary: [
        { name: "Gabimaru", message: "Lorem ipsum dolor sit", time: "11:00", new: 1 },
        { name: "Gabimaru", message: "Hi", time: "10:58", new: 1 },
        { name: "Gabimaru", message: "Lorem ipsum", time: "10:58", new: 1 },
        { name: "Gabimaru", message: "Gabimaru Gabimaru", time: "10:58", new: 1 },
    ],
    general: [
        { name: "Gabimaru", message: "General message", time: "9:30", new: 1 },
    ],
    request: [
        { name: "Gabimaru", message: "Request message", time: "8:15", new: 0 },
    ],
};

const MessageItem = ({ message }) => (
    <div className="flex items-center gap-3 py-2">
        <img
            src="./assets/image.png"
            alt="profile"
            className="rounded-full w-10 h-10"
        />
        <div className="flex-1 gap-1">
            <div className="flex justify-between items-center">
                <h4 className="text-white">{message.name}</h4>
                <span className="text-blue-400 text-xs">{message.time}</span>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">{message.message}</p>
                {message.new ? (
                    <span className="bg-primary-blue text-white text-xs rounded-full px-[6px] py-[1.5px]">
                        {message.new}
                    </span>
                ) : null}
            </div>
        </div>
    </div>
);

const MessageSection = () => {
    const [activeTab, setActiveTab] = useState("primary");

    return (
        <div className="p-4 rounded-lg bg-primary-gray">
            <div className="text-xl font-medium tracking-wider text-white mb-2">Messages</div>
            <div className="flex gap-6 border-b border-gray-700 my-4">
                {["Primary", "General", "Request"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`${activeTab === tab.toLowerCase()
                            ? "text-white font-semibold border-b-2 border-white"
                            : "text-gray-400"
                            } pb-2`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="space-y-4 max-h-64 overflow-scroll hide-scrollbar">
                {messages[activeTab].map((message, index) => (
                    <MessageItem key={index} message={message} />
                ))}
            </div>
        </div>
    );
};

export default MessageSection;
