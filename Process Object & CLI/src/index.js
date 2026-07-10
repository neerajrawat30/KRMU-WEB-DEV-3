// TODO: Build a CLI Calculator
// 
// Your task is to create a command-line calculator that accepts three arguments:
// 1. command: The operation to perform ("add", "subtract", "multiply", "divide")
// 2. num1: The first number
// 3. num2: The second number
//
// Steps to implement:
// 1. Extract the three arguments from process.argv
// 2. Convert num1 and num2 to numbers using Number()
// 3. Use a switch statement to handle each command
// 4. Perform the appropriate operation and log the result
//
// Example usage:
// node index.js add 20 10        → should output: 30
// node index.js subtract 20 10   → should output: 10
// node index.js multiply 20 10   → should output: 200
// node index.js divide 20 10     → should output: 2
// node index.js invalid 20 10     → should output: Invalid Operation

const [, , command, num1, num2] = process.argv;

const first = Number(num1);
const second = Number(num2);

switch (command) {
    case "add":
        console.log(first + second);
        break;

    case "subtract":
        console.log(first - second);
        break;

    case "multiply":
        console.log(first * second);
        break;

    case "divide":
        console.log(first / second);
        break;

    default:
        console.log("Invalid Operation");
}