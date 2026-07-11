import React, { useEffect, useState } from "react";
import axios from "axios";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(
        "https://tradehub-6mu3.onrender.com/api/transactions",
        {
          withCredentials: true,
        },
      );

      setTransactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3 className="title">Transactions ({transactions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Stock</th>
              <th>Qty</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item) => (
              <tr key={item._id}>
                <td>{item.type}</td>
                <td>{item.symbol || "--"}</td>
                <td>{item.quantity || "--"}</td>
                <td>₹{item.amount.toFixed(2)}</td>
                <td>{item.description}</td>
                <td>{new Date(item.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Transactions;
