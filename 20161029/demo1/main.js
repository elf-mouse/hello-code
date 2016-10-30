var content = document.getElementById('content');

console.info('load', content);

if (content) {
  content.style.color = 'red';
} else {
  console.warn('DOM is not ready');
}
