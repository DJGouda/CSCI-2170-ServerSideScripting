const http = require('http');  //Standard Node HTTP module

const fs = require('fs');

const htmlFile = fs.readFileSync(`${__dirname}/templates/home.html`);

const server = http.createServer((request, response) => {
    // response.end("<h1>hello!</h1>");
    response.setHeader('Content-Type', 'text/html');
    response.end(htmlFile);
});

server.listen(8000, 'localhost', () => {
    console.log('Listening on port 8000');
});