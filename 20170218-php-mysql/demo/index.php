<?php
require('config.php');
require(ABSPATH . 'user/auth.php');
require(ABSPATH . 'user/list.php');
?>

<p>
  <a href="edit.php">Add New</a> | <a href="logout.php">Exit</a>
</p>

<?php if (isset($users) && $users) { // 有数据 ?>
    <table border="1">
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
        <?php foreach ($users as $user) { ?>
        <tr>
            <td><?php echo $user['id']; ?></td>
            <td><?php echo $user['username']; ?></td>
            <td><?php echo $user['password']; ?></td>
            <td>
                <button type="button" onclick="location.href='edit.php?id=<?php echo $user['id']; ?>'">Edit</button>
                <form action="user/delete.php" method="post">
                    <input type="hidden" name="id" value="<?php echo $user['id']; ?>">
                    <button type="submit">Delete</button>
                </form>
            </td>
        </tr>
        <?php } ?>
    </table>
<?php } else { // 无数据 ?>
    <p>No Data</p>
<?php } ?>
