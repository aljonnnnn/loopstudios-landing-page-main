const hamburger = document.querySelector('.nav__hamburger');
const navMenu = document.querySelector('.nav__menu');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show--menu');
    body.classList.toggle('no--scroll');
})