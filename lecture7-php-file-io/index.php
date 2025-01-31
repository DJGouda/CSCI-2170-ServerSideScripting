 <?php
    require_once"templates/header.php";

    $name = "Yoda";
 ?>
    <main class="pg-main-content one-em-padding">
        <h2>Hello, <?php echo $name;?></h2>

        <?php
            // echo readfile("files/things.txt");
            // echo file_get_contents("files/things.txt")

            // $file = fopen("files/things.txt", "r");
            // // echo fgets($file);
            // while(!feof($file)){
            // echo "<p>". fgets($file). "</p>";
            // }
            // fclose($file);

            // // $file = fopen("files/things.txt", "a");
            // // fwrite($file, "new thing!". PHP_EOL);
            // // fclose($file);

            // $json_data = json_encode(['data' => 'somthing else']);

            // $file = fopen("files/things.json", "w+");
            // fwrite($file,$json_data);
            
            // rewind(($file));

            // while(!feof($file)){
            // echo fgets($file);
            // }
            // fclose(($file));
        ?>

<form action="todo-list.php">
        <label for="todo-input">Enter to-do list item:</label>
        <input type="text" name="todo-item" id="todo-input">

        <input type="submit" value="Submit" name="todo-submit">
    </form>
    </main>

    <script>
        //Fetch to read from list.php
    //     fetch("todo-list.php")
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.error("Something went wrong!"))

    async function getToDoList(){
        const response = await fetch("files/response.php");
        const data = await response.json();
        console.log(data);
    }

    getToDoList();
</script>

    <?php
    require_once"templates/footer.php";
 ?>