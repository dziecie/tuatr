const http = require('http')

const server = http.createServer((request, response) => {
	response.end('<h1>asdasd</h1>')
})

server.listen(8085)

