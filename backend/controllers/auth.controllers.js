const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { FundsModel } = require("../model/FundsModel");

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
  });
  await FundsModel.create({
    user: user._id,
  });
  res.status(201).json({
    message: "User registered successfully",
  });
}
async function loginUser(req, res) {
  const { username, email, password } = req.body || {};

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id, // ✅ only id
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  // ✅ FIX COOKIE
  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // true in production
    sameSite: "lax",
  });

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

async function logoutUser(req, res) {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false, // true in production (HTTPS)
    sameSite: "lax",
  });

  res.status(200).json({
    message: "Logged out successfully",
  });
}

const checkAuth = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select("-password");

    res.status(200).json({
      authenticated: true,
      user,
    });
  } catch (err) {
    res.status(401).json({
      authenticated: false,
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser, checkAuth };
