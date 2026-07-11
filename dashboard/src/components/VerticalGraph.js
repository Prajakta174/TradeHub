import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },

    title: {
      display: true,
      text: "Portfolio Distribution",
      color: "#222",
      font: {
        size: 20,
        weight: "600",
      },
      padding: {
        bottom: 25,
      },
    },

    tooltip: {
      backgroundColor: "#222",
      titleColor: "#fff",
      bodyColor: "#fff",
      cornerRadius: 8,
      padding: 12,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#666",
        font: {
          size: 13,
        },
      },
    },

    y: {
      beginAtZero: true,

      grid: {
        color: "#f2f2f2",
      },

      ticks: {
        color: "#666",
      },
    },
  },

  animation: {
    duration: 1200,
  },
};

export function VerticalGraph({ data }) {
  return (
    <div style={{ height: "420px" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
