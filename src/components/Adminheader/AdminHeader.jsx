import React, { useState } from "react";
import { FaUserCircle, FaBell } from "react-icons/fa";
import DetalisOrder from "../DetalisOrder/DetalisOrder";

const AdminHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex justify-between items-center bg-white shadow-md px-6 py-4 relative">
      <h1 className="text-2xl font-bold text-blue-600">InstaGrocery</h1>

      <div className="flex items-center space-x-4 relative">
        {/* Notification Bell Icon */}
        <div
          className="relative cursor-pointer"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <FaBell className="text-2xl text-gray-700" />
          {showNotifications && <DetalisOrder isVisible={showNotifications} />}
        </div>

        <FaUserCircle className="text-3xl text-gray-700" />
      </div>
    </div>
  );
};

export default AdminHeader;
