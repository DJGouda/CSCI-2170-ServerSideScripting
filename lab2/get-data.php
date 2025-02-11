<!-- @Duren Gouda
B00949586
 -->

<?php
$file='data.json'; // load the file 
$jsonData = file_get_contents($file); // load the contents


$data = json_decode($jsonData, true); // converting json object to php object


$fruits = $data['fruits']; // load the json in array

echo "<!DOCTYPE html>";
echo "<html>";
echo "<head>";
echo "<title>Fruit Nutrition Table</title>";
echo "<style>
        h1{text-align:center}
        table {
            width: 50%;
            border-collapse: collapse;
            margin: auto;
        }
        th, td {
            border: 1px solid;
            padding: 8px;
            text-align: left;
        }
        th {background-color: #f4f4f4;}
      </style>";
echo "</head>";
echo "<body>";
echo "<h1>Fruit Nutrition Table</h1>";
echo "<table>";
echo "<tr>
        <th>Name</th>
        <th>Calories</th>
        <th>Carbohydrates</th>
      </tr>";

foreach ($fruits as $fruit) { // loop through all the fruit types
    echo "<tr>
            <td>{$fruit['name']}</td>
            <td>{$fruit['calories']}</td>
            <td>{$fruit['carbohydrates']}</td>
          </tr>";
}

echo "</table>";
echo "</body>";
echo "</html>";
?>