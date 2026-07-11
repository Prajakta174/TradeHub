const express = require("express");

const router = express.Router();

const { authUser } = require("../middlewares/auth.middleware");

const {
  getWatchlist,
  addToWatchlist,
  deleteFromWatchlist,
} = require("../controllers/watchlist.controller");

// Get all watchlist items of logged-in user
router.get("/", authUser, getWatchlist);

// Add stock
router.post("/", authUser, addToWatchlist);

// Delete stock
router.delete("/:id", authUser, deleteFromWatchlist);

module.exports = router;
