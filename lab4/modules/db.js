/**
 * CSCI 2170: Intro to Server-Side Scripting
 * Winter 2025
 * Lab 4: db.js
 */

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost", 
  user: "root", 
  password: "", 
  database: "lab4",
  port: 3306, 
});


// db.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!");
// });

module.exports = db;
