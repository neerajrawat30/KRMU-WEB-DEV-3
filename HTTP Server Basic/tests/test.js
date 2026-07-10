
const request = require("supertest");
const { expect } = require("chai");
const server = require("../src/index");

describe("First Backend HTTP Server", function () {

    it("should respond with status code 200", async function () {

        const res = await request(server).get("/");

        expect(res.status).to.equal(200);

    });

    it("should return the correct response body", async function () {

        const res = await request(server).get("/");

        expect(res.text).to.equal("Welcome to your first backend route");

    });

    it("should return Content-Type as text/plain", async function () {

        const res = await request(server).get("/");

        expect(res.headers["content-type"]).to.include("text/plain");

    });

    it("should handle GET request on root route", async function () {

        const res = await request(server).get("/");

        expect(res.status).to.equal(200);
        expect(res.text).to.equal("Welcome to your first backend route");

    });

});