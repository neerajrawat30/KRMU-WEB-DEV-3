# Middleware - Role Based Access (Easy)

## Difficulty

Easy

## Estimated Time

10-15 Minutes

---

## Problem Statement

You are given an Express app with one pre-created route:

```text
GET /admin/dashboard
```

Your task is to:

1. Complete middleware logic in `middleware/roleMiddleware.js`
2. Apply that middleware on the route in `src/index.js`

This question focuses only on middleware + route application.

---

## Objective

Complete these files:

```text
middleware/roleMiddleware.js
src/index.js
```

---

## Given Data

Roles are already provided in:

```text
data/roles.js
```

```javascript
const roles = {
  ADMIN: "admin",
  USER: "user"
};
```

---

## Requirements

### Middleware Logic (`allowOnlyAdmin`)

Read role from request header:

```text
req.headers.role
```

- If role header is missing:
  - Status `401`
  - `{ "error": "Role header is required" }`

- If role is not admin:
  - Status `403`
  - `{ "error": "Access denied. Admin only" }`

- If role is admin:
  - call `next()`

> Role check is case-sensitive. Only `admin` should be allowed.

### Apply Middleware on Route

Use `allowOnlyAdmin` middleware on:

```text
GET /admin/dashboard
```

If access is allowed, route should return:

```json
{ "message": "Welcome Admin" }
```

---

## Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | Missing role header should return 401 | Pass |
| TC-002 | Empty role header should return 401 | Pass |
| TC-003 | role=user should return 403 | Pass |
| TC-004 | Any non-admin role (example: manager) should return 403 | Pass |
| TC-005 | role=ADMIN (uppercase) should return 403 (case-sensitive check) | Pass |
| TC-006 | role=admin should return 200 with welcome message | Pass |
| TC-007 | role=admin response should be JSON | Pass |

---

## Installation

```bash
npm install
```

## Run Tests

```bash
npm test
```

## Run Solution Tests

```bash
npm run solution
```
