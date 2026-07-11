const express = require("express");
const { authUser } = require("../middlewares/auth.middleware");
const userModel = require("../model/user.model");
const router = express.Router();
const bcrypt = require("bcryptjs");
const upload = require("../config/multer");
const cloudinary = require("../config/cloudinary");
// ✅ Protected route
router.get("/profile", authUser, async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.put("/profile", authUser, async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      return res.status(400).json({
        message: "Username and email are required.",
      });
    }

    const existingUser = await userModel.findOne({
      email,
      _id: { $ne: req.user.id },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email is already in use.",
      });
    }

    const updatedUser = await userModel
      .findByIdAndUpdate(req.user.id, { username, email }, { new: true })
      .select("-password");

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
router.put("/change-password", authUser, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Find logged-in user
    const user = await userModel.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Current password is incorrect.",
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Save
    user.password = hashedPassword;
    await user.save();

    res.json({
      message: "Password updated successfully.",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.put(
  "/profile-image",
  authUser,
  upload.single("profileImage"),
  async (req, res) => {
    try {
      const user = await userModel.findById(req.user.id);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      // Check if a file was uploaded
      if (!req.file) {
        return res.status(400).json({
          message: "Please upload an image.",
        });
      }

      // Save Cloudinary URL
      // Delete previous image if it exists
      if (user.profileImagePublicId) {
        await cloudinary.uploader.destroy(user.profileImagePublicId);
      }

      // Save new image
      user.profileImage = req.file.path;
      user.profileImagePublicId = req.file.filename;

      await user.save();

      // Fetch updated user without password
      const updatedUser = await userModel
        .findById(user._id)
        .select("-password");

      res.status(200).json(updatedUser);
    } catch (err) {
      console.error("========== ERROR ==========");
      console.error(err);

      res.status(500).json({
        message: err.message,
      });
    }
  },
);
module.exports = router;
