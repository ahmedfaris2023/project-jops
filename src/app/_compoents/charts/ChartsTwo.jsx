"use client";
import React from "react";
import BarChart from "../charts/BarChart";

const ChartsTwo = () => {
  const data = {
    labels: ["xs", "s", "m"],

    datasets: [
      {
        data: [75, 0, 0],
        backgroundColor: ["rgba(125, 68, 131, 1)"],
        borderWidth: 20,
      },
      {
        data: [0, 125, 0],
        backgroundColor: [" rgba(243, 114, 44, 1)"],
        borderWidth: 20,
      },
      {
        data: [0, 0, 175],
        backgroundColor: ["rgba(248, 150, 30, 1)"],
        borderWidth: 20,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
          borderDash: [20, 20],
        },
        ticks: {
          color: "#ffff",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
          borderDash: [10, 5],
        },
        ticks: {
          color: "#ffff",
        },
      },
    },
  };

  return (
    <div className="w-full sm:w-[800px] h-[700px] sm:h-[800px] pt-10 pl-6">
      <BarChart data={data} options={options} />
      <div className="text-white flex flex-wrap gap-6 pt-6 justify-center sm:justify-start">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div>Product 1</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#F3722C] rounded-full"></div>
          <div>Product 2</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#F8961E] rounded-full"></div>
          <div>Product 3</div>
        </div>
      </div>
    </div>
  );
};

export default ChartsTwo;
