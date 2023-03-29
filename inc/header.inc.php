<?php
echo "<header>
<nav class='main-nav'>
    <a href='#top'><img class='logo' src='images/piaggio_logo.webp' alt='Piaggio Logo'></a>
    <ul>
        <li><a href='index.php#mission'>Mission</a></li>
        <li><a href='index.php#models'>Models</a></li>
        <li><a href='index.php#team'>Our Team</a></li>
    </ul>   
</nav>";

if(isset($_SESSION['email'])){
    echo "<a class='login-icon' href='logout.php'><img id='login-icon' src='images/logout-icon.png' title='Logout' alt='link to Login or Register icon'></a>";
} else {
    echo "<a class='login-icon' href='login_register.php'><img id='login-icon' src='images/login_icon.png' title='Login or Register' alt='link to Login or Register icon'></a>";
}

echo "</header>";
?>