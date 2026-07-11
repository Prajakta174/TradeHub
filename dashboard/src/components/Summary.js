import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./summary.css";
const Summary = () => {
  const [summary, setSummary] = useState({
    user: {},
    investment: 0,
    currentValue: 0,
    profitLoss: 0,
    todayPnL: 0,
    holdings: 0,
  });
  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const res = await axios.get("http://localhost:3002/api/dashboard", {
        withCredentials: true,
      });

      setSummary(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="dashboard-header">
        <div>
          <h2>
            Good{" "}
            {new Date().getHours() < 12
              ? "Morning"
              : new Date().getHours() < 17
                ? "Afternoon"
                : "Evening"}
            , {summary.user?.username || "User"}
          </h2>

          <p>Welcome back! Here's your portfolio summary.</p>
        </div>
      </div>

      <div className="summary-cards">
        <div className="card">
          <h5>Investment</h5>
          <h3>₹{summary.investment.toFixed(2)}</h3>
        </div>

        <div className="card">
          <h5>Current Value</h5>
          <h3>₹{summary.currentValue.toFixed(2)}</h3>
        </div>

        <div className="card">
          <h5>Total P&L</h5>

          <h3 className={summary.profitLoss >= 0 ? "profit" : "loss"}>
            ₹{summary.profitLoss.toFixed(2)}
          </h3>
        </div>

        <div className="card">
          <h5>Holdings</h5>
          <h3>{summary.holdings}</h3>
        </div>
      </div>

      <div className="portfolio-section">
        <h3>Portfolio Overview</h3>

        <div className="portfolio-row">
          <span>Current Value</span>

          <strong>₹{summary.currentValue.toFixed(2)}</strong>
        </div>

        <div className="portfolio-row">
          <span>Total Investment</span>

          <strong>₹{summary.investment.toFixed(2)}</strong>
        </div>

        <div className="portfolio-row">
          <span>Today's P&L</span>

          <strong className={summary.todayPnL >= 0 ? "profit" : "loss"}>
            ₹{summary.todayPnL.toFixed(2)}
          </strong>
        </div>
      </div>
    </>
  );
};

export default Summary;
