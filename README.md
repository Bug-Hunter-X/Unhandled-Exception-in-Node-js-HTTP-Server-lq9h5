# Node.js Unhandled Exception Bug

This repository demonstrates a common error in Node.js HTTP servers: improper exception handling.  The server handles requests, but fails to gracefully handle exceptions, potentially leaving clients hanging.

## Bug Description

The `bug.js` file contains a Node.js HTTP server that throws an exception when a client requests the '/error' endpoint. However, the error is only logged to the console; no response is sent back to the client, resulting in a poor user experience.

## Solution

The `bugSolution.js` file demonstrates how to handle the exception properly. It ensures a meaningful error response is sent to the client in case of an exception.

## How to Reproduce

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node bug.js`.
4. Send a request to `http://localhost:3000/error` using a tool like `curl` or a web browser.
5. Observe that the server doesn't send back a proper error response; instead, the client likely hangs.
6. Repeat steps 2-5, but using `bugSolution.js` instead.
7. Note how `bugSolution.js` sends a proper HTTP error response to the client.