import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="  broder-none p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Select a Date</h2>
      <Calendar 
        onChange={setDate} 
        value={date} 
        className="w-full"
      />
      <p className="mt-4 text-gray-700">Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default CalendarComponent;
