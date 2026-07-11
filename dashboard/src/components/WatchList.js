import React, { useState, useContext, useEffect } from "react";

import axios from "axios";
import "./watchlist.css";
import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const labels = watchlist.map((stock) => stock.symbol);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),

        backgroundColor: [
          "#387ed1",
          "#00b894",
          "#fdcb6e",
          "#6c5ce7",
          "#ff7675",
          "#00cec9",
          "#e17055",
          "#0984e3",
          "#2ecc71",
          "#8e44ad",
        ],
        borderColor: "#fff",
        borderWidth: 2,
        hoverOffset: 12,
      },
    ],
  };
  useEffect(() => {
    fetchWatchlist();
  }, []);
  useEffect(() => {
    if (!search.trim()) {
      setSearchResults([]);
      return;
    }

    const timer = setTimeout(() => {
      searchStock();
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);
  const fetchWatchlist = async () => {
    try {
      const res = await axios.get(
        "https://tradehub-6mu3.onrender.com/api/watchlist",
        {
          withCredentials: true,
        },
      );

      setWatchlist(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const searchStock = async () => {
    try {
      console.log("Searching:", search);
      const res = await axios.get(
        `https://tradehub-6mu3.onrender.com/api/stocks/search?q=${search}`,
      );
      console.log("Response:", res.data);

      setSearchResults(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const addToWatchlist = async (stock) => {
    try {
      await axios.post(
        "https://tradehub-6mu3.onrender.com/api/watchlist",
        {
          symbol: stock.symbol,
        },
        {
          withCredentials: true,
        },
      );

      // Refresh the left watchlist
      fetchWatchlist();

      // Clear search
      setSearch("");

      // Close dropdown
      setSearchResults([]);

      alert(`${stock.symbol} added successfully`);
    } catch (err) {
      alert(err.response?.data?.message || "Unable to add stock");
    }
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search stocks..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((stock) => (
              <div className="search-item" key={stock._id}>
                <div>
                  <strong>{stock.symbol}</strong>
                  <p>{stock.companyName}</p>
                </div>

                <button onClick={() => addToWatchlist(stock)}>Add</button>
              </div>
            ))}
          </div>
        )}
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.symbol}</p>
        <div className="item-info">
          <span className="percent">{stock.changePercent}%</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.symbol} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={handleSellClick}>
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
