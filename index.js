const { createServer } = require('http');

const server = createServer((req, res) => {
  console.log('client made request')
  console.log('req');
  res.statusCode = 200;
  res.setHeader('Content-type', 'text-plain');
  res.end('hola');
});

server.listen(8080, () => {
  console.log('listening');
});