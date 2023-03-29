<?php
include "inc/login.inc.php";

include "inc/registration.inc.php";
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
        <script src="js/login_register.js" async></script>
        <title>Login/Register at Piaggio</title>
    </head>
    <body id="contact-body">
    
        <?php
        include "inc/header.inc.php";
        
        if(isset($_SESSION['email'])){
            echo '
            <main id="contact-main">
                <p class="logged-in">You are already logged in!</p>           
            </main>';
            
        } else {
            echo 
            '<main id="contact-main">
            <div>
                <section id="register">
                    <form action="" method="post">
                        <h2>Register</h2>

                        <label for="firstname">Firstname: </label>
                        <input type="text" id="firstnamereg" name="firstnamereg" placeholder="Firstname (required)" value="' . $raw_first. '" required>
                        <p class="firstname"></p>

                        <label for="lastname">Lastname: </label>
                        <input type="text" id="lastnamereg" name="lastnamereg" placeholder="Lastname (required)" value="' . $raw_last . '" required>
                        <p class="lastname"></p>


                        <label for="email">Email: </label>
                        <input type="email" id="emailreg" name="emailreg" placeholder="Email (required)" value="' . $raw_email . '" required>
                        <p class="email"></p>

                        <label for="password">Password:</label>
                        <input type="password" name="passwordreg" id="passwordreg" placeholder="Password (required)" required>

                        <input type="submit" name="register" value="Register">
                        <p><?=$validation_error?></p>
                        <p class="succes-reg"><?=$validation_message ?></p>
                        <div id="logregchange"><p class="logregactive">Register</p><p class="logreghover">Login</p></div>
                    </form>
                </section>
                <section  class="hide" id="login">
                    <form action="" method="post">
                        <h2>Login</h2>
                        
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Email (required)" required>

                        <label for="pw">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Password (required)" required>

                        <input type="submit" name="login" value="Login">
                        <p><?=$validation_error?></p>
                        <p class="succes-reg"><?=$validation_message ?></p>


                        <div id="logregchange"><p class="logreghover">Register</p><p class="logregactive">Login</p></div>
                    </form>
                </section>
            </div>
        </main>';
        }

        
        
        include "inc/fixed-footer.inc.php";
        ?>
    </body>
</html>