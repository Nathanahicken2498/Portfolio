var image = document.querySelector('.case-study01');
var hoverText = document.querySelector('.hoverText');

image.addEventListener('mouseover', function() {
  hoverText.style.display = 'block';
});

image.addEventListener('mouseout', function() {
  hoverText.style.display = 'none';
});