const express = require("express");
const multer = require("multer");

const router = express.Router();

const {
  uploadPincodes
} = require("../controllers/pincodeUploadController");

const upload = multer({
  dest: "uploads/"
});

/**
 * @swagger
 * /api/pincode/upload:
 *   post:
 *     summary: Upload pincode CSV file
 *     tags:
 *       - Pincode
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: CSV uploaded successfully
 */
router.post(
  "/upload",
  upload.single("file"),
  uploadPincodes
);

module.exports = router;