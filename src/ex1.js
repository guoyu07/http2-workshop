const {createServer} = require('http2')
const server = createServer()
server.on('stream', (stream, headers) => {
  console.log('Request:', headers)
  stream.respond({
    'content-type': 'text/plain; charset=utf-8',
    ':status': 200
  })
  stream.end('Hello World')
})
server.listen(8080)
