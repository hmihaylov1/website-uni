<?php

$student_ID = $_POST["student_ID"];

if($student_ID == "123456") {
    header("Location: website.html");
    exit;
}
else{
    echo "Please check the details and try again";
    exit;
}

?>