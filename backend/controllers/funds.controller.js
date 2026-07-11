const { FundsModel } = require("../model/FundsModel");
const { TransactionModel } = require("../model/TransactionModel");
const getFunds = async (req, res) => {
  try {
    const funds = await FundsModel.findOne({
      user: req.user.id,
    });

    res.json(funds);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const addFunds = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        message: "Enter a valid amount",
      });
    }

    const funds = await FundsModel.findOne({
      user: req.user.id,
    });

    if (!funds) {
      return res.status(404).json({
        message: "Funds account not found",
      });
    }

    funds.availableBalance += Number(amount);
    funds.openingBalance += Number(amount);
    funds.payin += Number(amount);

    await funds.save();
    await TransactionModel.create({
      user: req.user.id,
      type: "ADD_FUNDS",
      amount,
      description: `Added ₹${amount} to trading account`,
    });
    res.json({
      message: "Funds added successfully",
      funds,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const withdrawFunds = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        message: "Enter a valid amount",
      });
    }

    const funds = await FundsModel.findOne({
      user: req.user.id,
    });

    if (!funds) {
      return res.status(404).json({
        message: "Funds account not found",
      });
    }

    if (funds.availableBalance < amount) {
      return res.status(400).json({
        message: "Insufficient balance",
      });
    }

    funds.availableBalance -= Number(amount);
    funds.payout += Number(amount);

    await funds.save();
    await TransactionModel.create({
      user: req.user.id,
      type: "WITHDRAW",
      amount,
      description: `Withdrawn ₹${amount} from trading account`,
    });
    res.json({
      message: "Withdrawal successful",
      funds,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = {
  getFunds,
  addFunds,
  withdrawFunds,
};
