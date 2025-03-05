import React from "react";

const notifications = [
  { time: "Tomorrow", title: "Mrs. Patterson - Mr. Patterson", desc: "A successful marketing plan relies heavily on the pulling-power of advertising copy." },
  { time: "18.11.2018", title: "New York Case", desc: "A successful marketing plan relies heavily on the pulling-power of advertising copy." },
  { time: "24.11.2018", title: "Berlin Company", desc: "A successful marketing plan relies heavily on the pulling-power of advertising copy." },
  { time: "13:45", title: "Meeting with Mr. Patterson", desc: "A successful marketing plan relies heavily on the pulling-power of advertising copy." },
  { time: "24.11.2018", title: "Dinner with Organisation", desc: "A successful marketing plan relies heavily on the pulling-power of advertising copy." },
  { time: "20:15", title: "Upgrade new GUP System", desc: "A successful marketing plan relies heavily on the pulling-power of advertising copy." },
  { time: "20:15", title: "Upgrade new GUP System", desc: "A successful marketing plan relies heavily on the pulling-power of advertising copy." },
];

const DetalisOrder = () => {
  return (
    <div className="w-1/4 fixed right-0 top-16 bg-white p-4 shadow-md h-screen">
      <h3 className="text-lg font-semibold">Notifications & Updates</h3>
      <div className="overflow-y-auto  max-h-[calc(100vh-4rem)] mt-4">
        {notifications.map((item, index) => (
          <div key={index} className="border-b pb-3 mb-3">
            <span className="text-blue-500 font-semibold">{item.time}</span>
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetalisOrder;
