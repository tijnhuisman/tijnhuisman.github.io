window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var heroHeader = document.querySelector('#hero-header');
  var heroHeight = heroHeader.offsetHeight;

  if (window.pageYOffset > heroHeight) {
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
  }
});
