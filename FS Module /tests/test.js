const fs = require("fs");
const path = require("path");
const { expect } = require("chai");

describe("Student Marks Report", function () {

    const inputPath = path.join(__dirname, "../src/students.txt");
    const outputPath = path.join(__dirname, "../src/report.txt");

    beforeEach(function () {

        if (fs.existsSync(outputPath)) {
            fs.unlinkSync(outputPath);
        }

        delete require.cache[require.resolve("../src/index")];
    });

    afterEach(function () {

        if (fs.existsSync(outputPath)) {
            fs.unlinkSync(outputPath);
        }

    });

    it("should create report.txt", function () {

        fs.writeFileSync(inputPath, "Alice 80");

        require("../src/index");

        expect(fs.existsSync(outputPath)).to.equal(true);

    });

    it("should mark students with marks >= 40 as PASS", function () {

        fs.writeFileSync(inputPath, "Alice 80\nBob 40");

        require("../src/index");

        const result = fs.readFileSync(outputPath, "utf8");

        expect(result).to.include("Alice - PASS");
        expect(result).to.include("Bob - PASS");

    });

    it("should mark students with marks below 40 as FAIL", function () {

        fs.writeFileSync(inputPath, "Alice 39");

        require("../src/index");

        const result = fs.readFileSync(outputPath, "utf8");

        expect(result).to.equal("Alice - FAIL");

    });

    it("should generate one line per student", function () {

        fs.writeFileSync(inputPath, "A 10\nB 20\nC 90");

        require("../src/index");

        const lines = fs.readFileSync(outputPath, "utf8").trim().split("\n");

        expect(lines.length).to.equal(3);

    });

    it("should generate the correct report", function () {

        fs.writeFileSync(inputPath, "Rahul 95\nAman 21\nPriya 40");

        require("../src/index");

        const result = fs.readFileSync(outputPath, "utf8").trim();

        expect(result).to.equal(
`Rahul - PASS
Aman - FAIL
Priya - PASS`
        );

    });

});