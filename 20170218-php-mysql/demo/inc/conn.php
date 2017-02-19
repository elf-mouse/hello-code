<?php
header('Content-type:text/html;charset=utf-8');
// 连接数据库
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
// 检查连接
if (!$conn) {
    echo 'Error: Unable to connect to MySQL.' . PHP_EOL;
    echo 'Debugging errno: ' . mysqli_connect_errno() . PHP_EOL;
    echo 'Debugging error: ' . mysqli_connect_error() . PHP_EOL;
    exit;
} else {
    // echo 'gg';
}
