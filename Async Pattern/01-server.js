const http = require('http')

const server = http.createServer((req, res) =>{

    if (req.url === '/') {
        res.write('Welcome to our home page');
        res.end();
    }
    else if (req.url === '/about') {

        for(let i = 0; i < 1000; i++){
            for (let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }


        res.write('Here is our short history')
        res.end();
    } else {
        res.write("<h1>Oops<h1/>" +
            "<p>We can't seem to find the page you are looking for<p/>" +
            '<a href="/"> back home </a>'
        );
        res.end();
    }

})

server.listen(5000, () => {
    console.log('Server up in 5000')
})