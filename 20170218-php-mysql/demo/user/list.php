<?php
$users = []; // 用户列表

$sql = "SELECT * FROM user";
if ($result = mysqli_query($conn, $sql)) {
    // 取字段
    while ($row = mysqli_fetch_row($result)) {
        $user = [
            'id' => $row[0],
            'username' => $row[1],
            'password' => $row[2]
        ];
        array_push($users, $user);
    }
    /* free result set */
    mysqli_free_result($result);
}

/* close connection */
mysqli_close($conn);
