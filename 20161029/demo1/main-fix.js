function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  var content = document.getElementById('content');

  console.info('load-fix', content);

  if (content) {
    content.style.color = 'red';
  } else {
    console.warn('DOM is not ready');
  }
});
