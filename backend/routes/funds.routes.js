const express = require("express");

const router = express.Router();

const {
  getFunds,
  addFunds,
  withdrawFunds,
} = require("../controllers/funds.controller");

const { authUser } = require("../middlewares/auth.middleware");

router.get("/", authUser, getFunds);
router.post("/add", authUser, addFunds);
router.post("/withdraw", authUser, withdrawFunds);
module.exports = router;
