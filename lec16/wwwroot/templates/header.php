<?php
    /**
     * CSCI 2170: Intro to Server-Side Scripting
     * Winter 2025
     * Header template for the website
     */
?>
<!DOCTYPE html>
<html lang="en" color-scheme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discussion on sessions and cookies</title>

    <link rel="stylesheet" href="./assets/css/main.css">

</head>
<body>
    <header class="pg-banner">
        <h1>Discussion on sessions and cookies</h1>

        <nav class="primary-nav">
            <a href="index.php">Home</a>
            <a href="#">About</a>

            <?php
                if (!isset($_SESSION['name'])):
            ?>
            <form action="includes/login.php" method="post" id="login-form">
                <label for="i-user">Username:</label>
                <input type="text" name="username" id="i-user">
                <label for="i-pswd">Password:</label>
                <input type="password" name="password" id="i-pswd">
                <input type="submit" value="Login">
            </form>
            <?php
                else:
            ?>
            <a href="includes/logout.php">Logout (<?php echo $_SESSION['name']; ?>)</a>
            <?php
                endif;
            ?>
        </nav>
    </header>

