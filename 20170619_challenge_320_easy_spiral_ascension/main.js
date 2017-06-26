var input = prompt('Input a number:'); // 输入

var max = input; // 最大循环数
var count = 0; // 计数
var direction = false; // true: x轴变化, false: y轴变化
var position = true; // true: 正, false: 负
var step = 50; // 轴变化值
var x = 0; // x轴
var y = step; // y轴
var number = 1; // 当前输出数字

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.font = '14px serif';

function render() {
  direction = !direction;

  for (var i = 1; i <= max; i++) {
    if (direction) {
      if (position) {
        x += step;
      } else {
        x -= step;
      }
    } else {
      if (position) {
        y += step;
      } else {
        y -= step;
      }
    }
    ctx.fillText(number, x, y);
    number += 1;
  }

  count += 1;

  if (number <= input * input) {
    if (max === input) {
      count = 2;
    }

    if (count === 2) {
      count = 0;
      max -= 1;
    } else {
      position = !position;
    }
    render();
  }
}

render();
