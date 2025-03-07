import React from "react";
import { FaHome, FaFileAlt, FaChartLine, FaUserCog, FaPlus } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className="w-[80px] h-screen fixed top-0 left-0 z-[998] bg-white shadow-md  flex flex-col items-center space-y-6 pt-10 transition-all duration-400"
    >
      {[
        { icon: <FaHome /> },
        { icon: <FaPlus /> },
        { icon: <FaFileAlt /> },
        { icon: <FaChartLine /> },
        { icon: <FaUserCog /> }
      ].map((item, index) => (
        <div key={index} className="p-4 cursor-pointer hover:bg-blue-100 rounded-md">
          <span className="text-gray-700 text-2xl">{item.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
