const pool = require("../config/db");

async function getPincodeByCode(pincode) {
  const result = await pool.query(
    "SELECT * FROM pincodes WHERE pincode = $1",
    [pincode]
  );

  return result.rows[0];
}

module.exports = { getPincodeByCode };