<?php
session_start();

$_SESSION['user'] = null; // 登出
header('Location: login.php'); // 返回登录页
