const mysql = require ("mysql");
const DB_PARAMS = require ("./config");


const db = mysql.createConnection(DB_PARAMS);

db.connect(err => console.error(err));

// db.query("SELECT * FROM `todo-list`", (err, results) => {
//     if (err) throw err;

//     console.table(results);
// });

module.exports = db;
