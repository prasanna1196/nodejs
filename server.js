// Sending html files in response to URL request
// Redirecting URL and adding status codes


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('request made');

    // set header content type
    res.setHeader('content-type', 'text/html');
    
    let path = './views/';
    switch(req.url) {
        case '/' :
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about' :
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me' :
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default :
            path += '404.html';
            break;
    }

    // sending html file
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log('error');
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});















