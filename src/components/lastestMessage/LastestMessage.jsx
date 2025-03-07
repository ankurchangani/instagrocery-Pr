import React from "react";
import { FaUserCircle } from "react-icons/fa";

const LatestMessage = () => {
  // Dummy data for messages
  const messages = [
    { id: 1, name: "John Doe", message: "Hey, how’s the order?", time: "2m ago" },
    { id: 2, name: "Sarah Lee", message: "The delivery was great!", time: "10m ago" },
    { id: 3, name: "Michael Scott", message: "Need help with checkout.", time: "1h ago" },
    { id: 3, name: "Michael Scott", message: "Need help with checkout.", time: "1h ago" },
    { id: 3, name: "Michael Scott", message: "Need help with checkout.", time: "1h ago" },

  ];

  return (
    <div className=" bg-white shadow-md p-4 rounded-lg w-[400px] h-[350px]">
      <h3 className="text-lg font-semibold mb-3">Latest Messages</h3>
      <div className="space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-center space-x-3 border-b pb-2 last:border-none">
            <FaUserCircle className="text-gray-500 text-2xl" />
            <div className="flex-1">
              <p className="text-sm font-medium">{msg.name}</p>
              <p className="text-xs text-gray-500">{msg.message}</p>
            </div>
            <span className="text-xs text-gray-400">{msg.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestMessage;
