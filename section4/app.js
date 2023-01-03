/*

REQUEST MESSAGE PARTS

1. method
2. http version
3. url
4. headrs
5. body (optional)


RESPONSE MESSAGE PARTS

1. status code
2. status text
3. headers
4. body (optional)


AVAILABLE METHODS


GET -> READ DATA
POST -> INSERT DATA
PUT -> UPDATE DATA
DEÑETE -> DELETE DATA


HTTP STATUS CODES

1. informational responses (100-199)
2. successful responses (200-299)
3. Redirects (300-399)
4. Clientes errors (400-499)
5. Servers errors (500-599)

*/

const http = require('http')
const { readFileSync } = require('fs')
const homePage = readFileSync('../navbar-app/index.html')
const homeStyles = readFileSync('../navbar-app/styles.css')
const homeImage = readFileSync('../navbar-app/logo.svg')
const homeLogic = readFileSync('../navbar-app/browser-app.js')


const server = http.createServer((req, res) => {

    const url = req.url;
    
    switch (url) {
        case '/':
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(homePage)
            res.end();
            break;

        case '/about':
            res.writeHead(200, { 'content-type': 'text/plain' })
            res.write('<h1>About</h1>')
            res.end();
            break;

        case '/styles.css':
            res.writeHead(200, { 'content-type': 'text/css' })
            res.write(homeStyles)
            res.end();
            break;

        case '/logo.svg':
            res.writeHead(200, { 'content-type': 'image/svg+xml' })
            res.write(homeImage)
            res.end();
            break;

        case '/browser-app.js':
            res.writeHead(200, { 'content-type': 'text/javascript' })
            res.write(homeLogic)
            res.end();
            break;

        default:
            res.writeHead(400, { 'content-type': 'text/plain' })
            res.write('<h1>404 Page Not Found</h1>')
            res.end();
            break;
    }


}).listen(5000, () => {
    console.log("Listening in 5000")
})



