const path = require("path");
const request = require("supertest");
const chai = require("chai");

const expect = chai.expect;
const targetFile = process.env.TARGET_FILE || "../src/index";
const server = require(path.join(__dirname, targetFile));

describe("Express Routing and Request/Response Handling", () => {
    after(() => {
        server.close();
    });

    it("TC-001: should handle GET /users/:id with status 200", async () => {
        const res = await request(server).get("/users/5");

        expect(res.status).to.equal(200);
    });

    it("TC-002: should return correct JSON for GET /users/:id", async () => {
        const res = await request(server).get("/users/5");

        expect(res.body).to.deep.equal({
            message: "User fetched successfully",
            userId: "5"
        });
    });

    it("TC-003: should create user on POST /users with valid body", async () => {
        const res = await request(server)
            .post("/users")
            .send({
                name: "Rohan",
                email: "rohan@example.com"
            });

        expect(res.status).to.equal(201);
        expect(res.body).to.deep.equal({
            message: "User created successfully",
            user: {
                name: "Rohan",
                email: "rohan@example.com"
            }
        });
    });

    it("TC-004: should return 400 when name is missing", async () => {
        const res = await request(server)
            .post("/users")
            .send({
                email: "rohan@example.com"
            });

        expect(res.status).to.equal(400);
        expect(res.body).to.deep.equal({
            error: "name and email are required"
        });
    });

    it("TC-005: should return 400 when email is missing", async () => {
        const res = await request(server)
            .post("/users")
            .send({
                name: "Rohan"
            });

        expect(res.status).to.equal(400);
        expect(res.body).to.deep.equal({
            error: "name and email are required"
        });
    });
});
