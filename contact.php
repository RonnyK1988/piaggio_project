<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css">
        <script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>
        <script src="js/form.js" async></script>
        <title>Contact Piaggio Team</title>
    </head>
    <body id="contact-body">
        <?php
        include "inc/header.inc.php";
        ?>
        <main id="contact-main">
            <h2 id="form-headline">Contact Us</h2>
            <h3>It seems more difficult than it is</h3>
            <form action="contactreview.php" method="post">
                <label for="firstname">Firstname: </label>
                <input class="input" type="text" id="firstname" name="firstname" placeholder="Firstname (required)" minlength="2" required>
                <p class="firstname"></p>

                <label for="lastname">Lastname: </label>
                <input class="input" type="text" id="lastname" name="lastname" placeholder="Lastname (required)" minlength="2" required>
                <p class="lastname"></p>


                <label for="email">Email: </label>
                <input class="input" type="email" id="email" name="email" placeholder="Email (required)" required>
                <p class="email"></p>

                <label for="phonenumber">Phone: </label>
                <input class="input" type="tel" name="phonenumber" id="phonenumber" placeholder="Phonenumber (optional)">
                <p class="phonenumber"></p>


                <label for="subject">Subject: </label>
                <input class="input" type="text" name="subject" id="subject" placeholder="Your Subject (required)" minlength="2" required>
                <p class="subject"></p>

                <label for="message">Message: </label>
                <textarea class="input" name="message" id="message" cols="30" rows="10" placeholder="Please enter your message (required)" minlength="50" required></textarea>
                <p class="char-number">You need to write at least 50 characters: 0</p>

                <input id="submit" type="submit" value="Submit" disabled>
                <p id="message-output"></p>
            </form>
        </main>
        <?php
        include "inc/footer.inc.php";
        ?>
    </body>
</html>