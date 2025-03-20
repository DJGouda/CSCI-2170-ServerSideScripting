<?php
    session_start();

    /* Goals:
     * (1) Start session - "log user in" - redirect user to homepage after login
     * (2) Store user info in session variable (should replace name in about and contact page)
     * (3) Customize user's name in <h1> based on session variable
     * (4) Make logout option only visible after user is logged in
     */
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
</head>
<body>
    
    <?php
    $currentFile = basename($_SERVER['REQUEST_URI']);

    $pages = [
        "index.php" => "Homepage",
        "about.php" => "About page",
        "contact.php" => "Contact page"
    ];


    if (isset($_SESSION['username'])):
    ?>
    <h1>Welcome to the <mark>
        <?php echo $pages[$currentFile]; ?>
    </mark>, <?php echo $_SESSION['username']; ?>!</h1>

    <p><a href="logout.php">
        Logout (<?php echo $_SESSION['username']; ?>)
    </a></p>

    <?php
    else:
    ?>
    <h1>Welcome to the <mark>
        <?php echo $pages[$currentFile]; ?>
    </mark>, User!</h1>
    <p><a href="login.php">Log me in</a></p>
    <?php
    endif;
    ?>
