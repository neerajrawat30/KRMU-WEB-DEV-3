# Lecture 12: Create an Express Server

## Difficulty
Easy

## Estimated Time

15-20 Minutes

---

## Problem Statement

Create a Node.js server using the **Express** framework.

Your server should:

1. Listen on **port 3000**
2. Handle a **GET** request to the root route (`/`)
3. Respond with the exact string:

```text
We are learning Express
```

---

## Objective

Implement your solution in:

```text
src/index.js
```

---

## Functional Requirements

- Use the `express` package to create the server
- Create a `GET /` route
- Write the `app.listen(...)` call yourself to start the server on **port 3000**
- Send the exact response:

```text
We are learning Express
```

- Store the result of `app.listen(...)` in a variable named `server`
- Export the running server so the test cases can use it

---

## Example Usage

```bash
node src/index.js
```

Then open:

```text
http://localhost:3000/
```

Expected response:

```text
We are learning Express
```

---

## Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | Server should start on port 3000 with GET / returning status 200 | Pass |
| TC-002 | `GET /` should return exact text: `We are learning Express` | Pass |
| TC-003 | Repeated GET / requests should return identical responses | Pass |
| TC-004 | Response body should be a non-empty string | Pass |

---


## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
```

## Running the Reference Solution

```bash
node src/indexSolution.js
```

---
