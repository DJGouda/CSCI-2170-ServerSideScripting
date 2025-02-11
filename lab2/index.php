<!-- @Duren Gouda
B00949586
 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Load Fruit Nutrition</title>
    <style>
        h1{text-align:center}
        button{
            width: 20%;
            height: 5em;
            margin: 0;
        }
        .container{text-align: center;}
        table {
            width: 50%;
            border-collapse: collapse;
            margin: auto;
            display: flex;
            justify-content: center;
        }
        th, td {
            border: 1px solid;
            padding: 8px;
            text-align: left;
        }
        th {background-color: #f4f4f4;}
      </style>
</head>
<body>
    <h1>Fruit Nutrition Data</h1>
    <div class="container"> <!-- To center the button, not asked but it looks good to me-->
    <button onclick="fetchData()">Load Data</button>
    </div>
    <div id="data-container">

    </div>
    <script>
        function fetchData(){
            fetch('get-data.php') // fetch api
            .then(response => response.text())
            .then(data => {
                document.getElementById('data-container').innerHTML=data; // for getting the inner html data from get-data.php
            });
        }
    </script>
</body>
</html>