import React, { useState } from "react";
import axios from "axios";

import "./FundsModal.css";

const AddFundsModal = ({ close, refresh }) => {
  const [amount, setAmount] = useState("");

  const handleAddFunds = async () => {
    if (!amount || Number(amount) <= 0) {
      alert("Enter a valid amount");
      return;
    }

    try {
      await axios.post(
        "https://tradehub-6mu3.onrender.com/api/funds/add",
        {
          amount: Number(amount),
        },
        {
          withCredentials: true,
        },
      );

      alert("Funds added successfully!");

      refresh(); // Refresh Funds page

      close(); // Close modal
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add funds");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="funds-modal">
        <div className="funds-modal-header">
          <h2>Add Funds</h2>
          <p>Add money to your trading account</p>
        </div>

        <div className="funds-modal-body">
          <label className="amount-label">Amount</label>

          <input
            type="number"
            className="amount-input"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="quick-amounts">
            <button className="quick-btn" onClick={() => setAmount(500)}>
              ₹500
            </button>

            <button className="quick-btn" onClick={() => setAmount(1000)}>
              ₹1000
            </button>

            <button className="quick-btn" onClick={() => setAmount(5000)}>
              ₹5000
            </button>
          </div>
        </div>

        <div className="funds-modal-footer">
          <button className="cancel-btn" onClick={close}>
            Cancel
          </button>
          <button className="action-btn withdraw" onClick={handleAddFunds}>
            Add Funds
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFundsModal;
