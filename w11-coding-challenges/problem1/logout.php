<?php
session_start();

session_destroy();

//go to login page
header("Location: login.php");
exit();
?>