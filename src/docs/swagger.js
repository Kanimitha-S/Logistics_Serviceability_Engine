const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Logistics Serviceability API",
      version: "1.0.0",
      description: "Logistics Serviceability Engine"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

module.exports = swaggerJsdoc(options);