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

// get the form data
$locations = $_POST['location'];
$CO2_levels = $_POST['co2_level'];

// insert the data into the database
$stmt = mysqli_prepare($conn, "INSERT INTO co2_level (location, co2_level) VALUES (?, ?)");

for ($i = 0; $i < count($locations); $i++) {
  // check if CO2_levels value is non-negative
  if ($CO2_levels[$i] >= 0) {
    mysqli_stmt_bind_param($stmt, "ss", $locations[$i], $CO2_levels[$i]);
    mysqli_stmt_execute($stmt);
  }
}

mysqli_stmt_close($stmt);
mysqli_close($conn);

// redirect to success page
header("Location: success.html");
exit();
?>
