document.addEventListener('DOMContentLoaded', function() {
  const Hamburger = document.getElementById('hamburger');
  const Menu = document.getElementById('menu');
  const headerWrapper = document.getElementById('header-wrapper');
  const headerTitle = document.getElementById('header-title');
  const Body = document.querySelector('body');
  const Header = document.querySelector('header');

  Hamburger.addEventListener('click', function() {
    Hamburger.classList.toggle('toggled');
    Menu.classList.toggle('toggled');
    headerWrapper.classList.toggle('toggled');
    headerTitle.classList.toggle('toggled');
    Body.classList.toggle('toggled');
    Header.classList.toggle('toggled');
  });

  headerWrapper.addEventListener('click', function() {
    if (event.target.matches('#header-wrapper::after')) {
      Hamburger.classList.remove('toggled');
      Menu.classList.remove('toggled');
      headerWrapper.classList.remove('toggled');
      headerTitle.classList.remove('toggled');
      Body.classList.remove('toggled');
      Header.classList.remove('toggled');
    }
  });
});