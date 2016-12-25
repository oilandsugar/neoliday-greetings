<?php
$servername = "localhost";
$username = "seancest_userf";
$password = "happy_fetes";
$dbname = "seancest_fetes";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM messages ";
$result = mysqli_query ($conn, $sql);

if (mysqli_num_rows($result) > 0 ) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<h1>" . $row["message"]. "</h1>";
    }
} else {
    echo "<h1>Aucun message</h1>";
}
mysqli_close($conn);
?>