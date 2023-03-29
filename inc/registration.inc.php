<?php
if($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["register"])) {

    //  Get the form values and assign raw_variables
    $raw_first = $_POST['firstnamereg'];
    $raw_last = $_POST['lastnamereg'];
    $raw_email = $_POST['emailreg'];
    $raw_pw = $_POST['passwordreg'];

    // Connection to DB and Table

    $con = @new mysqli("","root","","piaggio_project");
    if($con->connect_error) 
        exit("Connection Error");

    // Scanning threw all inputs

    // Checking the email is valid format and if it is taken already

    include "inc/reg-check-functions.inc.php";

    // Insert data in Table if all are Valid

    if(emailCheck($raw_email) && pwCheck($raw_pw) && nameCheckFirst($raw_first) && nameCheckLast($raw_last)) {
        // Retrieve the maximum value in the column
        $max_user_id = "SELECT MAX(user_id) AS 'maxvalue' FROM users";
        $result = mysqli_query($con, $max_user_id);
        $row = mysqli_fetch_assoc($result);
        $maxvalue = $row['maxvalue'];
        $user_id = $maxvalue + 1;

        $first = mysqli_real_escape_string($con, $raw_first);
        $last = mysqli_real_escape_string($con, $raw_last);
        $email = mysqli_real_escape_string($con, $raw_email);
        
        $pw = mysqli_real_escape_string($con, $raw_pw);
        $hash = password_hash($pw, PASSWORD_DEFAULT);

        // Step 3: Sanitize the user input
        $stmt = mysqli_prepare($con, "INSERT INTO users (user_id, first, last, mail, pw) VALUES (?, ?, ?, ?, ?)");
        mysqli_stmt_bind_param($stmt, "issss", $user_id, $first, $last, $email, $hash);

        // Step 4: Execute the SQL INSERT statement
        if (mysqli_stmt_execute($stmt)) {
            $validation_message = "Your account was created successfully. You can Login now.";
        } else {
        echo "Error: " . mysqli_error($con);
        }

        // Step 5: Close the database connection
        mysqli_stmt_close($stmt);
        mysqli_close($con);
    }
}
?>