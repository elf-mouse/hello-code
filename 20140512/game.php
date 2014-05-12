<?php
/**
 * 报数游戏
 * @author Elf-mousE
 * @since 2014.05.12
 */
class Game
{
  private $teacher_names = '';
  private $students = 100;

  /**
   * 创建老师的名字序列（待改进）
   * a,b,c,ab,ac,bc,abc
   */
  private function getTeacherNames($a, $b, $c) {
    $teacher_name = array($a=>'Fizz', $b=>'Buzz', $c=>'Whizz');
    $teacher_names = $teacher_name;
    $teacher_names[$a*$b] = $teacher_name[$a].$teacher_name[$b];
    $teacher_names[$a*$c] = $teacher_name[$a].$teacher_name[$c];
    $teacher_names[$b*$c] = $teacher_name[$b].$teacher_name[$c];
    $teacher_names[$a*$b*$c] = $teacher_name[$a].$teacher_name[$b].$teacher_name[$c];
    return $teacher_names;
  }

  /**
   * $x是否包含$a（待改进）
   */
  private function isIncludeFirst($x, $a) {
    $decade = floor($x / 10);
    $unit = $x % 10;
    return ($decade == $a || $unit == $a) ? true : false;
  }

  /**
   * 检查是否倍数输入名
   */
  private function getResult($x) {
    $result = $x;
    $keys = array_reverse(array_keys($this->teacher_names));
    foreach ($keys as $key) {
      if ($x % $key == 0) {
        $result = $this->teacher_names[$key];
        break;
      }
    }
    return $result;
  }

  public function play($a = 3, $b = 5, $c = 7) {
    $this->teacher_names = $this->getTeacherNames($a, $b, $c);
    for ($x = 1; $x <= $this->students; $x++) {
      if ($this->isIncludeFirst($x, $a)) {
        $output[$x] = $this->teacher_names[$a];
      } else {
        $output[$x] = $this->getResult($x);
      }
    }
    return $output;
  }
}

$game = new Game();
$r = $game->play();
print_r($r);
