const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const filenames = {
    html: "templates/home.html",
    css:"styles/main.css",
    js: "scripts/behaviours.js",
    favicon: "assets/images/by-camylla-battani.jpg"
};

const htmlFile = fs.readFileSync(`${__dirname}/${filenames.html}`,'utf-8');
const cssFile = fs.readFileSync(`${__dirname}/${filenames.css}`);
const jsFile = fs.readFileSync(`${__dirname}/${filenames.js}`);
const faviconFile = fs.readFileSync(`${__dirname}/${filenames.favicon}`);

const server = http.createServer((req, res) =>{
    console.log(req.url);

    const {pathname, query} = url.parse(req.url);
    const queryParams = querystring.parse(query);
    console.log(queryParams);
    // console.log(pathname);

    switch(pathname){
        case `/${filenames.css}`:
            // console.log(filenames.css);
            res.end(cssFile);
            break;
        case `/${filenames.js}`:
            // console.log(filenames.js);
            res.end(jsFile);
            break;
        case `/${filenames.favicon}`:
            // console.log(filenames.favicon);
            res.end(faviconFile)
            break;
        case `/${filenames.htmlFile}`:
        default:
            // console.log(filenames.html);
            res.setHeader('Content-Type','text/html');
            res.end(htmlFile);
            break;
        
            // console.log('default');
            // res.statusCode = 404;
            // res.end('<h1>Oops! Not found!</h1>');
            // break;
    }

});

const port = 8000;
const host = 'localhost';
server.listen(port,host, () => {
    console.log(`listening on port ${port}`);
})