/**
 * CSCI 2170: Intro to Server-Side Scripting
 * Winter 2025
 * Lab 4: server.js
 */

//------------------------------------------
// Modules to be included
//------------------------------------------
const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const db = require("./modules/db"); // included the db module!!



// Access template
const html = fs.readFileSync(
    `${__dirname}/templates/jedi-info.html`,
    "utf-8"
);
const errorHTML = fs.readFileSync(
    `${__dirname}/templates/404.html`,
    "utf-8"
);

//------------------------------------------
// Server parameters
//------------------------------------------
const PORT = 8000;
const HOST = "localhost";

//------------------------------------------
// Create server instance
//------------------------------------------
const server = http.createServer((request, response) => {

    if (!request.url.includes('favicon')) {
        // For now, let's ignore the default ./favicon.ico requests from the browser

        // http://localhost:8000/?name=luke
        const queryParams = querystring.parse(request.url.split('?')[1]);
        console.log(queryParams.name);

        // Create a variable to hold updated HTML, that combines
        // the template HTML and the JSON data
        let updatedHTML = "";

        if (queryParams.name == null) {
            updatedHTML = errorHTML;
        } else {

            //Your code for Lab 4 here.
            // db.connect((err) => {
            //     if (err) throw err;
            //     console.log("Connected!");
            //   });

              const query = "SELECT * FROM jedi";
              db.query(query, (err, results) => {
                  if (err) {
                      console.error("Database error:", err);
                      response.statusCode = 500; // Internal Server Error
                      return;
                  }

                  // this part is referenced from lecture-examples/node/feb28-node-DB/server.js link(probably not work!!!): https://git.cs.dal.ca/courses/2025-winter/csci-2170/lecture-examples/node/-/blob/main/feb28-node-DB/server.js?ref_type=heads
  
                  // Loop through all Jedi records
                  for (const jedi of results) {
                      if (jedi.name.toLowerCase().includes(queryParams.name.toLowerCase())) {
                          updatedHTML = html
                              .replace(/%_NAME_%/g, jedi.name)
                              .replace(/%_BIRTH_YEAR_%/g, jedi.birth_year)
                              .replace(/%_GENDER_%/g, jedi.gender)
                              .replace(/%_LS_COLOUR_%/g, jedi.lightsaber_colour);
                          break;
                      }
                  }
  
                  // if no Jedi is found, show the 404 error page
                  if (!updatedHTML) {
                      updatedHTML = errorHTML;
                      response.statusCode = 404; // 404
                  } else {
                      response.statusCode = 200; // 200
                  }
  
                  // Send the HTTP response
                  response.end(updatedHTML);
              });
          }
      }
  });


//------------------------------------------
// Wait/listen for HTTP requests
//------------------------------------------
server.listen(PORT, HOST, () => {
    console.log(`Listening on port ${PORT}`);
});


//------------------------------------------
// Write any required functions for lab 4
// in the space below
//------------------------------------------

// function to create the 
function createRecords() {
    const jediData = JSON.parse(fs.readFileSync(`${__dirname}/data/jedi.json`, "utf8"));

    jediData.forEach((jedi) => {
        const query = `
            INSERT INTO jedi (name, birth_year, gender, lightsaber_colour)
            VALUES (?, ?, ?, ?)
        `;
        db.query(query, [jedi.name, jedi.birth_year, jedi.gender, jedi.lightsaber_colour], (err, result) => {
            if (err) throw err;
            console.log(`Inserted record for ${jedi.name}`);
        });
    });
}

// i have created a function to the SELECT query
function readRecords() {
    const query = "SELECT * FROM jedi"; 

    db.query(query, (err, results) => {
        if (err) throw err;
        console.table(results);
    });
}

function updateRecord(id, field, newValue) {
    const query = `
        UPDATE jedi
        SET ${field} = ?
        WHERE id = ?
    `;

    db.query(query, [newValue, id], (err, result) => {
        if (err) throw err;
        console.log(`Updated record with ID ${id}`);
    });
}

function deleteRecord(table, id) {
    const query = `
        DELETE FROM ${table}
        WHERE id = ?
    `;

    db.query(query, [id], (err, result) => {
        if (err) throw err;
        console.log(`Deleted record with ID ${id} from table ${table}`);
    });
}

// createRecords(); // commented as told in the lab
// readRecords(); 
// updateRecord(1, "lightsaber_colour", "green");
// readRecords();
// deleteRecord("jedi", 2);
// readRecords(); 
