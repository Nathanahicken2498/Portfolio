var x = document.querySelector('.hoverText');
var img = document.querySelector('.case-study01');

img.addEventListener('mouseover', function() {
    x.style.display = 'block';
});

img.addEventListener('mouseout', function() {
    x.style.display = 'none';
});