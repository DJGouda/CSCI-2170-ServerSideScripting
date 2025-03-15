const mysql = require('mysql');

const conn = mysql.createconn({
  host: 'localhost',     
  user: 'root',          
  password: '',  // for password, not gonna share mine, it's very absurd!!
  database: 'mydatabase' 
});

function updateUserName(id, newName) {
  const query = 'UPDATE users SET name = ? WHERE id = ?';
  const values = [newName, id];

  conn.query(query, values, (error, results) => {
    if (error) {
      console.error('Error updating user name:', error);
      return;
    }

    if (results.affectedRows > 0) {
      console.log('User name updated successfully!');
    } else {
      console.log('No user found with the given ID.');
    }
  });
}

conn.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');

  updateUserName(1, 'Raju Chaman');
});

conn.end();