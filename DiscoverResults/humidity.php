<?php

// Replace these values with your MySQL database credentials
$servername = "localhost";
$username = "root";
$password = "Edlanta39!";
$dbname = "website";

// Create a new MySQLi object and connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for any errors in the connection
if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}

// Retrieve data from the "humidity" table
$sql = 'SELECT location, humidity_level, measurement_time FROM humidity';
$result = $conn->query($sql);

// Create an array to store the data
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