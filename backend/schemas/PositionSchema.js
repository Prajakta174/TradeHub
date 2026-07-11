const { Schema } = require("mongoose");

const PositionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    product: {
      type: String,
      default: "CNC",
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

    isLoss: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Prevent duplicate positions for the same user
PositionSchema.index({ user: 1, name: 1 }, { unique: true });

module.exports = { PositionSchema };
