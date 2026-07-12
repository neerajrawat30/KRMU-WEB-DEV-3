# HTTP Server - GET Request Handling and Response Management

## Difficulty

Medium

## Estimated Time

20–25 Minutes

---

# Problem Statement

In modern web development, understanding how to create and manage HTTP servers is fundamental. You need to build a simple HTTP server that can handle GET requests and respond appropriately based on the URL path.

Your task is to implement a **Simple HTTP Server** in Node.js that:
- Creates a server listening on a specific port
- Handles GET HTTP requests
- Routes requests based on the URL path
- Returns appropriate responses with proper status codes and content types

---

# Objective

Implement the server inside:

```text
src/index.js
```

The server should:

1. Listen on **port 3000**
2. Handle the following routes:

   | Route | Method | Response | Status |
   |-------|--------|----------|--------|
   | `/` | GET | `{"message": "Welcome to Home"}` | 200 |
   | `/api/data` | GET | `{"data": [1, 2, 3, 4, 5]}` | 200 |
   | `/about` | GET | `{"message": "About Page"}` | 200 |
   | Any other route | GET | `{"error": "Not Found"}` | 404 |

3. Set appropriate response headers (`Content-Type: application/json`)
4. Start the server when the module is executed

---

# Example Usage

After starting the server, test these routes:

```bash
curl http://localhost:3000/
curl http://localhost:3000/api/data
curl http://localhost:3000/about
curl http://localhost:3000/unknown
```

Should return appropriate JSON responses with correct status codes.



---

# Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | GET `/` returns status `200` and message `Welcome to Home` | Pass |
| TC-002 | GET `/api/data` returns `[1, 2, 3, 4, 5]` with status `200` | Pass |
| TC-003 | GET `/about` returns message `About Page` with status `200` | Pass |
| TC-004 | GET unknown route returns status `404` with `{"error":"Not Found"}` | Pass |
| TC-005 | Response `Content-Type` is `application/json` | Pass |
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