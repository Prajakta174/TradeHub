const { Schema } = require("mongoose");

const StockSchema = new Schema(
  {
    symbol: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },

    companyName: {
      type: String,
      required: true,
    },

    exchange: {
      type: String,
      default: "NSE",
    },

    price: {
      type: Number,
      required: true,
    },

    changePercent: {
      type: Number,
      required: true,
    },

    isDown: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = { StockSchema };
