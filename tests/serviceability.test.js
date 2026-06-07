const request = require("supertest");
const app = require("../src/app");

describe("Serviceability API", () => {

  test("Should return INVALID_PINCODE", async () => {
    const response = await request(app)
      .post("/api/serviceability/check")
      .send({
        origin_pincode: "999999",
        destination_pincode: "888888"
      });

    expect(response.body.status).toBe("INVALID_PINCODE");
  });

  test("Should return WITHIN_STATE", async () => {
    const response = await request(app)
      .post("/api/serviceability/check")
      .send({
        origin_pincode: "515001",
        destination_pincode: "515002"
      });

    expect(
      response.body.serviceability.movement_type
    ).toBe("WITHIN_STATE");
  });

  test("Should return WITHIN_ZONE", async () => {
    const response = await request(app)
      .post("/api/serviceability/check")
      .send({
        origin_pincode: "515001",
        destination_pincode: "560001"
      });

    expect(
      response.body.serviceability.movement_type
    ).toBe("WITHIN_ZONE");
  });

});