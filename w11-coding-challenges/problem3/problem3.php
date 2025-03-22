<?php
session_start();

// initialize the visit count if it doesn't exist
if (!isset($_SESSION['visitCount'])) {
    $_SESSION['visitCount'] = 0;
}

// increment visit count
$_SESSION['visitCount']++;

// display visit count
$visitCount = $_SESSION['visitCount'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Visit Counter</title>
</head>
<body>
    <h1>Welcome to the Visit Counter Page</h1>
    <p>You already visited this page <?php echo $visitCount; ?> time(s).</p>

    <form method="POST" action="">
        <button type="submit" name="reset">Reset Counter</button>
    </form>

    <?php
    // reset button click
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['reset'])) {
        // reset the visit count
        $_SESSION['visitCount'] = 0;
        header("Location: problem3.php");
        exit();
    }
    ?>
</body>
</html>