<?php
    /**
     * CSCI 2170: Intro to Server-Side Scripting
     * Winter 2025
     * Function declarations for the website's features
     */


/**
 * @function: getData()
 * @args:   (1) $arr = array of objects that contains the data
 *          (2) $key = key in the object for the relevant data to be retrieved
 *          (3) $returnType = format in which data is to be returned
 * @returns: Values from the array, returned in the format specified
 */

function getData($arr, $key, $returnType = "table") {
    $returnValue = "";

    if ($returnType == "table") {

        $returnValue = "<table id={$key} class='dashboard-table'>";
        $returnValue .= "<tr><th>" . ucfirst($key) . "</th></tr>";

        foreach($arr as $item) {
            $returnValue .= "<tr><td>{$item[$key]}</td></tr>";
        }

        $returnValue .= "</table>";
    }

    return $returnValue;
}

?>