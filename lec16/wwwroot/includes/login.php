<?php
    session_start();
    $user = "stark";
    $pswd = "password";

    // Check to see if user exists in our user data
    $users = json_decode(
        file_get_contents("./users.json"),
        true
    );

    foreach ($users as $key => $value) {
        if (($value['username'] == $user)
            &&
            ($value['password'] == $pswd)) {
            // print ("user found!");
            // After the user is successfully logged in,
            //  regenerate the session ID and store info as you need in the session variable
            session_regenerate_id();
            $_SESSION['username'] = $value['username'];
            $_SESSION['role'] = $value['role'];

            header("Location: index.php");
        }
        // print("{$key} => ");
        // print_r($value);
        // print("<br>");
    }

    /* Goals:
     * (1) Start session - "log user in" - redirect user to homepage after login
     * (2) Store user info in session variable (should replace name in about and contact page)
     * (3) Customize user's name in <h1> based on session variable
     * (4) Make logout option only visible after user is logged in
     */
?>