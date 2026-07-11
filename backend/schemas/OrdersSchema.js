const { Schema } = require("mongoose");

const OrderSchema = new Schema(
  {
    // Which user placed this order
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    // Stock Symbol
    symbol: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    // Company Name
    companyName: {
      type: String,
      required: true,
    },

    // NSE/BSE
    exchange: {
      type: String,
      default: "NSE",
    },

    // BUY or SELL
    type: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true,
    },

    // Number of shares
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    // Price per share
    price: {
      type: Number,
      required: true,
    },

    // quantity × price
    totalAmount: {
      type: Number,
      required: true,
    },

    // Current status
    status: {
      type: String,
      enum: ["PENDING", "COMPLETED", "CANCELLED"],
      default: "COMPLETED",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = { OrderSchema };
