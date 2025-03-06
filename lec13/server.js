/**
 * CSCI 2170: Intro to Server-Side Scripting
 * Winter 2025
 * Working with packages and databases
 * Lecture on Feb 28, 2025
 */

//------------------------------------------
// Modules to be included
//------------------------------------------
const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

const db = require ("./db/db");

// Access template
const html = fs.readFileSync(
    `${__dirname}/templates/todo-list.html`,
    "utf-8"
);
const errorHTML = fs.readFileSync(
    `${__dirname}/templates/404.html`,
    "utf-8"
);

//------------------------------------------
// Server parameters
//------------------------------------------
const port = 8000;
const host = "localhost";

//------------------------------------------
// Create server instance
//------------------------------------------
const server = http.createServer((request, response) => {

    if (!request.url.includes('favicon')) {
        // For now, let's ignore the default ./favicon.ico requests from the browser

        if (request.url === "/home" || request.url === "/") {

            // Send default HTTP response
            response.end(html);

        } else if (request.url.includes("/update")) {

            const queryParams = request.url.split('/');
            console.log(queryParams);

            // Create a variable to hold updated HTML, that combines
            // the template HTML and the JSON data
            let updatedHTML;

            // Read from the DB
            db.query("UPDATE `todo-list` SET done=1 WHERE id=" + queryParams[2], (err, results, fields) => {
                if (err) throw err;
            
                console.log(results);
            });
            
        } else if (request.url.includes("/get")) {

            const queryParams = request.url.split('/');
            console.log(queryParams);

            // Create a variable to hold updated HTML, that combines
            // the template HTML and the JSON data
            let updatedHTML = "";

            // Read from the DB
            db.query("SELECT * FROM `todo-list`", (err, results, fields) => {
                if (err) throw err;
            
                // console.log(results);

                updatedHTML += "<ul>";

                results.forEach((result) => {
                    let done = result.done ? "done" : "not done";
                    updatedHTML += `<li id='${result.id}'>${result.item} -- ${done}</li>`;
                });

                updatedHTML += "</ul>";

                // <ul>
                //     <li>Item info -- not done</li>
                // </ul>

                console.log(updatedHTML);
                // Send HTTP response
                response.end(updatedHTML);
            });
        }
    }
});


//------------------------------------------
// Wait/listen for HTTP requests
//------------------------------------------
server.listen(port, host, () => {
    console.log(`Listening on port ${port}`);
});
