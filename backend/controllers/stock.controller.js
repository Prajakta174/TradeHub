const { StockModel } = require("../model/StockModel");

const getAllStocks = async (req, res) => {
  try {
    const stocks = await StockModel.find().sort({ symbol: 1 });

    res.status(200).json(stocks);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const searchStocks = async (req, res) => {
  try {
    const q = req.query.q;

    if (!q) {
      return res.json([]);
    }

    const stocks = await StockModel.find({
      symbol: {
        $regex: q,
        $options: "i",
      },
    }).limit(8);

    res.json(stocks);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = {
  getAllStocks,
  searchStocks,
};
