# Student Marks Report Generator

## Difficulty

Medium

## Estimated Time

20–25 Minutes

---

# Problem Statement

You are given a file named `students.txt` inside the `src` folder. Each line in the file contains a student's name followed by their marks, separated by a space.

Your task is to write a Node.js program that reads the file, calculates the result for each student, and generates a report in a new file named `report.txt`.

A student is considered **PASS** if their marks are **40 or above**. Otherwise, the student is considered **FAIL**.

---

# Objective

Implement your solution in:

```text
src/index.js
```

Your program should:

1. Read the contents of `students.txt`.
2. Process each student's marks.
3. Determine whether the student has passed or failed.
4. Create (or overwrite) `report.txt`.
5. Write one line for each student in the following format:

```text
<Name> - PASS
```

or

```text
<Name> - FAIL
```

---

# Input Format

The input file will always contain data in the following format:

```text
<Name> <Marks>
```

Example:

```text
Alice 75
Bob 32
Charlie 40
David 19
```

---

# Output Format

The generated report should contain:

```text
Alice - PASS
Bob - FAIL
Charlie - PASS
David - FAIL
```

---

# Constraints

- The input file will never be empty.
- Each line will always contain one student name followed by one integer.
- Marks will always be between 0 and 100.

---

# Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | Creates `report.txt` | Pass |
| TC-002 | Correctly identifies PASS students | Pass |
| TC-003 | Correctly identifies FAIL students | Pass |
| TC-004 | Correctly handles marks equal to 40 | Pass |
| TC-005 | Writes one result per line | Pass |

---

# Project Structure

```text
student-marks-report/

│

├── src/
│   ├── index.js
│   ├── students.txt
│   └── report.txt

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

---
