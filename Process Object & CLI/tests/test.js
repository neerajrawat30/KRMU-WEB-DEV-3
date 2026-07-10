const { expect } = require("chai");
const { execSync } = require("child_process");
const path = require("path");

describe("CLI Calculator", function () {

    this.timeout(3000);

    const file = path.join(__dirname, "../src/index.js");

    function run(args) {
        return execSync(`node "${file}" ${args}`)
            .toString()
            .trim();
    }

    it("should add two numbers", function () {
        expect(run("add 20 10")).to.equal("30");
    });

    it("should subtract two numbers", function () {
        expect(run("subtract 20 10")).to.equal("10");
    });

    it("should multiply two numbers", function () {
        expect(run("multiply 20 10")).to.equal("200");
    });

    it("should divide two numbers", function () {
        expect(run("divide 20 10")).to.equal("2");
    });

    it("should support decimal numbers", function () {
        expect(run("add 2.5 1.5")).to.equal("4");
    });

    it("should handle negative numbers", function () {
        expect(run("subtract 5 10")).to.equal("-5");
    });

    it("should print 'Invalid Operation' for unsupported commands", function () {
        expect(run("power 2 3")).to.equal("Invalid Operation");
    });

});