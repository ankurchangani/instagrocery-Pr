import React from "react";
import Chart from "react-apexcharts";
import { FaCalendarAlt } from "react-icons/fa";

const ChartComponent = () => {
  const options = {
    series: [
      {
        name: "Total Users",
        data: [250, 400, 380, 600, 750, 900, 1000, 850, 950, 800, 780, 770],
      },
    ],
    chart: {
      type: "area",
      // width : "100%",
      height: 350,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 0.4, opacityFrom: 0.7, opacityTo: 0.2 },
    },
    markers: { size: 5, colors: ["#008FFB"], strokeWidth: 3 },
    grid: { borderColor: "#e0e0e0", strokeDashArray: 4 },
    xaxis: {
      categories: ["Oct", "Nov", "Dec", "Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sept"],
      labels: { style: { colors: "#333", fontSize: "12px" } },
    },
    yaxis: {
      min: 0,
      max: 1200,
      tickAmount: 5,
      labels: { style: { colors: "#333", fontSize: "12px" } },
    },
    tooltip: { theme: "light" },
  };

  return (
    <div className="bg-white shadow-md rounded-lg w-full">
      <h3 className="text-lg font-semibold text-center mb-3">Total Users</h3>
      <div className="relative">
        <Chart options={options} series={options.series} type="area" width={820} height={350} />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-4 text-gray-600 text-sm bg-white p-2 rounded-lg shadow-md">
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
