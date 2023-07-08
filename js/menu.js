const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const body = document.body;



menu.addEventListener('click', function() {
  nav.classList.toggle('opened');
  menu.classList.toggle('opened');
  header.classList.toggle('opened');
  body.classList.toggle('menu-open');


});
