const { Schema } = require("mongoose");

const FundsSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },

    availableBalance: {
      type: Number,
      default: 100000,
    },

    usedMargin: {
      type: Number,
      default: 0,
    },

    openingBalance: {
      type: Number,
      default: 100000,
    },

    payin: {
      type: Number,
      default: 0,
    },

    payout: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = { FundsSchema };
