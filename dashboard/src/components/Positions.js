import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      const res = await axios.get(
        "https://tradehub-6mu3.onrender.com/api/positions",
        {
          withCredentials: true,
        },
      );

      setPositions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Day</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock) => {
              const currentValue = stock.price * stock.qty;

              const investment = stock.avg * stock.qty;

              const pnl = currentValue - investment;

              return (
                <tr key={stock._id || stock.name}>
                  <td>{stock.product}</td>

                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>₹{stock.avg.toFixed(2)}</td>

                  <td>₹{stock.price.toFixed(2)}</td>

                  <td className={pnl >= 0 ? "profit" : "loss"}>
                    ₹{pnl.toFixed(2)}
                  </td>

                  <td className={stock.isLoss ? "loss" : "profit"}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
