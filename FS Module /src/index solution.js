const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "students.txt");
const outputPath = path.join(__dirname, "report.txt");

const data = fs.readFileSync(inputPath, "utf8").split("\n")

 let result= data.map((string)=>
{
    const[name,marks]= string.split(" ")
    return `${name} - ${marks>=40 ? "PASS" : "FAIL"}`
})

fs.writeFileSync(outputPath, result.join("\n"));