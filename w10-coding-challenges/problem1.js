const mysql = require('mysql');

const conn = mysql.createconn({
  host: 'localhost',     
  user: 'root',          
  password: '',  // for password, not gonna share mine, it's very absurd!!
  database: 'test' 
});

function insertRecord(id, name, email) {
  const query = 'INSERT INTO users (id, name, email) VALUES (?, ?, ?)';
  const values = [id, name, email];

  conn.query(query, values, (error, results) => {
    if (error) {
      console.error('Error inserting record:', error);
      return;
    }
    console.log('Record inserted:', results);
  });
}

conn.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');

  insertRecord(1, 'Hari Om', 'hariOm@gmail.com');
});

conn.end();