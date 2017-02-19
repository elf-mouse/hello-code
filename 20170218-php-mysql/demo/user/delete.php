<?php
require('../config.php');

$post = $_POST;
$id = isset($post['id']) ? $post['id'] : 0;

if ($id) {
    $sql = "DELETE FROM user WHERE id=$id";
    // 删除
    if ($result = mysqli_query($conn, $sql)) {
        echo 'Delete success';
        header('Location: ../index.php');
    } else {
        echo 'Delete failure';
    }
    /* close connection */
    mysqli_close($conn);
} else {
    echo 'Delete failure';
}

exit;
