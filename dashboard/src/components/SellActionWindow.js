import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);

  const handleSellClick = async () => {
    try {
      await axios.post(
        "http://localhost:3002/api/orders/sell",
        {
          symbol: uid,
          quantity: Number(stockQuantity),
        },
        {
          withCredentials: true,
        },
      );

      alert("Stock sold successfully!");

      generalContext.closeSellWindow();

      // Later we'll refresh holdings automatically
      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.message || "Sell failed");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="modal-overlay">
      <div className="container" id="buy-window">
        <div className="header">
          <h3>Sell {uid}</h3>
          <p>Place a market sell order</p>
        </div>
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Quantity</legend>

              <input
                type="number"
                min="1"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
              />
            </fieldset>

            <div className="info-box">
              <p>
                Stock: <strong>{uid}</strong>
              </p>

              <p>
                Order Type: <strong>Market Sell</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="buttons">
          <div>
            <button className="btn btn-blue" onClick={handleSellClick}>
              Sell
            </button>

            <button className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
