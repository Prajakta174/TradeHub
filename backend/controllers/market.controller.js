const { StockModel } = require("../model/StockModel");

const getIndices = async (req, res) => {
  try {
    const stocks = await StockModel.find();

    if (!stocks.length) {
      return res.json({
        nifty: {
          value: 0,
          change: 0,
          percent: "0%",
        },
        sensex: {
          value: 0,
          change: 0,
          percent: "0%",
        },
      });
    }

    // Calculate averages
    const avgPrice =
      stocks.reduce((sum, stock) => sum + stock.price, 0) / stocks.length;

    const avgChange =
      stocks.reduce((sum, stock) => sum + stock.changePercent, 0) /
      stocks.length;

    res.json({
      nifty: {
        value: (25000 + avgPrice).toFixed(2),
        change: avgChange.toFixed(2),
        percent: `${avgChange.toFixed(2)}%`,
      },
      sensex: {
        value: (82000 + avgPrice * 3).toFixed(2),
        change: (avgChange * 3).toFixed(2),
        percent: `${(avgChange * 3).toFixed(2)}%`,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getIndices,
};
