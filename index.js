const { createServer } = require('http');

const server = createServer((req, res) => {
  console.log('client made request')
  console.log('req');
  res.statusCode = 200;
  res.setHeader('Content-type', 'text-plain');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello</title>
  </head>
  <body>
  <ul>
  <li>Hey</li>
  <li>Hi</li>
  <li>Hola</li>
  </ul>
    
  </body>
  </html>`);
});

server.listen(8080, () => {
  console.log('listening');
});