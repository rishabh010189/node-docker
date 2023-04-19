const http = require('http');
const bcrypt = require('bcrypt');

http.createServer((req, res) => {
    bcrypt.hash('testing..',2).then(hash => {
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.write(hash)
        res.end();
    })
}).listen(5500, '127.0.0.1', () => {
    console.log('server listening on port 5500')
})