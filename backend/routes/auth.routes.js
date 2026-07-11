const express = require("express");
const authControllers = require("../controllers/auth.controllers");
const router = express.Router();
const { authUser } = require("../middlewares/auth.middleware");
router.post("/sign", authControllers.registerUser);

router.post("/login", authControllers.loginUser);

router.post("/logout", authControllers.logoutUser);

router.get("/check", authUser, authControllers.checkAuth);
module.exports = router;
