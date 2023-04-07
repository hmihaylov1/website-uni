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

// Retrieve data from the "CO2" table
$sql = "SELECT location, co2_level, measurement_time FROM co2_level";
$result = mysqli_query($conn, $sql);

$data = array();

// Loop through each row in the result set and add it to the data array
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
      $data[] = $row;
    }
}
  
// Close the database connection
$conn->close();

// Return the data as a JSON object
header('Content-Type: application/json');
echo json_encode($data);