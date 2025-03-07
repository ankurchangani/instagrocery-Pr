import React from "react";
import ChartComponent from "../chart/chart.jsx";
import DetalisOrder from "../DetalisOrder/DetalisOrder.jsx";
import CalendarComponent from '../Clanader/Clanader.jsx'
import LatestMessage from '../lastestMessage/LastestMessage.jsx'
const AdminHome = () => {
  return (
    <div className="flex flex-1 h-screen">
      <div className="flex-1 p-6 space-y-4 ">
        <h2 className="text-xl font-semibold mb-2">Welcome to InstaGrocery Admin Panel</h2>

        {/* Chart & Order Details */}
        <div className="flex  justify-between">
          <div className="p-2 rounded-lg">
            <ChartComponent />
          </div>
        
          <DetalisOrder/>
        </div>

        <div className="flex items-center gap-12">
          <CalendarComponent /> 
          <LatestMessage/>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
