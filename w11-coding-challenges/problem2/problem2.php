<?php
// check for submitted form
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $favFruit = $_POST['favFruit'];

    // to store cookie for the favorite fruit for 1 day
    setcookie('favFruit', $favFruit, time() + (86400 * 1), "/");
    header("Location: problem2.php");
    exit();
}

// check if cookie exists
if (isset($_COOKIE['favFruit'])) {
    $stored_fruit = htmlspecialchars($_COOKIE['favFruit']);
    $message = "Your favorite fruit is: $stored_fruit";
} else {
    $message = "No favorite fruit set yet.";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Favorite Fruit</title>
</head>
<body>
    <h1>Favorite Fruit</h1>
    <?php if (isset($message)): ?>
        <p><?php echo $message; ?></p>
    <?php endif; ?>

    <form method="POST" action="">
        <label for="favFruit">What is your favorite fruit:</label>
        <select id="favFruit" name="favFruit" required>
            <option value="Apple">Apple</option>
            <option value="Banana">Banana</option>
            <option value="Orange">Orange</option>
            <option value="Mango">Mango</option>
            <option value="Grapes">Grapes</option>
        </select>
        <button type="submit">Save</button>
    </form>
</body>
</html>