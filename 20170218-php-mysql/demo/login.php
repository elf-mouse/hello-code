<?php
require('config.php');
require(ABSPATH . 'user/login.php');

// 检查用户是否已登录
$isLogin = $_SESSION && $_SESSION['user'];
if ($isLogin) {
    header('Location: index.php'); // 已登录跳首页
    exit;
}
?>

<form action="" method="post">
    <p>
        <label>Username</label>
        <input type="text" name="username">
    </p>
    <p>
        <label>Password</label>
        <input type="password" name="password">
    </p>
    <p>
        <button type="submit">Submit</button>
    </p>
</form>
