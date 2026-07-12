# CLI Calculator

## Difficulty
Easy

## Estimated Time

15–20 Minutes

---

# Problem Statement

Build a command-line calculator using Node.js.

Your task is to create a CLI application that accepts three command-line arguments:

1. **command** – The operation to perform.
2. **num1** – The first number.
3. **num2** – The second number.

The calculator should support the following operations:

| Command    | Description                                |
| ---------- | ------------------------------------------ |
| `add`      | Adds two numbers                           |
| `subtract` | Subtracts the second number from the first |
| `multiply` | Multiplies two numbers                     |
| `divide`   | Divides the first number by the second     |

If the user provides an unsupported command, the program should print:

```text
Invalid Operation
```

---

# Objective

Implement your solution in:

```text
src/index.js
```

---

# Functional Requirements

* Read the command-line arguments using `process.argv`.
* Convert the number arguments using `Number()`.
* Use a `switch` statement to perform the requested operation.
* Print the result using `console.log()`.
* If the command is not one of the supported operations (`add`, `subtract`, `multiply`, `divide`), print:

```text
Invalid Operation
```

---


## Input Format

```bash
node src/index.js <command> <num1> <num2>
```

## Examples

```bash
node src/index.js add 20 10
```
```text
30
```

```bash
node src/index.js subtract 20 10
```
```text
10
```

```bash
node src/index.js multiply 20 10
```
```text
200
```

```bash
node src/index.js divide 20 10
```
```text
2
```

```bash
node src/index.js power 2 3
```
```text
Invalid Operation
```

---

# Project Structure

```text
cli-calculator/

│

├── src/
│   └── index.js

├── tests/
│   └── test.js

├── package.json

└── README.md
```

---

# Running the Project

Install dependencies:

```bash
npm install
```

Run the test cases:

```bash
npm test
```

Run the program:

```bash
node src/index.js <command> <num1> <num2>
```
