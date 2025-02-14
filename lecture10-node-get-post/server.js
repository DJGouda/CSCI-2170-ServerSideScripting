/**
 * CSCI 2170: Intro to Server-Side Scripting
 * Winter 2025
 * Creating a very simple server using core Node modules
 * Lecture 10: Feb 14, 2025
 */

//------------------------------------------
// Modules to be included
//------------------------------------------
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

//------------------------------------------
// Names of files we will access to display
// the styled web page
//------------------------------------------
const filenames = {
    html: 'templates/home.html',
    css: 'styles/main.css',
    favicon: 'assets/images/by-camylla-battani.jpg'
};

//------------------------------------------
// Read all files we will access to display
// the styled web page
//------------------------------------------
const htmlFile = fs.readFileSync(`${__dirname}/${filenames.html}`, 'utf-8');
const cssFile = fs.readFileSync(`${__dirname}/${filenames.css}`);
const favicon = fs.readFileSync(`${__dirname}/${filenames.favicon}`);

//------------------------------------------
// Create server instance
//------------------------------------------
const server = http.createServer((req, res) => {

    const { pathname, query } = url.parse(req.url);
    let path = pathname;
    console.log(pathname);
    // const queryParams = querystring.parse(query);
    // console.log(queryParams);


    // our goal: If the pathname consists of /api
    // - Extract the number that follows the /api into a variable ✅
    // - Modify pathname to just be /api
    // - Within the /api case in our switch statement, console.log the number after /api

    let pathComponents, apiData;

    if (pathname.includes('/api')) {
        pathComponents = pathname.split('/');
        path = "/" + pathComponents[1];
        apiData = pathComponents[2];
        // console.log(pathComponents);
    }


    let reqData;
    let reqParams;

    req.on("data", function (chunk) {
        // console.log(chunk.toString());
        reqData += chunk;
    });

    req.on("end", () => {
        // console.log('all data received!');
        // console.log(reqData);
        reqParams = querystring.parse(reqData);
        // console.log(reqParams);
    });

    switch(path) {
        case '/api':
            let response = {
                id: apiData,
                status: 'success',
                data: 'hello from the server-side!'
            };
            let jsonResponse = JSON.stringify(response);

            fs.writeFile(
                `${__dirname}/data/api-data.json`,
                jsonResponse,
                function (err) {
                    if (err) console.error(err);
                    console.log('file write successful!');
            });

            // fs.readFile(
            //     `${__dirname}/data/api-data.json`,
            //     'utf-8',
            //     (err, data) => {
            //         if (err) console.error(err);
            //         console.log(data);
            //     }
            // )

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(jsonResponse);
            break;
        case `/`:
        case `/index.html`:
        case `/${filenames.html}`:
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            res.end(htmlFile);
            break;
        case `/${filenames.css}`:
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.end(cssFile);
            break;
        case `/${filenames.favicon}`:
            res.statusCode = 200;
            res.setHeader('Content-Type', 'image/jpeg');
            res.end(favicon);
            break;
        default:
            console.log('default');
            res.statusCode = 404;
            res.end('<h1>Oops! Not found!</h1>');
            break;
    }
});


//------------------------------------------
// Listen to requests on specified port
//------------------------------------------
const port = 8000;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`listening on port ${port}`);
})