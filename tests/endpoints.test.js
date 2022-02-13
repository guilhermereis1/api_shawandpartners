const request = require("supertest");
const app = require("../src/server");

describe("GET endpoints", () => {
  it("Should return a 200 response", async () => {
    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(200);
  });

  it("Should return a 200 response", async () => {
    const response = await request(app).get("/api/users/test/details");
    expect(response.statusCode).toBe(200);
  });

  it("Should return a 200 response", async () => {
    const response = await request(app).get("/api/users/test/repos");
    expect(response.statusCode).toBe(200);
  });
});
