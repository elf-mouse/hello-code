<?php
session_start();

$post = $_POST;
$username = isset($post['username']) ? $post['username'] : '';
$password = isset($post['password']) ? $post['password'] : '';

if ($username && $password) {
    $sql = "SELECT * FROM user WHERE username='$username' AND password='$password' LIMIT 1";
    // 查下用户
    if ($result = mysqli_query($conn, $sql)) {
        $user = [];
        // 取字段
        while ($row = mysqli_fetch_row($result)) {
            $user = $row;
            break;
        }
        /* free result set */
        mysqli_free_result($result);
        if ($user) {
            // 设置用户
            $_SESSION['user'] = $user;
            echo 'Login success';
        } else {
            echo 'Login failure';
        }
    } else {
        echo 'Login failure';
    }
    /* close connection */
    mysqli_close($conn);
}
