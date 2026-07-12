# Private Counter Module

## Difficulty

Easy

## Estimated Time

10–15 Minutes

---

# Problem Statement

In many real-world applications, internal data should not be directly accessible or modifiable from outside a module. This helps maintain data integrity and prevents accidental changes.

Your task is to implement a reusable **Counter Module** in Node.js that manages its own internal counter. The counter should only be updated using the methods exposed by the module.

The module must ensure that the internal counter cannot be modified directly by external code.

---

# Objective

Implement the module inside:

```text
src/index.js
```

The module should export an object with the following methods:

- `increment()` – Increases the counter by **1**.
- `decrement()` – Decreases the counter by **1**.
- `getCount()` – Returns the current value of the counter.

---

# Functional Requirements

- The counter should start with an initial value of **0**.
- Calling `increment()` should increase the counter by **1**.
- Calling `decrement()` should decrease the counter by **1**.
- Calling `getCount()` should always return the latest counter value.
- The actual counter value should remain private.
- Directly assigning a value to `counter.count` must **not** affect the internal counter maintained by the module.

---

# Example Usage

```javascript
const counter = require("./src/index");

console.log(counter.getCount());

counter.increment();
console.log(counter.getCount());

counter.increment();
console.log(counter.getCount());

counter.decrement();
console.log(counter.getCount());

console.log(counter.count);

counter.count = 100;

console.log(counter.getCount());
```

Expected Output

```text
0
1
2
1
undefined
1
```

### Explanation

- Initially, the counter value is **0**.
- After two calls to `increment()`, the value becomes **2**.
- Calling `decrement()` reduces it to **1**.
- Since the counter is private, `counter.count` is **undefined**.
- Even after assigning `counter.count = 100`, the internal counter remains unchanged because it is stored privately within the module.

---

# Constraints
- Do not use global variables.
- Do not export the counter variable.
- Only the provided methods should be able to access or modify the counter.


---

# Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | Counter should return `0` initially | Pass |
| TC-002 | Calling `increment()` should increase the counter | Pass |
| TC-003 | Calling `decrement()` should decrease the counter | Pass |
| TC-004 | Internal counter should not be directly accessible | Pass |
| TC-005 | Direct modification using `counter.count` should not affect the actual counter | Pass |

---

# Project Structure

```text
private-counter-module/

│

├── src/
│   └── index.js

├── tests/
│   └──test.js

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
