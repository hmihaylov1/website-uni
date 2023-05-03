<?php
// start session
session_start();

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

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare a statement to retrieve user with given username and password
    $stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE username = ? AND password = ?");
    mysqli_stmt_bind_param($stmt, "ss", $username, $password);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    // Check if username and password match
    if (mysqli_num_rows($result) == 1) {
        // Login successful, set session variables and redirect to dashboard
        $_SESSION['username'] = $username;
        header('Location: ../Frontend/website.html');
    } else {
        // Login failed, show error message
        $error = "Invalid username or password";
    }
}
?>