const http = require('http');

//Using event emmitter api
const server = http.createServer();

//emits request event
//Subscribe to it/listen for it /respond it
server.on('request', (req, res) => {
    res.end("Welcomxe")
})

server.listen(5000)

