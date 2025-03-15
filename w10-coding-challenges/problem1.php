<?php
$host = 'localhost';     
$username = 'root';      
$password = '';  // for password, not gonna share mine, it's very absurd!!
$database = 'mydatabase';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) { //connection check!!
    die("Connection failed: " . $conn->connect_error);
}


function insertRecord($id, $name, $email) {
    global $conn;

    $query = "INSERT INTO users (id, name, email) VALUES (?, ?, ?)";
    $record = $conn->prepare($query);


    $record->bind_param("iss", $id, $name, $email);

    if ($record->execute()) {
        echo "Record inserted successfully!";
    } else {
        echo "Error inserting record: " . $record->error;
    }

    $record->close();
}

insertRecord(1, 'Hari Om', 'hariOm@gmail.com');

$conn->close();
?>