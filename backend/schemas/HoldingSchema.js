const { Schema } = require("mongoose");

const HoldingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    name: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    qty: {
      type: Number,
      required: true,
      default: 0,
    },

    avg: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    net: {
      type: String,
      default: "0%",
    },

    day: {
      type: String,
      default: "0%",
    },
  },
  {
    timestamps: true,
  },
);

// Prevent duplicate holdings for same user
HoldingSchema.index({ user: 1, name: 1 }, { unique: true });

module.exports = { HoldingSchema };
