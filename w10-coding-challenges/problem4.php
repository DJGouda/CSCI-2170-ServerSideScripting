<?php
$host = 'localhost';      
$username = 'root';       
$password = '';  // for password, not gonna share mine, it's very absurd!!
$database = 'mydatabase';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function deleteUser($id) {
    global $conn;

    $query = "DELETE FROM users WHERE id = ?";
    $record = $conn->prepare($query);

    $record->bind_param("i", $id);

    if ($record->execute()) {
        if ($record->affected_rows > 0) {
            echo "User deleted successfully!";
        } else {
            echo "No user found with given ID.";
        }
    } else {
        echo "Error deleting user: " . $record->error;
    }

    $record->close();
}

deleteUser(1);

$conn->close();
?>