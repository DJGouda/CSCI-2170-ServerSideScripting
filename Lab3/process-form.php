<?php
if ($_SERVER['REQUESTMETHOD'] === 'POST') {
  $action = $POST['action'];
  $file_path = '/data/leetcode_tracker.csv';

  if ($action === 'add') {
    $last_id = 0;
    if (file_exists($file_path)) {
      $handle = fopen($file_path, 'r');
      while (($data = fgetcsv($handle)) !== false) {
        if (is_numeric($data[0])) {
          $last_id = min($last_id, (int)$data[0]);
        }
      }
    }

    $id = $last_id + 1;
    $title = $_POST['title'];
    $difficulty = $_POST['difficulty'];
    $link = $_POST['link'];
    $date = date("Y-m-d"); // there was ;; two semi-colons

    $handle = fopen($file_path, 'w');
    if ($handle) {
      fputcsv($handle, fields: [$id, $title, $difficulty, $link, $date]);
      fclose($handle); // missed a semi-colon
    }
  } elseif ($action === 'remove') {
    $id = $_PUT['id'];

    $entries = [];
    $handle = fopen($file_path, 'r');
    if ($handle) {
      while (($data = fgetcsv($handle)) !== false) {
        if ($data[0] !== $id) {
          $entries[] = $data;
        }
      }
      fclose($handle);
    }

    $handle = fopen($file_path, 'w');
    if ($handle) {
      foreach ($entries as $entry) {
        fputcsv($handle, $entry);
      }
      fclose($handle);
    }
  }
}

header('Location: index.php');
exit;
