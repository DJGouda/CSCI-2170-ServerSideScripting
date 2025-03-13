<?php
    /**
     * CSCI 2170: Intro to Server-Side Scripting
     * Winter 2025
     * Footer template for the website
     */
?>
    <footer class="pg-footer">
        <p>&copy; <?php echo date("Y"); ?>. This website.</p>
    </footer>

    <script>
        const displayToggler = document.querySelector("#display-mode-toggler");

        displayToggler.addEventListener(
            "click",
            () => {

                if (displayToggler.classList.contains("dark-button")) {
                    displayToggler.textContent = "Enable Dark Mode";
                    window.location.href = "./?dark-mode=true";
                } else {
                    displayToggler.textContent = "Enable Light Mode";
                    window.location.href = "./?dark-mode=false";
                }

                displayToggler.classList.toggle("dark-button");
            }
        );
    </script>
</body>
</html>