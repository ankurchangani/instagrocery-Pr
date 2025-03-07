import React from "react";
import AdminHeader from "../Adminheader/AdminHeader";
import AdminHome from "../Adminhome/AdminHome";
import Sidebar from "../siderbar/SiderBar";

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Fixed on the left */}
      <div className="w-64  text-white h-screen fixed">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col ml-16 ">
        <div className=" text-white p-4 ">
          <AdminHeader />
        </div>
        <div className="p-6  overflow-auto flex-1">
          <AdminHome />
        </div>
      </div>
    </div>
  );
};

export default Admin;
