// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export function DoughnutChart({ data }) {
//   return <Doughnut data={data} />;
// }

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
const centerText = {
  id: "centerText",

  beforeDraw(chart) {
    const { ctx } = chart;

    const width = chart.width;
    const height = chart.height;

    ctx.restore();

    ctx.font = "bold 18px Arial";
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText("Stocks", width / 2, height / 2);

    ctx.save();
  },
};
ChartJS.register(ArcElement, Tooltip, Legend, centerText);

const options = {
  responsive: true,
  maintainAspectRatio: false,

  cutout: "78%", // makes the ring thinner

  plugins: {
    legend: {
      position: "bottom",

      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
        font: {
          size: 13,
        },
      },
    },

    tooltip: {
      backgroundColor: "#222",
      padding: 12,
      titleFont: {
        size: 14,
      },
      bodyFont: {
        size: 13,
      },
    },
  },

  animation: {
    animateRotate: true,
    duration: 1200,
  },
};

export function DoughnutChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Watchlist Distribution</h3>

      <div className="chart-wrapper">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
