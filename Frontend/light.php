<?php
// connect to the database
$servername = "localhost";
$username = "root";
$password = "Edlanta39!";
$dbname = "website";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$location = $_POST['location'];
$light_level = $_POST['light_level'];

if ($light_level < 0) {
    echo "Error: Light level value cannot be negative!";
    exit();
}

// Prepare and bind the SQL statement
$stmt = $conn->prepare("INSERT INTO light (light_level, location) VALUES (?, ?)");
$stmt->bind_param("ds", $light_level, $location);

// Set parameters and execute the statement
$stmt->execute();

$stmt->close();
$conn->close();

// redirect to success page
header("Location: success_light.html");
exit();
?>