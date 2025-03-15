const mysql = require('mysql');

const conn = mysql.createconn({
  host: 'localhost',     
  user: 'root',          
  password: '',  // for password, not gonna share mine, it's very absurd!!
  database: 'mydatabase' 
});

function deleteUser(id) {
    const query = 'DELETE FROM users WHERE id = ?';
    const values = [id];
  
    conn.query(query, values, (error, results) => {
      if (error) {
        console.error('Error deleting user:', error);
        return;
      }
  
      if (results.affectedRows > 0) {
        console.log('User deleted successfully!');
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
 
    deleteUser(1);
  });
  
  conn.end();