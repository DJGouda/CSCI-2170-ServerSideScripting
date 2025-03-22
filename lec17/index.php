    <?php
        require_once "templates/header.php";
    ?>

    <nav id="user-login-form">
        <form id="login-form">
            <label for="username">Enter username:</label>
            <input type="text" name="username" id="input-username">
            <label for="input-password">Enter password:</label>
            <input type="password" name="" id="input-password">
            <input type="submit" value="Login">
        </form>
        <a href="includes/logout.php">Logout (<?php $_SESSION["username"]; ?>)</a>
    </nav>

    <main id="pg-main-content">
        <section>
            <h2>Login to continue</h2>
            <h2>You are now logged in</h2>
        </section>
    </main>

    <?php
        require_once "templates/footer.php";
    ?>
