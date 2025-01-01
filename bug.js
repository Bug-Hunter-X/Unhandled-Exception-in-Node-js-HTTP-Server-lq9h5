const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  try {
    // Some code that might throw an error
    if (req.url === '/error') {
      throw new Error('Something went wrong!');
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (err) {
    // Log the error, but don't send a response
    console.error(err);
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});