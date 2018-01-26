const { createServer } = require('http2')
const server = createServer((request, response) => { // Enabling compatibility API by passing the handle
  console.log('Request:', request.headers)
  response.writeHead(200, {'content-type': 'text/plain; charset=utf-8'})
  response.end('Hello, World!!')
})
server.listen(8080)
