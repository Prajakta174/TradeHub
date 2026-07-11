const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    type: {
      type: String,
      enum: ["BUY", "SELL", "ADD_FUNDS", "WITHDRAW"],
      required: true,
    },

    symbol: {
      type: String,
      default: "",
    },

    quantity: {
      type: Number,
      default: 0,
    },

    amount: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const TransactionModel = mongoose.model("Transaction", transactionSchema);

module.exports = { TransactionModel };
