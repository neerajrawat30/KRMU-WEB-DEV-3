# Basic HTTP Server - First Backend Route

## Difficulty
Easy

## Estimated Time

15–20 Minutes

---

## Problem Statement

You are tasked with building your **first backend HTTP server** using Node.js. Your server should handle HTTP requests and respond to a single route.

### Requirements

Your server should:
1. Create an HTTP server using Node.js `http` module
2. Listen on **port 3000**
3. Handle a **GET request** to the root path (`/`)
4. Respond with a welcome message when accessed
5. The response should be sent with:
   - Status code: `200` (OK)
   - Content-Type: `text/plain`
   - Body: `"Welcome to your first backend route"`
---

## Examples

| Request | Method | Response Code | Response Body |
|---------|--------|---------------|---------------|
| `GET /` | GET | `200` | `Welcome to your first backend route` |

### Testing the Server
```bash
# Start the server
node src/index.js

# In another terminal, test with curl
curl http://localhost:3000/

# Output:
# Welcome to your first backend route
```


---
### Installation

```bash
npm install
```

### Running the Solution

```bash
# Start the server in one terminal
node src/index.js

# In another terminal, test it
curl http://localhost:3000/
# Output: Welcome to your first backend route
```

## Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | Server responds to `GET /` | Pass |
| TC-002 | Response status code is `200` | Pass |
| TC-003 | Response body is `Welcome to your first backend route` | Pass |
| TC-004 | `Content-Type` header is `text/plain` | Pass |

### Running Tests

```bash
npm test
```

The tests will:
- Start your server automatically
- Make HTTP requests to localhost:3000
- Verify the response status, headers, and body
- Stop the server after testing

---