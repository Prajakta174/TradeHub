import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);

  const handleBuyClick = async () => {
    try {
      await axios.post(
        "https://tradehub-6mu3.onrender.com/api/orders/buy",
        {
          symbol: uid,
          quantity: Number(stockQuantity),
        },
        {
          withCredentials: true,
        },
      );

      alert("Stock purchased successfully!");

      generalContext.closeBuyWindow();

      // Later we'll refresh holdings automatically
      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.message || "Purchase failed");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="modal-overlay">
      <div className="container" id="buy-window">
        <div className="header">
          <h3>Buy {uid}</h3>
          <p>Place a market order</p>
        </div>
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Quantity</legend>
              <div className="info-box">
                <p>
                  Stock: <strong>{uid}</strong>
                </p>

                <p>
                  Order Type: <strong>Market Order</strong>
                </p>
              </div>
              <input
                type="number"
                min="1"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <div>
            <button className="btn btn-blue" onClick={handleBuyClick}>
              Buy
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

export default BuyActionWindow;
