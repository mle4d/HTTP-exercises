const { createServer } = require('http');

const server = createServer((req, res) => {
console.log('client made request')
console.log('req');
res.end('hi there');
});

server.listen(666, () => {
  console.log('listening');
})