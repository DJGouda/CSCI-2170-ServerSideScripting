<?php
/**
 * CSCI 2170: Intro to Server-Side Scripting (Winter 2025)
 * Dr. Raghav Sampangi
 * Code for the homepage for the to-do list discussion example
 * from our discussion on Jan 24, 2025
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome!</title>
    <style>
        .error {
            font-style: italic;
            font-weight: bold;
            background-color: maroon;
            color: white;
        }
    </style>
</head>
<body>
    
    <form action="todo-list.php">
        <label for="todo-input">Enter to-do list item:</label>
        <input type="text" name="todo-item" id="todo-input">

        <input type="submit" value="Submit" name="todo-submit">
    </form>

    <?php
        if (isset($_REQUEST['error'])) {
    ?>

    <p class='error'>Oops, you're not allowed to do that!</p>

    <?php
        }
    ?>

</body>
</html>