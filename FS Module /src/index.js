// Write your code here 

const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "students.txt");
const outputPath = path.join(__dirname, "report.txt");




const data = fs.readFileSync(inputPath, "utf8").trim().split("\n");

const report = data.map(line => {
    const [name, marks] = line.split(" ");

    return `${name} - ${Number(marks) >= 40 ? "PASS" : "FAIL"}`;
});

fs.writeFileSync(outputPath, report.join("\n"));