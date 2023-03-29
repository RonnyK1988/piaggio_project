<?php
    $firstname = "";
    $lastname = "";
    $email = "";
    $password = "";


    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $raw_firstname = trim(htmlspecialchars($_POST["firstnamereg"]));
        $raw_lastname = $_POST["lastnamereg"];
        $raw_email = $_POST["emailreg"];
        $raw_password = $_POST["passwordreg"];
    }



    $con = @new mysqli("","root","","piaggio_project");
    if($con->connect_error) 
        exit("Connection Error");

    $sql = "SELECT * FROM users";
    if($res = $con->query($sql)) {
        if($res->num_rows == 0) {
            echo "No matches";
        }

        while($dsatz = $res->fetch_assoc())
            echo $dsatz["user_id"] . ", "
            . $dsatz["first"] . ", "
            . $dsatz["last"] . ", "
            . $dsatz["pw"] . ", "
            . $dsatz["mail"] . "<br>";

        $res->close();
        }
     else 
        exit("Error on Request");
        $con->close();
?>