const fs = require("fs");
const csv = require("csv-parser");
const pool = require("../config/db");

async function uploadPincodes(req, res) {

  if (!req.file) {
    return res.status(400).json({
      message: "CSV file is required"
    });
  }

  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", async () => {

      let inserted = 0;
      let updated = 0;
      let failed = 0;

      try {

        for (const row of results) {

          const existing =
            await pool.query(
              "SELECT pincode FROM pincodes WHERE pincode = $1",
              [row.pincode]
            );

          if (existing.rows.length > 0) {
            updated++;
          } else {
            inserted++;
          }

          await pool.query(
            `
            INSERT INTO pincodes
            (
              pincode,
              state,
              district,
              is_active
            )
            VALUES ($1,$2,$3,$4)
            ON CONFLICT (pincode)
            DO UPDATE SET
              state = EXCLUDED.state,
              district = EXCLUDED.district,
              is_active = EXCLUDED.is_active
            `,
            [
              row.pincode,
              row.state,
              row.district,
              row.is_active.toString().trim().toUpperCase() === "TRUE"
            ]
          );
        }

        return res.json({
          total_records: results.length,
          inserted,
          updated,
          failed
        });

      } catch (error) {

        console.error(error);

        failed++;

        return res.status(500).json({
          message: "Upload failed"
        });
      }

    });
}

module.exports = {
  uploadPincodes
};