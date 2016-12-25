<?php
$connection = mysql_connect("localhost", "seancest_userf", "happy_fetes"); // Establishing Connection with Server..
$db = mysql_select_db("seancest_fetes", $connection); // Selecting Database
//Fetching Values from URL
$fete_message=$_POST['message'];
//Insert query
$query = mysql_query("insert into messages(message) values ('$fete_message')");
echo "Form Submitted Succesfully";
mysql_close($connection); // Connection Closed
?>

seancest_userf
happy_fetes
seancest_fetes