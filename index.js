const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    // Health check endpoint
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK');
  } else {
    // Default endpoint
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello, this is a basic HTTP endpoint for demo purpose !!!' }));
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
