const { WatchlistModel } = require("../model/WatchlistModel");
const { StockModel } = require("../model/StockModel");

const getWatchlist = async (req, res) => {
  try {
    // Get user's watchlist
    const watchlist = await WatchlistModel.find({
      user: req.user.id,
    });

    // Extract symbols
    const symbols = watchlist.map((stock) => stock.symbol);

    // Fetch stock details
    const stocks = await StockModel.find({
      symbol: { $in: symbols },
    });

    res.status(200).json(stocks);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const addToWatchlist = async (req, res) => {
  try {
    const { symbol } = req.body;

    if (!symbol) {
      return res.status(400).json({
        message: "Symbol is required",
      });
    }

    // Find stock in Stocks collection
    const stock = await StockModel.findOne({ symbol });

    if (!stock) {
      return res.status(404).json({
        message: "Stock not found",
      });
    }

    // Check if already added
    const existingStock = await WatchlistModel.findOne({
      user: req.user.id,
      symbol,
    });

    if (existingStock) {
      return res.status(409).json({
        message: "Stock already exists in watchlist",
      });
    }

    // Save to watchlist
    const newStock = await WatchlistModel.create({
      user: req.user.id,
      symbol,
    });

    res.status(201).json(newStock);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const deleteFromWatchlist = async (req, res) => {
  try {
    const stock = await WatchlistModel.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!stock) {
      return res.status(404).json({
        message: "Stock not found",
      });
    }

    res.json({
      message: "Stock removed successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = {
  getWatchlist,
  addToWatchlist,
  deleteFromWatchlist,
};
