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
$humidity_level = $_POST['humidity'];

if ($humidity_level < 0) {
    echo "Error: Humidity value cannot be negative!";
    exit();
}

// Prepare and bind the SQL statement
$stmt = $conn->prepare("INSERT INTO humidity (humidity_level, location) VALUES (?, ?)");
$stmt->bind_param("ds", $humidity_level, $location);

// Set parameters and execute the statement
$stmt->execute();

echo "Humidity level submitted successfully.";

$stmt->close();
$conn->close();

// redirect to success page
header("Location: success_humidity.html");
exit();
?>
