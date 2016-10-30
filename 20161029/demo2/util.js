function dom(id) {
  return document.getElementById(id);
}

// datetime-local转时间格式
function toDatetime(value) {
  return value.replace('T', ' ');
}

// 时间转时间戳
function toTimestamp(datetime) {
  // 方法1
  // return Date.parse(new Date(datetime));

  // 方法2
  // return new Date(datetime).valueOf();

  // 方法3
  return new Date(datetime).getTime();
}
