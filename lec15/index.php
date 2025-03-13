<?php
    session_start();
    // $_SESSION['name'] = "Yoda";

    /**
     * CSCI 2170: Intro to Server-Side Scripting
     * Winter 2025
     * Homepage template for the website
     */

    if ((isset($_GET['dark-mode']) 
    && ($_GET['dark-mode'] == "true"))) {
        setcookie("dark-mode", "enabled");
        header("Location: ./index.php", 302);
    } 
    elseif ((isset($_GET['dark-mode']) 
    && ($_GET['dark-mode'] == "false"))) {
        setcookie("dark-mode", "enabled", time() - 1000);
        header("Location: ./index.php", 302);
    }

    require_once "./includes/functions.php";
    require_once "./templates/header.php";

    $users = json_decode(file_get_contents("./data/data.json"), true);


    $darkModeClass = "";
    $buttonText = "";
    // if (!(isset($_GET['dark-mode']) && ($_GET['dark-mode'] == "true"))) {
    if (!isset($_COOKIE['dark-mode'])) {
        $darkModeClass = "dark-button";
        $buttonText = "Enable dark mode";
    } else {
        $buttonText = "Enable light mode";
    }
?>
    <button id="display-mode-toggler"
    class="<?php echo $darkModeClass; ?>"
    type="button">
        <?php echo $buttonText; ?>
    </button>

    <main class="pg-main-content">
        <section id="gen-info">
            <h2>Welcome!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, corporis! Fugiat unde non, at labore quisquam consectetur aspernatur illo aut harum quidem minus repellat accusamus, rerum quaerat ad! Suscipit, autem?</p>
        </section>
        <section id="dashboard">
            <h2 class="warning">You must login to view this dashboard!</h2>

            <h2>Data dashboard</h2>

            <div class="dashboard-table-container">
                <?php
                    $userCountries = getData($users, "country", "table");
                    print ($userCountries);

                    $userRegion = getData($users, "region", "table");
                    print ($userRegion);
                
                    $userNames = getData($users, "name", "table");
                    print ($userNames);
                ?>
            </div>
        </section>
    </main>

<?php require_once "./templates/footer.php"; ?>