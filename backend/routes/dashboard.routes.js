const express = require("express");
const router = express.Router();

const { getDashboardSummary } = require("../controllers/dashboard.controller");

const { authUser } = require("../middlewares/auth.middleware");

router.get("/", authUser, getDashboardSummary);

module.exports = router;
