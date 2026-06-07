const express = require("express");
const router = express.Router();
const { getPincode } = require("../controllers/pincodeController");

/**
 * @swagger
 * /api/pincode/{pincode}:
 *   get:
 *     summary: Get pincode details
 *     tags:
 *       - Pincode
 *     parameters:
 *       - in: path
 *         name: pincode
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pincode found successfully
 *       404:
 *         description: Pincode not found
 */
router.get("/:pincode", getPincode);

module.exports = router;