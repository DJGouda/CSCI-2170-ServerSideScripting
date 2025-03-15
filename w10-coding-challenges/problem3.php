<?php
$host = 'localhost';      
$username = 'root';       
$password = '';  // for password, not gonna share mine, it's very absurd!!
$database = 'mydatabase';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function updateUserName($id, $newName) {
    global $conn;

    $query = "UPDATE users SET name = ? WHERE id = ?";
    $record = $conn->prepare($query);

    $record->bind_param("si", $newName, $id);

    if ($record->execute()) {
        if ($record->affected_rows > 0) {
            echo "User name updated successfully!";
        } else {
            echo "No user found with the given ID.";
        }
    } else {
        echo "Error updating user name: " . $record->error;
    }

    $record->close();
}

updateUserName(1, 'Raju Chaman');

$conn->close();
?>