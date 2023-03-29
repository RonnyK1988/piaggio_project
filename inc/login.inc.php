<?php
session_start();

$raw_first = "";
$raw_last = "";
$raw_email = "";
$validation_error = "";
$validation_message = "";



// PHP for  **** LOGIN ****

if($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["login"])) {
    $con = @new mysqli("","root","","piaggio_project");   // Starts DB connection new mysqli(host, username, password, dbname, port, socket)
    if($con->connect_error) 
        exit("Connection Error");
    $email = mysqli_real_escape_string($con, $_POST['email']);   // mysqli_real_escape_string removes special charachters
    $password = mysqli_real_escape_string($con, $_POST['password']);
    $query = "SELECT * FROM users WHERE mail='$email'";
    $result = mysqli_query($con, $query); // mysqli_query does a DB request
    $count = mysqli_num_rows($result); // gives the number of rows of a request
    if ($count > 0) {
       // Email exists in the database.
       $row = mysqli_fetch_assoc($result); // returns a array of the resulting row
       $stored_hashed_password = $row['pw'];
       if (password_verify($password, $stored_hashed_password)) {
        $_SESSION['email'] = $email;
        header("Location: login_register.php");
        exit; 
       } else {
            $validation_error = "* Incorrect password or email."; 
       }
    } else {
        $validation_error = "* Incorrect email or password.";
    }
}
?>