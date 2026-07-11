const multer = require("multer");
const cloudinary = require("./cloudinary");

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,

  params: {
    folder: "zerodha-users",

    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

module.exports = multer({ storage });
