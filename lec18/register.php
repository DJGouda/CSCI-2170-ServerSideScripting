<?php
        require_once "templates/header.php";
    ?>


    <main id="pg-main-content">
        <section>
            <h2>Register to use this website</h2>

            <form action="" id="registration-form">
                <div class="form-widget">
                    <label for="i-email">Enter email: </label>
                    <input type="email" name="email" id="i-email">
                </div>
                <div class="form-widget">
                    <label for="i-pswd">Enter password:</label>
                    <input placeholder="at least 8 characters" title="at least 8 characters, at least 1 number, at least 1 upper case character,at least 1 symbol"
                    pattern="(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*\W+).{5,}" type="password" name="pswd" id="i-pswd">
                </div>

                <!-- 

                
                cscI217o*
                at least 8 characters
                at least 1 number
                at least 1 upper case character
                at least 1 symbol
                [A-Za-z0-9\W]{8,}
                -->

                <div class="form-widget">
                    <label for="i-pswd-match">Enter password, again:</label>
                    <input type="password" name="pswd-match" id="i-pswd-match">
                </div>
                <div class="form-widget">
                    <input id="submit-btn" type="submit" value="Register!">
                    <input type="reset" value="Clear">
                </div>
            </form>
        </section>
    </main>

    <footer id="pg-footer">
        <p>&copy; 2025. This website.</p>
    </footer>

    <script>
        document.getElementById("submit-btn").addEventListener("click", (event) => {
            //event.preventDefault();

            const email = document.getElementById("i-email").value;
            const pswd1 = document.getElementById("i-pswd").value;
            const pswd2 = document.getElementById("i-pswd-match").value;

            console.log(pswd1 === pswd2);
        })
    </script>

</body>
</html>