import React, { useEffect, useState } from "react";
import axios from "axios";
import AddFundsModal from "./AddFundsModal";
import "./Funds.css";
import WithdrawFundsModal from "./WithDrawFundsModal";

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  useEffect(() => {
    fetchFunds();
  }, []);

  const fetchFunds = async () => {
    try {
      const res = await axios.get("http://localhost:3002/api/funds", {
        withCredentials: true,
      });

      setFunds(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!funds) {
    return <h3 style={{ padding: "20px" }}>Loading Funds...</h3>;
  }

  return (
    <>
      <div className="funds-header">
        <h2>Funds</h2>

        <div className="fund-buttons">
          <button className=" btn-green" onClick={() => setShowAddModal(true)}>
            Add Funds
          </button>
          <button
            className=" btn-blue"
            onClick={() => setShowWithdrawModal(true)}
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className=" fund-card">
        <h3>Equity</h3>

        <div className="fund-grid">
          <div className="fund-item">
            <span>Available Balance</span>
            <h2 className="primary">₹{funds.availableBalance.toFixed(2)}</h2>
          </div>

          <div className="fund-item">
            <span>Used Margin</span>
            <h2>₹{funds.usedMargin.toFixed(2)}</h2>
          </div>

          <div className="fund-item">
            <span>Opening Balance</span>
            <h2>₹{funds.openingBalance.toFixed(2)}</h2>
          </div>

          <div className="fund-item">
            <span>Pay In</span>
            <h2>₹{funds.payin.toFixed(2)}</h2>
          </div>

          <div className="fund-item">
            <span>Pay Out</span>
            <h2>₹{funds.payout.toFixed(2)}</h2>
          </div>

          <div className="fund-item">
            <span>Total Funds</span>
            <h2 className="profit">
              ₹{(funds.availableBalance + funds.usedMargin).toFixed(2)}
            </h2>
          </div>
        </div>
      </div>

      <div className="commodity-card">
        <h3>Commodity Account</h3>

        <p>You don't have a commodity trading account yet.</p>

        <button className="btn-blue">Open Commodity Account</button>
        {showAddModal && (
          <AddFundsModal
            close={() => setShowAddModal(false)}
            refresh={fetchFunds}
          />
        )}
        {showWithdrawModal && (
          <WithdrawFundsModal
            close={() => setShowWithdrawModal(false)}
            refresh={fetchFunds}
          />
        )}
      </div>
    </>
  );
};

export default Funds;
