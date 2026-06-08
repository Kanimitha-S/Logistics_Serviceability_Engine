const express = require("express");

const pincodeRoutes = require("./routes/pincodeRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const serviceabilityRoutes =
  require("./routes/serviceabilityRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Logistics Serviceability Engine Running");
});

app.use("/api/pincode", pincodeRoutes);

app.use("/api/pincode", uploadRoutes);

app.use(
  "/api/serviceability",
  serviceabilityRoutes
);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

module.exports = app;