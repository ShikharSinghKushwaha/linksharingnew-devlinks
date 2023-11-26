<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Registration</title>
    <link rel="stylesheet" href="index.css"/>
</head>
<body>
<?php
    require('db.php');
    // When form submitted, insert values into the database.
    if (isset($_REQUEST['username'])) {
        // removes backslashes
        $username = stripslashes($_REQUEST['username']);
        //escapes special characters in a string
        $username = mysqli_real_escape_string($conn, $username);
        $email    = stripslashes($_REQUEST['email']);
        $email    = mysqli_real_escape_string($conn, $email);
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($conn, $password);
       
        $query    = "INSERT into `users` (username, password, email)
                     VALUES ('$username', '" . md5($password) . "', '$email')";
        $result   = mysqli_query($conn, $query);
        if ($result) {
            echo "<div class='form'>
                  <h3>You are registered successfully.</h3><br/>
                  <p class='link'>Click here to <a href='login.php'>Login</a></p>
                  </div>";
        } else {
            echo "<div class='form'>
                  <h3>Required fields are missing.</h3><br/>
                  <p class='link'>Click here to <a href='registration.php'>registration</a> again.</p>
                  </div>";
        }
    } else {
?>
<div class="login-form-container">
    <div class="form-container">
    <h1 class="login-title">Create Account</h1>

    <form class="form" action="" method="post"><br>
    <label for="username" class="login-style">Username

        <input type="text" class="login-input" name="username" placeholder="Username" required />
    </label>
    <label for="email" class="login-style" >Email
    
        <input type="text" class="login-input" name="email" placeholder="Email Adress" required>
    </label>
    <label for="pass" class="login-style" >Password

        <input type="password" class="login-input" name="password" placeholder="Password" required>
    </label>
        <input type="submit" name="submit" value="Register" class="submitBtn">
        <p class="check-style">Already a User <a href="login.php">Click to Login</a></p>
    </form>
    </div>
    </div>

    
<?php
    }
?>
</body>
</html>