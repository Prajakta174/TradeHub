const express = require("express");
const router = express.Router();

const { getHoldings } = require("../controllers/holdings.controller");
const { authUser } = require("../middlewares/auth.middleware");

router.get("/", authUser, getHoldings);

module.exports = router;
