var light = document.getElementById('light');

document
  .documentElement
  .addEventListener('mousemove', function handleMouseMove(event) {
  light.style.setProperty('--light-position-y', (event.clientY - 70) + 'px');
  light.style.setProperty('--light-position-x', (event.clientX - 60) + 'px');
});