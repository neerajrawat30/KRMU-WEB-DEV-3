# Controllers & Business Logic

## Difficulty

Easy

## Estimated Time

10-15 Minutes

---

## Problem Statement

You are given an Express app with route setup already completed.

Your task is to write only the controller logic for this route:

```text
GET /products/available
```

---

## Objective

Complete only this file:

```text
controllers/productController.js
```

Do not modify routes in `src/index.js`.

---

## What is already done for you

- Route is already created in `src/index.js`
- Product data is already given in `data/products.js`
- You only need to write business logic in the controller

---

## Existing Data

Use data from:

```text
data/products.js
```

Import in controller:

```javascript
const products = require("../data/products");
```

---

## Requirements

Implement this function:

```javascript
getAvailableProducts(req, res)
```

It should:

- Filter and return only products where `inStock` is `true`
- Return status code `200`
- Send filtered array using `res.status(200).json(...)`

---

## Expected Response

Request:

```text
GET /products/available
```

Response:

```json
[
  { "id": 1, "name": "Notebook", "price": 40, "inStock": true },
  { "id": 3, "name": "Bag", "price": 800, "inStock": true },
  { "id": 5, "name": "Pencil Box", "price": 120, "inStock": true }
]
```

---

## Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | GET `/products/available` should return status 200 | Pass |
| TC-002 | Response should be an array | Pass |
| TC-003 | Response should contain only in-stock products | Pass |
| TC-004 | Response should return correct product names in order | Pass |
| TC-005 | Each product should have `id`, `name`, `price`, `inStock` | Pass |

---

## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
```

## Running Reference Solution Tests

```bash
npm run solution
```
