const express = require("express");

const router = express.Router();

const {
  getAllStocks,
  searchStocks,
} = require("../controllers/stock.controller");

router.get("/", getAllStocks);
router.get("/search", searchStocks);

module.exports = router;
