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
$co2_level = $_POST['co2_level'];

if ($co2_level < 0) {
    echo "<script>
            alert('Error: CO2 level value cannot be negative!');
            window.location.href='CO2_level.html';
          </script>";
    exit();
}

// Prepare and bind the SQL statement
$stmt = $conn->prepare("INSERT INTO co2_level (co2_level, location) VALUES (?, ?)");
$stmt->bind_param("ds", $co2_level, $location);

// Set parameters and execute the statement
$stmt->execute();

$stmt->close();
$conn->close();

// redirect to success page
header("Location: success_CO2.html");
exit();
?>