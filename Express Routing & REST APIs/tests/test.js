const path = require("path");
const request = require("supertest");
const chai = require("chai");

const expect = chai.expect;
const targetFile = process.env.TARGET_FILE || "../src/index";
const server = require(path.join(__dirname, targetFile));

describe("Express Routing & REST APIs", () => {
  after(() => {
    server.close();
  });

  it("TC-001: GET /tasks should return status 200 and array", async () => {
    const res = await request(server).get("/tasks");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
    expect(res.body.length).to.equal(2);
  });

  it("TC-002: GET /tasks/1 should return first task", async () => {
    const res = await request(server).get("/tasks/1");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ id: 1, title: "Learn Express", done: false });
  });

  it("TC-003: GET /tasks/99 should return 404", async () => {
    const res = await request(server).get("/tasks/99");
    expect(res.status).to.equal(404);
    expect(res.body).to.deep.equal({ error: "Task not found" });
  });

  it("TC-004: POST /tasks should create new task", async () => {
    const res = await request(server).post("/tasks").send({ title: "Write tests" });
    expect(res.status).to.equal(201);
    expect(res.body).to.include({ title: "Write tests", done: false });
    expect(res.body).to.have.property("id");
  });

  it("TC-005: POST /tasks with missing title should return 400", async () => {
    const res = await request(server).post("/tasks").send({});
    expect(res.status).to.equal(400);
    expect(res.body).to.deep.equal({ error: "title is required" });
  });
});
