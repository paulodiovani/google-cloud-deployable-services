'use strict';

const Http = require('http');
const fortune = require('fortune-teller').fortune;

const server = Http.createServer((req, res) => {
  console.log(`Client request at ${req.url}`);
  res.end(fortune());
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
