const express = require("express");
const multer = require("multer");

const router = express.Router();

const {
  uploadPincodes
} = require(
  "../controllers/pincodeUploadController"
);

const upload = multer({
  dest: "uploads/"
});

router.post(
  "/upload",
  upload.single("file"),
  uploadPincodes
);

module.exports = router;