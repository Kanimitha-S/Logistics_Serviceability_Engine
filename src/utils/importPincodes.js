require("dotenv").config();

const fs = require("fs");
const csv = require("csv-parser");
const pool = require("../config/db");

const results = [];

fs.createReadStream("uploads/pincodes_rows.csv")
  .pipe(csv())
  .on("data", (data) => {
    results.push(data);
  })
  .on("end", async () => {
    try {
      for (const row of results) {

        const isActive =
          row.is_active.trim().toUpperCase() === "TRUE";

        console.log(
          row.pincode,
          row.is_active,
          isActive
        );

        await pool.query(
          `
          INSERT INTO pincodes (
            pincode,
            state,
            district,
            is_active
          )
          VALUES ($1, $2, $3, $4)
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
            isActive
          ]
        );
      }

      console.log(`Imported ${results.length} records`);
      process.exit(0);

    } catch (err) {
      console.error("Import Error:", err);
      process.exit(1);
    }
  });