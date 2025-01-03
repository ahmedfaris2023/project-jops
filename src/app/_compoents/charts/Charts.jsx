"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const data = {
    datasets: [
      {
        data: [50, -50],
        backgroundColor: ["#7D4283", "#F3722C"],
        hoverBackgroundColor: ["#800080", "#FFA500"],
        borderWidth: 1,
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
    rotation: -90,
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
