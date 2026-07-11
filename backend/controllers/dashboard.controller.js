const { HoldingsModel } = require("../model/HoldingsModel");
const userModel = require("../model/user.model");
const getDashboardSummary = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({
      user: req.user.id,
    });

    const user = await userModel.findById(req.user.id).select("username email");
    let investment = 0;
    let currentValue = 0;
    let todayPnL = 0;

    holdings.forEach((stock) => {
      investment += stock.avg * stock.qty;

      currentValue += stock.price * stock.qty;

      const dayPercent = Number(stock.day.replace("%", ""));

      todayPnL += (stock.price * stock.qty * dayPercent) / 100;
    });

    res.json({
      user: {
        username: user.username,
        email: user.email,
      },
      investment,
      currentValue,
      profitLoss: currentValue - investment,
      todayPnL,
      holdings: holdings.length,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getDashboardSummary,
};
