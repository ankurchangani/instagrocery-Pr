import React from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md px-6 py-4">
      {/* Left Section: Menu Icon + Logo */}
      <div className="flex items-center space-x-4">
        {/* Menu Icon */}

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">InstaGrocery</h1>
      </div>

      {/* Right Section: User Icon + Create Button */}
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Create
        </button>
        <FaUserCircle className="text-3xl text-gray-700" />
      </div>
    </div>
  );
};

export default Header;
