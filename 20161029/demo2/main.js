var $startTime = dom('start-time');
var $endTime = dom('end-time');
var $btn = dom('btn-test');

// 点击按钮
$btn.addEventListener('click', function() {
  var startTime = toDatetime($startTime.value);
  var endTime = toDatetime($endTime.value);

  console.log('Datetime:', startTime, endTime);

  startTime = toTimestamp(startTime);
  endTime = toTimestamp(endTime);

  console.log('Timestamp:', startTime, endTime);
});
