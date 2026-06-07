const {
  checkServiceability
} = require("../services/serviceabilityService");

async function check(req, res) {
  try {

    const {
      origin_pincode,
      destination_pincode
    } = req.body;

    // Empty Validation

    if (!origin_pincode || !destination_pincode) {
      return res.status(400).json({
        message: "Pincode is required"
      });
    }

    // Format Validation

    const pincodeRegex = /^\d{6}$/;

    if (
      !pincodeRegex.test(origin_pincode) ||
      !pincodeRegex.test(destination_pincode)
    ) {
      return res.status(400).json({
        message: "Invalid pincode format"
      });
    }

    const result = await checkServiceability(
      origin_pincode,
      destination_pincode
    );

    return res.json(result);

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

module.exports = {
  check
};