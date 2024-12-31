"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const data = {
    labels: ["Purple", "Orange"],
    datasets: [
      {
        data: [50, -50], // Values for the chart
        backgroundColor: ["#800080", "#FFA500"], // Colors for the segments
        hoverBackgroundColor: ["#9b009b", "#ffc04c"], // Hover effect colors
        borderWidth: 1, // Border thickness
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: -90, // Disable aspect ratio restrictions
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Charts;
