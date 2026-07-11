const express = require("express");

const router = express.Router();

const { authUser } = require("../middlewares/auth.middleware");

const {
  buyStock,
  sellStock,
  getOrders,
} = require("../controllers/order.controller");

// Buy Stock
router.post("/buy", authUser, buyStock);
router.post("/sell", authUser, sellStock);
router.get("/", authUser, getOrders);
module.exports = router;
