<?php
// 用户详情初始数据
$user = [
    'id' => 0,
    'username' => '',
    'password' => ''
];

$post = $_POST;
if ($post) {
    $id = isset($post['id']) ? $post['id'] : 0;
    $username = isset($post['username']) ? $post['username'] : '';
    $password = isset($post['password']) ? $post['password'] : '';

    if ($username && $password) {
        if ($id) { // 修改
            $sql = "UPDATE user SET username='$username', password='$password' WHERE id=$id";
        } else { // 新增
            $sql = "INSERT INTO user(username,password) VALUES('$username', '$password')";
        }

        if ($result = mysqli_query($conn, $sql)) {
            echo 'Update success';
            header('Location: ../index.php');
        } else {
            echo 'Update failure';
        }
    }
} else {
    $params = $_GET;
    $id = isset($params['id']) ? $params['id'] : 0;

    if ($id) {
        // 查下用户详情
        $sql = "SELECT * FROM user WHERE id=$id";

        if ($result = mysqli_query($conn, $sql)) {
            /* fetch associative array */
            while ($row = mysqli_fetch_row($result)) {
                $user = [
                    'id' => $row[0],
                    'username' => $row[1],
                    'password' => $row[2]
                ];
                break;
            }
            /* free result set */
            mysqli_free_result($result);
        }
    }
}

/* close connection */
mysqli_close($conn);
