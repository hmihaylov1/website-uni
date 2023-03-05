<?php
$servername = "localhost:3306";
$username = "root";
$password = "Edlanta39!";
$dbname = "website";    

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
};

// prepare the SQL statement to insert data into the CO2_level and roomName tables
$sql = "INSERT INTO CO2_level (co2_level) VALUES ('$co2_level')";
$sql2 = "INSERT INTO roomName (room_name) VALUES ('$room_name')";

// execute the SQL statements
if ($conn->query($sql) === TRUE && $conn->query($sql2) === TRUE) {
  echo "New records created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// close the database connection
$conn->close();

?>
