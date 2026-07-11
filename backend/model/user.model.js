const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
  profileImagePublicId: {
    type: String,
    default: "",
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
