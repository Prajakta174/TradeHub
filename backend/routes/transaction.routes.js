const express = require("express");
const router = express.Router();

const { getTransactions } = require("../controllers/transaction.controller");
const { authUser } = require("../middlewares/auth.middleware");

router.get("/", authUser, getTransactions);

module.exports = router;
