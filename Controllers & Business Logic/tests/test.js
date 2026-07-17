const path = require("path");
const request = require("supertest");
const chai = require("chai");

const expect = chai.expect;
const targetFile = process.env.TARGET_FILE || "../src/index";
const server = require(path.join(__dirname, targetFile));

describe("Controllers & Business Logic", () => {
    after(() => {
        server.close();
    });

    it("TC-001: GET /products/available should return status 200", async () => {
        const res = await request(server).get("/products/available");

        expect(res.status).to.equal(200);
    });

    it("TC-002: Response should be an array", async () => {
        const res = await request(server).get("/products/available");

        expect(res.body).to.be.an("array");
    });

    it("TC-003: Should return only in-stock products", async () => {
        const res = await request(server).get("/products/available");

        expect(res.body.length).to.equal(3);
        res.body.forEach((product) => {
            expect(product.inStock).to.equal(true);
        });
    });

    it("TC-004: Should return product names in correct order", async () => {
        const res = await request(server).get("/products/available");

        expect(res.body.map((p) => p.name)).to.deep.equal([
            "Notebook",
            "Bag",
            "Pencil Box"
        ]);
    });

    it("TC-005: Each product should have id, name, price, inStock", async () => {
        const res = await request(server).get("/products/available");

        res.body.forEach((product) => {
            expect(product).to.have.all.keys("id", "name", "price", "inStock");
        });
    });
});
