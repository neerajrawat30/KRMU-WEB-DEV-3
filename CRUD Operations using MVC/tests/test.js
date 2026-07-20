const path = require("path");
const request = require("supertest");
const chai = require("chai");

const expect = chai.expect;
const targetFile = process.env.TARGET_FILE || "../src/index";
const server = require(path.join(__dirname, targetFile));

describe("CRUD Operations using MVC", () => {
  after(() => {
    server.close();
  });

  it("TC-001: GET /users should return status 200 and array", async () => {
    const res = await request(server).get("/users");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("TC-002: GET /users/1 should return user Aarav", async () => {
    const res = await request(server).get("/users/1");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({
      id: 1,
      name: "Aarav",
      email: "aarav@example.com"
    });
  });

  it("TC-003: GET /users/99 should return 404", async () => {
    const res = await request(server).get("/users/99");
    expect(res.status).to.equal(404);
    expect(res.body).to.deep.equal({ error: "User not found" });
  });

  it("TC-004: POST /users should create a user", async () => {
    const res = await request(server).post("/users").send({
      name: "Neha",
      email: "neha@example.com"
    });

    expect(res.status).to.equal(201);
    expect(res.body).to.include({
      name: "Neha",
      email: "neha@example.com"
    });
    expect(res.body).to.have.property("id");
  });

  it("TC-005: POST /users with missing field should return 400", async () => {
    const res = await request(server).post("/users").send({
      name: "OnlyName"
    });

    expect(res.status).to.equal(400);
    expect(res.body).to.deep.equal({ error: "name and email are required" });
  });

  it("TC-006: PUT /users/2 should update user", async () => {
    const res = await request(server).put("/users/2").send({
      name: "Sanya Updated",
      email: "sanya.updated@example.com"
    });

    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({
      id: 2,
      name: "Sanya Updated",
      email: "sanya.updated@example.com"
    });
  });

  it("TC-007: DELETE /users/3 should delete user", async () => {
    const res = await request(server).delete("/users/3");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ message: "User deleted successfully" });
  });

  it("TC-008: DELETE /users/99 should return 404", async () => {
    const res = await request(server).delete("/users/99");
    expect(res.status).to.equal(404);
    expect(res.body).to.deep.equal({ error: "User not found" });
  });
});
