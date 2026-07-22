const path = require("path");
const request = require("supertest");
const chai = require("chai");

const expect = chai.expect;
const targetFile = process.env.TARGET_FILE || "../src/index";
const server = require(path.join(__dirname, targetFile));

describe("Student Routes", () => {
    after(() => server.close());

    it("should return all students", async () => {
        const res = await request(server).get("/students/list");

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        expect(res.body.length).to.equal(2);
    });

    it("should add a new student", async () => {
        const res = await request(server)
            .post("/students/add")
            .send({
                id: 3,
                name: "Rohan",
            });

        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal("Student added successfully");
    });

    it("should return three students after POST", async () => {
        const res = await request(server).get("/students/list");

        expect(res.body.length).to.equal(3);
    });
});
