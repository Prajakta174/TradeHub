const express = require("express");

const router = express.Router();

const { getIndices } = require("../controllers/market.controller");

router.get("/indices", getIndices);

module.exports = router;
