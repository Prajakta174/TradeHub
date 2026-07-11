const { HoldingsModel } = require("../model/HoldingsModel");

const getHoldings = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({
      user: req.user.id,
    });

    res.json(holdings);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { getHoldings };
