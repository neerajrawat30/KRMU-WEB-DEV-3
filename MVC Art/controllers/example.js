// EXAMPLE: How the Employee Controller is used in MVC Architecture
// ==================================================================
// This file demonstrates how the employeeController is imported 
// and used in the Express route (src/index.js)

const { getActiveEmployees } = require("./employeeController");
const employees = require("../data/employees");

console.log("=== Employee Controller Usage Example ===\n");

// This is how it's used in src/index.js:
// app.get("/employees", getActiveEmployees);

console.log("When someone makes a GET request to /employees:");
console.log("The getActiveEmployees controller function receives (req, res)\n");

// Simulating the controller call
const mockRes = {
    status(code) {
        this.statusCode = code;
        return this;
    },
    json(data) {
        this.body = data;
        console.log(`Status: ${this.statusCode}`);
        console.log(`Response Body:`, JSON.stringify(data, null, 2));
    }
};

console.log("Calling controller with mock request/response objects:\n");
getActiveEmployees({}, mockRes);

console.log("\n✓ The controller filters employees and returns only active ones");
console.log("✓ Expected 3 employees: Rahul, Priya, Rohit");
