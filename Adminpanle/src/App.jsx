import React from "react";
import Sidebar from "./component/siderbar/SiderBar";
import Header from "./component/header/Header";
import Home from "./component/home/Home";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed width & full height */}
      <Sidebar />

      {/* Main Content - Adjusted margin to match sidebar width */}
      <div className="flex-1 flex flex-col ml-[80px]">
        {/* Header */}
        <Header />

        {/* Home Section - Takes Remaining Space */}
        <div className="flex flex-1 ">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
