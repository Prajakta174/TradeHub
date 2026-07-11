const express = require("express");
const router = express.Router();

const { getPositions } = require("../controllers/position.controller");
const { authUser } = require("../middlewares/auth.middleware");

router.get("/", authUser, getPositions);

module.exports = router;
