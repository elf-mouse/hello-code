<?php
session_start();
// 检查用户是否已登录
$isLogin = $_SESSION && $_SESSION['user'];
if (!$isLogin) {
    header('Location: login.php'); // 未登录跳登录页
    exit;
}
