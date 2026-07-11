import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "https://tradehub-6mu3.onrender.com/api/orders",
        {
          withCredentials: true,
        },
      );

      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Type</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.symbol}</td>

                  <td className={order.type === "BUY" ? "profit" : "loss"}>
                    {order.type}
                  </td>

                  <td>{order.quantity}</td>

                  <td>₹{order.price.toFixed(2)}</td>

                  <td>₹{order.totalAmount.toFixed(2)}</td>

                  <td>{order.status}</td>

                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Orders;
