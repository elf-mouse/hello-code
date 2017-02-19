<?php
require('config.php');
require(ABSPATH . 'user/register.php');
?>
<form action="" method="post">
    <p>
        <label>Username</label>
        <input type="text" name="username">
    </p>
    <p>
        <label>Password</label>
        <input type="text" name="password">
    </p>
    <p>
        <button type="submit">Register</button>
    </p>
</form>
