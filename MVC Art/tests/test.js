const path = require("path");
const request = require("supertest");
const chai = require("chai");

const expect = chai.expect;
const targetFile = "../src/index";
const server = require(path.join(__dirname, targetFile));

describe("Employee Controller", () => {
    after(() => {
        server.close();
    });

    it("should return status code 200", async () => {
        const res = await request(server).get("/employees");

        expect(res.status).to.equal(200);
    });

    it("should return an array", async () => {
        const res = await request(server).get("/employees");

        expect(res.body).to.be.an("array");
    });

    it("should return only active employees", async () => {
        const res = await request(server).get("/employees");

        expect(res.body.length).to.equal(3);
        res.body.forEach((employee) => {
            expect(employee.isActive).to.equal(true);
        });
    });

    it("should return the correct employee names", async () => {
        const res = await request(server).get("/employees");

        expect(res.body.map((emp) => emp.name)).to.deep.equal([
            "Rahul",
            "Priya",
            "Rohit"
        ]);
    });

    it("should return the correct employee ids", async () => {
        const res = await request(server).get("/employees");

        expect(res.body.map((emp) => emp.id)).to.deep.equal([1, 3, 5]);
    });

    it("should return employee objects with the expected keys", async () => {
        const res = await request(server).get("/employees");

        res.body.forEach((employee) => {
            expect(employee).to.have.all.keys("id", "name", "department", "isActive");
        });
    });
});
