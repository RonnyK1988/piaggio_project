<?php
function emailCheck($raw_email) {
    global $validation_error;
    global $con;
    
    if(filter_var($raw_email, FILTER_VALIDATE_EMAIL)) {

        $raw_email = mysqli_real_escape_string($con, $raw_email);
        $query = "SELECT * FROM users WHERE mail='$raw_email'";
        $result = mysqli_query($con, $query);
        $count = mysqli_num_rows($result);
        
        if ($count == 0) {
            return TRUE;
          } else {
            $validation_error .= "Email is already taken.<br>";
          }
            } else {
                $validation_error .= "Invalid email format.<br>";
        }
    }

function pwCheck($raw_pw) {
    global $validation_error;
    if (strlen($raw_pw) < 8) {
        $validation_error .= "Password must be at least 8 characters long.<br>";
        } elseif (strlen($raw_pw) > 30) {
        $validation_error .= "Password must be maximum 30 characters long.<br>";  
        } elseif (!preg_match("/.*[0-9]+.*/", $raw_pw)) {
        $validation_error .=  "Password must contain at least one number.<br>";
        } elseif (!preg_match("/[a-zA-Z]+/", $raw_pw)) {
        $validation_error .= "Password must contain at least one letter.<br>";
         } elseif (!preg_match("/[^a-zA-Z0-9]+/", $raw_pw)) {
        $validation_error .=  "Password must contain at least one special character.<br>";
        } else {
        return TRUE;
        }
}

// Checking the Firstname
function nameCheckFirst($raw_first) {
    global $validation_error;
    $raw_first = trim(htmlspecialchars($raw_first));
    if(strlen($raw_first) > 30) {
        $validation_error .= "You have a pretty long last name. Please enter no more than 30 characters.<br>";
    } else if(strlen($raw_first) < 2) {
        $validation_error .= "You have a pretty short last name. Please enter at least 2 characters.<br>";
    } else if (!preg_match('/^[A-Za-z\- ]+$/', $raw_first)){
        $validation_error .= "Last name can only consist of letters, a hyphens and a space.<br>" ;
    } else {
        return TRUE;
    }
}

// Checking the Firstname
function nameCheckLast($raw_last) {
    global $validation_error;
    $raw_last = trim(htmlspecialchars($raw_last));
    if(strlen($raw_last) > 30) {
        $validation_error .= "You have a pretty long last name. Please enter no more than 30 characters.<br>";
    } else if(strlen($raw_last) < 2) {
        $validation_error .= "You have a pretty short last name. Please enter at least 2 characters.<br>";
    } else if (!preg_match('/^[A-Za-z\- ]+$/', $raw_last)){
        $validation_error .= "Last name can only consist of letters, a hyphens and a space.<br>" ;
    } else {
        return TRUE;
    }
}
?>