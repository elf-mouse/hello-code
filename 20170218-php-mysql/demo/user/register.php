<?php
$post = $_POST;
$username = isset($post['username']) ? $post['username'] : '';
$password = isset($post['password']) ? $post['password'] : '';

if ($username && $password) {
    // 检查
    $isValid = true;

    $sql = "SELECT * FROM user WHERE username='$username' AND password='$password' LIMIT 1";

    if ($result = mysqli_query($conn, $sql)) {
        $_username = '';
        /* fetch associative array */
        while ($row = mysqli_fetch_row($result)) {
            $_username = $row[1];
            break;
        }
        /* free result set */
        mysqli_free_result($result);
        // 检查重名
        if ($username === $_username) {
            $isValid = false;
            echo 'Duplication of name<br>';
        }
    }

    if ($isValid) {
        $sql = "INSERT INTO user(username,password) VALUES('$username', '$password')";
        if ($result = mysqli_query($conn, $sql)) {
            echo 'Register success';
        } else {
            echo 'Register failure';
        }
    } else {
        echo 'Register failure';
    }

    /* close connection */
    mysqli_close($conn);

    exit;
}
