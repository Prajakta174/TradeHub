const { TransactionModel } = require("../model/TransactionModel");

const getTransactions = async (req, res) => {
  try {
    const transactions = await TransactionModel.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getTransactions,
};
