<!DOCTYPE HTML>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css">
        <title>Contact Review</title>
    </head>
    <body class="review-body">
        <?php
        include "inc/header.inc.php";
        ?>
        <main  class="review">
            <h2>Thanks for Messaging</h2>
            <p>Thanks for writing.<br>We recieved your message.</p>
            <p>Name: <?= $_POST['firstname'] . " " . $_POST['lastname'] . "<br>";?></p>
            <p>Email: <?= $_POST['email'] . "<br>";?></p>
            <p>Phonenumber: <?= $_POST['phonenumber'] . "<br>";?></p>
            <p>Subject: <?= $_POST['subject'] . "<br>";?></p>
            <p>Message: <?= $_POST['message'] . "<br>";?></p>
        </main>
        <?php
        include "inc/footer.inc.php";
        ?>
    </body>
</html>