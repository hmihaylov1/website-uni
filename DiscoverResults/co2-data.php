<?php

// connect to the database
$servername = "localhost";
$username = "root";
$password = "Edlanta39!";
$dbname = "website";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve data from the "temperature" table
$sql = "SELECT temperature, measurement_time FROM temperature";
$result = mysqli_query($conn, $sql);

$data = array();

if (mysqli_num_rows($result) > 0) {
    // Convert the retrieved data to an array of objects
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}

// Close the database connection
mysqli_close($conn);

// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
