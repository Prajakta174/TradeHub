const { Schema } = require("mongoose");

const WatchlistSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    symbol: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);
WatchlistSchema.index({ user: 1, symbol: 1 }, { unique: true });
module.exports = { WatchlistSchema };
