$(function() {
  var $content = $('#content');

  console.info('load-jquery', $content);

  if ($content.length) {
    $content.css('color', 'red');
  } else {
    console.warn('DOM is not ready');
  }
});
