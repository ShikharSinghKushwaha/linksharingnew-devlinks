<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Login</title>
    <link rel="stylesheet" href="index.css"/>
</head>
<body>
<?php
    require('db.php');
    session_start();
    // When form submitted, check and create user session.
    if (isset($_POST['username'])) {
        $username = stripslashes($_REQUEST['username']);    // removes backslashes
        $username = mysqli_real_escape_string($conn, $username);
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($conn, $password);
        // Check user is exist in the database
        $query    = "SELECT * FROM `users` WHERE username='$username'
                     AND password='" . md5($password) . "'";
        $result = mysqli_query($conn, $query) or die(mysql_error());
        $rows = mysqli_num_rows($result);
        if ($rows == 1) {
            $_SESSION['username'] = $username;
            // Redirect to user dashboard page
            header("Location: index.html");
        } else {
            echo "<div class='form'>
                  <h3>Incorrect Username/password.</h3><br/>
                  <p class='link'>Click here to <a href='login.php'>Login</a> again.</p>
                  </div>";
        }
    } else {
?>
<div class="login-form-container">
    <div class="form-container">
    <h1 class="login-title">Login</h1>
    <h4 class="description">Add your Details below to get back into the app</h4>

    <form class="form" method="post" style="margin-top: 1.2em;" name="login">
    <label for="email" class="login-style">Email
        
        <input type="text" class="login-input" name="username" placeholder="Username" autofocus="true"/>
    </label>
    <label for="pass" class="login-style" >Password

        <input type="password" class="login-input" name="password" placeholder="Password"/>
    </label><br>
        <input type="submit" value="Login" name="submit" class="submitBtn"/>
        <p class="check-style">Didn't have a account?<a href="registration.php">Create Account</a></p>
  </form>
    </div>
    </div>
 
<?php
    }
?>
</body>
</html>