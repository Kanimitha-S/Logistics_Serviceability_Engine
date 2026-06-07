const {
  getPincodeByCode,
} = require("../repositories/pincodeRepository");
const { getZone } = require("../utils/zoneMapper");
async function getPincode(req, res) {
  try {
    const { pincode } = req.params;

    const data = await getPincodeByCode(pincode);

    if (!data) {
      return res.status(404).json({
        message: "Pincode not found",
      });
    }

    return res.json({
  pincode: data.pincode,
  state: data.state,
  district: data.district,
  zone: getZone(data.state),
  is_active: data.is_active
});

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = { getPincode };