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


/**
 * @swagger
 * /api/serviceability/bulk:
 *   post:
 *     summary: Bulk serviceability check
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
 *               destination_pincodes:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Bulk serviceability checked successfully
 */
router.post("/bulk", bulkCheck);

module.exports = router;