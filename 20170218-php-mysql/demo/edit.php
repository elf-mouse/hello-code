<?php
require('config.php');
require(ABSPATH . 'user/auth.php');
require(ABSPATH . 'user/detail.php');
?>

<form action="" method="post">
    <input type="hidden" name="id" value="<?php echo $user['id']; ?>">
    <p>
        <label>Username</label>
        <input type="text" name="username" value="<?php echo $user['username']; ?>">
    </p>
    <p>
        <label>Password</label>
        <input type="text" name="password" value="<?php echo $user['password']; ?>">
    </p>
    <p>
        <button type="submit">Save</button>
        <button type="button" onclick="history.back()">Back</button>
    </p>
</form>
