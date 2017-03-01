<?php
// 数据库配置
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '123456');
define('DB_NAME', 'test'); // 数据库名

// 项目根目录
define('ABSPATH', dirname(__FILE__) . '/');

// 加载通用脚本
require_once(ABSPATH . 'inc/conn.php');
