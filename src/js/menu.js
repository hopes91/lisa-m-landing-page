const scrollSlower = require('./slowerScrolling.js');

const burger = document.querySelector('.burger');

const manageMenus = () => {
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdown = document.querySelector('.dropdown');
  const dropMenu = document.querySelector('.dropdown .menu');
  const dropLinks = document.querySelectorAll('.drop-link');

  if (window.innerWidth > 640) {
    dropLinks.forEach(link => link.setAttribute('tabindex', '-1'));
    dropMenu.className = 'menu closed';
    burger.className = 'burger';
    burger.setAttribute('tabindex', '-1');
    dropdown.className = 'dropdown closed';
    nav.className = 'nav opened';
    navLinks.forEach(link => link.setAttribute('tabindex', '0'));
  }

  if (window.innerWidth <= 640) {
    nav.className = 'nav closed';
    navLinks.forEach(link => link.setAttribute('tabindex', '-1'));
    dropdown.className = 'dropdown opened';
    burger.className = 'burger';
    burger.setAttribute('tabindex', '0');
    dropMenu.className = 'menu closed';
    dropLinks.forEach(link => link.setAttribute('tabindex', '-1'));
  }
};

const menuLinks = document.querySelectorAll('nav a');

const scrollToInfo = event => {
  event.target.parentElement.className.match('opened') &&
    scrollSlower(event);
};

const toggleBurger = event => {
  const dropMenu = event.currentTarget.nextElementSibling;

  dropMenu.className.match('closed') ?
    burger.className = 'burger burger-active' :
    burger.className = 'burger';

  toggleDropMenu(dropMenu);
};

const toggleDropMenu = dropMenu => {
  if (dropMenu.className.match('closed')) {
    dropMenu.parentElement.className = 'dropdown dropdown-active opened';
    dropMenu.querySelectorAll('.drop-link').forEach(link => link.setAttribute('tabindex', '0'));
    dropMenu.className = 'menu opened';
  } else if (dropMenu.className.match('opened')) {
    dropMenu.parentElement.className = 'dropdown closed';
    dropMenu.querySelectorAll('.drop-link').forEach(link => link.setAttribute('tabindex', '-1'));
    dropMenu.className = 'menu closed';
  }
};

window.addEventListener('load', manageMenus);
window.addEventListener('resize', manageMenus);
menuLinks.forEach(link => link.addEventListener('click', scrollToInfo));
burger.addEventListener('click', toggleBurger);
