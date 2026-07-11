import React, { useEffect, useState } from "react";
import axios from "axios";

import Menu from "./Menu";

const TopBar = () => {
  const [indices, setIndices] = useState(null);

  useEffect(() => {
    fetchIndices();
  }, []);

  const fetchIndices = async () => {
    try {
      const res = await axios.get("http://localhost:3002/api/market/indices");

      setIndices(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!indices) {
    return null;
  }

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>

          <p className="index-points">{indices.nifty.value}</p>

          <p className={Number(indices.nifty.change) >= 0 ? "profit" : "loss"}>
            {indices.nifty.percent}
          </p>
        </div>

        <div className="sensex">
          <p className="index">SENSEX</p>

          <p className="index-points">{indices.sensex.value}</p>

          <p className={Number(indices.sensex.change) >= 0 ? "profit" : "loss"}>
            {indices.sensex.percent}
          </p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
