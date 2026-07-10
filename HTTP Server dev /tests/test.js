const request = require("supertest");
const { expect } = require("chai");
const server = require("../src/index");

describe("HTTP Server", function () {

    it("should return welcome message for GET /", async function () {

        const res = await request(server).get("/");

        expect(res.status).to.equal(200);
        expect(res.headers["content-type"]).to.include("application/json");
        expect(res.body.message).to.equal("Welcome to Home");

    });

    it("should return data array for GET /api/data", async function () {

        const res = await request(server).get("/api/data");

        expect(res.status).to.equal(200);
        expect(res.body.data).to.deep.equal([1, 2, 3, 4, 5]);

    });

    it("should return about message for GET /about", async function () {

        const res = await request(server).get("/about");

        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal("About Page");

    });

    it("should return 404 for unknown routes", async function () {

        const res = await request(server).get("/unknown");

        expect(res.status).to.equal(404);
        expect(res.body.error).to.equal("Not Found");

    });

    it("should return JSON content type", async function () {

        const res = await request(server).get("/");

        expect(res.headers["content-type"])
            .to.include("application/json");

    });

});