var currentCount = 0;
var MAX = 20;

var $content = document.getElementById('content');
// 方法1
// var $count = document.getElementsByClassName('count')[0];
// 方法2
var $count = document.querySelector('.count');

$content.addEventListener('keyup', function(e) {
  var content = this.value;

  // 更新计数
  currentCount = content.length;
  $count.innerHTML = currentCount;

  // 更新样式
  if (currentCount > MAX) {
    $count.classList.add('red');
  } else {
    $count.classList.remove('red');
  }
});
