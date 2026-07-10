const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    const url = req.url;

    if (url === "/") {
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Welcome to Home" }));
    } else if (url === "/api/data") {
        res.writeHead(200);
        res.end(JSON.stringify({ data: [1, 2, 3, 4, 5] }));
    } else if (url === "/about") {
        res.writeHead(200);
        res.end(JSON.stringify({ message: "About Page" }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not Found" }));
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = function() {
    server.close();
};
