"use client";
import React from "react";
import BarChart from "../charts/BarChart";

const ChartsTwo = () => {
  const data = {
    labels: ["January", "February", "March"],
    // datasets: [
    //   {
    //     label: "Sales",
    //     data: [10, 20, 30],
    //     backgroundColor: [
    //       "rgba(255, 99, 132, 0.6)", // January
    //       "rgba(54, 162, 235, 0.6)", // February
    //       "rgba(255, 206, 86, 0.6)", // March
    //     ],
    //     borderColor: "rgba(255, 0, 0, 1)", // تغيير لون الخطوط إلى الأحمر
    //     borderWidth: 2, // زيادة عرض الحدود لجعلها أكثر وضوحًا
    //   },
    // ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white", // لون النصوص في الأسطورة
        },
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
        color: "white", // لون عنوان المخطط
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white", // لون النصوص في المحور X
        },
      },
      y: {
        ticks: {
          color: "white", // لون النصوص في المحور Y
        },
      },
    },
  };

  return (
    <div className="w-[1000px]">
      <h1 className="text-white">Bar Chart Example</h1>
      <BarChart data={data} options={options} />
    </div>
  );
};

export default ChartsTwo;
