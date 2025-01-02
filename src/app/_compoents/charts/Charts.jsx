"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const data = {
    datasets: [
      {
        data: [50, -50], // Values for the chart
        backgroundColor: ["#7D4283", "#F3722C"], // Colors for the segments
        hoverBackgroundColor: ["#800080", "#FFA500"], // Hover effect colors
        borderWidth: 1, // Border thickness
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
    maintainAspectRatio: false,
    rotation: -90, // Disable aspect ratio restrictions
  };

  return (
    <div
      style={{ width: "350px", height: "350px" }}
      className="p-10 mt-10 items-center"
    >
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Charts;
