<?php
/**
 * CSCI 2170: Intro to Server-Side Scripting (Winter 2025)
 * Dr. Raghav Sampangi
 * The to-do list discussion example: data processing script
 * Jan 31, 2025
 */

    /**
     * Create the list, i.e., structures to store the list data
     */

    if (!isset($_REQUEST['todo-submit'])):
        header("Location: index.php?error=true", 302);
        die();
    endif;

    // (1) Using arrays - continued from Jan 22nd
    $list = ["task 1", "task 2", "task 3"];
    $completion_of_list = ["complete", "pending", "pending"];

    /**
     * Update the arrays
     */
    if ($_REQUEST['todo-item'] !== ""):
        array_push($list, $_REQUEST['todo-item']);
        array_push($completion_of_list, "pending");
    endif;

    /**
     * Assemble a JSON array with response
     */
    // {{
    //     taskid: 1,
    //     task: name_of_task,
    //     status: task_status
    // },
    // {
    //     taskid: 2,
    //     task: name_of_task,
    //     status: task_status
    // },
    // {
    //     taskid: 3,
    //     task: name_of_task,
    //     status: task_status
    // }}
    
    $response = array();
    $i = 0;
    foreach($list as $item) {
        $temp = [
            "taskid" => $i+1,
            "task" => $item,
            "status" => $completion_of_list[$i++]
        ];
        array_push($response, $temp);
    }

    // echo "<pre>";
    // print_r($response);
    // echo "</pre>";

    $file = fopen("files/to-do-list.txt", "w");
    fwrite($file, json_encode($response));

    // echo json_encode($response); 

    header("Location : index.php", true, 302);
?>