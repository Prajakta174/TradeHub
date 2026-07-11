const { HoldingsModel } = require("../model/HoldingsModel");

const getPositions = async (req, res) => {
  try {
    const positions = await HoldingsModel.find({
      user: req.user.id,
    });

    const formattedPositions = positions.map((holding) => ({
      product: "CNC",
      name: holding.name,
      qty: holding.qty,
      avg: holding.avg,
      price: holding.price,
      net: holding.net,
      day: holding.day,
      isLoss: Number(holding.day.replace("%", "")) < 0,
    }));

    res.json(formattedPositions);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getPositions,
};
