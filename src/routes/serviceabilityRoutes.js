const express = require("express");

const router = express.Router();

const {
  check,
  bulkCheck
} = require("../controllers/serviceabilityController");

/**
 * @swagger
 * /api/serviceability/check:
 *   post:
 *     summary: Check serviceability between two pincodes
 *     tags:
 *       - Serviceability
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               origin_pincode:
 *                 type: string
 *               destination_pincode:
 *                 type: string
 *     responses:
 *       200:
 *         description: Serviceability checked successfully
 */

router.post("/check", check);

router.post("/bulk", bulkCheck);

module.exports = router;