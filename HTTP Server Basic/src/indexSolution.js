const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Welcome to your first backend route');
  res.end();
});

server.listen(3000);

module.exports= server;