const path = require("path");
const request = require("supertest");
const chai = require("chai");

const expect = chai.expect;
const targetFile = process.env.TARGET_FILE || "../src/index";
const server = require(path.join(__dirname, targetFile));

describe("Middleware Role Based Access", () => {
  after(() => {
    server.close();
  });

  it("TC-001: Should return 401 when role header is missing", async () => {
    const res = await request(server).get("/admin/dashboard");

    expect(res.status).to.equal(401);
    expect(res.body).to.deep.equal({ error: "Role header is required" });
  });

  it("TC-002: Should return 401 when role header is empty", async () => {
    const res = await request(server)
      .get("/admin/dashboard")
      .set("role", "");

    expect(res.status).to.equal(401);
    expect(res.body).to.deep.equal({ error: "Role header is required" });
  });

  it("TC-003: Should return 403 when role is user", async () => {
    const res = await request(server)
      .get("/admin/dashboard")
      .set("role", "user");

    expect(res.status).to.equal(403);
    expect(res.body).to.deep.equal({ error: "Access denied. Admin only" });
  });

  it("TC-004: Should return 403 for any non-admin role", async () => {
    const res = await request(server)
      .get("/admin/dashboard")
      .set("role", "manager");

    expect(res.status).to.equal(403);
    expect(res.body).to.deep.equal({ error: "Access denied. Admin only" });
  });

  it("TC-005: Should treat role check as case-sensitive", async () => {
    const res = await request(server)
      .get("/admin/dashboard")
      .set("role", "ADMIN");

    expect(res.status).to.equal(403);
    expect(res.body).to.deep.equal({ error: "Access denied. Admin only" });
  });

  it("TC-006: Should return 200 when role is admin", async () => {
    const res = await request(server)
      .get("/admin/dashboard")
      .set("role", "admin");

    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ message: "Welcome Admin" });
  });

  it("TC-007: Admin success response should be JSON", async () => {
    const res = await request(server)
      .get("/admin/dashboard")
      .set("role", "admin");    expect(res.headers).to.have.property("content-type");
    expect(res.headers["content-type"]).to.include("application/json");
  });
});
