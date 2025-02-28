/**
 * CSCI 2170: Intro to Server-Side Scripting
 * Winter 2025
 * Working with templates, files, and databases
 * Lecture on Feb 26, 2025
 */

//------------------------------------------
// Modules to be included
//------------------------------------------
const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

// const replaceString = require('./modules/replaceString');

// Access template
const html = fs.readFileSync(
    `${__dirname}/templates/course-info.html`,
    "utf-8"
);

// Read JSON file
const courses = JSON.parse(
    fs.readFileSync(
    `${__dirname}/data/courses.json`,
    "utf-8"
));

//------------------------------------------
// Server parameters
//------------------------------------------
const port = 8000;
const host = "localhost";

//------------------------------------------
// Create server instance
//------------------------------------------
const server = http.createServer((request, response) => {

    // http://localhost:8000/?course=1110
    const queryParams 
        = querystring.parse(request.url.split('?')[1]);
    console.log(queryParams.course);

    let updatedHTML;

    for (course of courses) {

        if (course.courseCode.includes(queryParams.course)) {
            console.log(course.courseCode);
            console.log(course.courseName);

            // replaceString.sayHello();`

            // updatedHTML = replaceString.generateResponse(
            //                             html, 
            // updatedHTML = replaceString.generateResponse(
            //  
    
            updatedHTML = html.replace(
                /COURSE_CODE_HERE/,
                course.courseCode
            );
            updatedHTML = updatedHTML.replace(
                /COURSE_NAME_HERE/,
                course.courseName
            );
        }
    }

    response.end(updatedHTML);
});


//------------------------------------------
// Wait/listen for HTTP requests
//------------------------------------------
server.listen(port, host, () => {
    console.log(`Listening on port ${port}`);
});
