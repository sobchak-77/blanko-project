// --- ANIMATIONS ---

new WOW().init();

// --- BURGER MENU ---

let header = document.getElementById('header');
let burger = document.getElementById('burger');
let page = document.querySelector('.page');
let main = document.querySelector('.main');
let footer = document.querySelector('.footer');
let menu = document.querySelectorAll('.close-burger-menu');

burger.addEventListener('click', function() {
  header.classList.toggle('open');
  main.classList.toggle('background');
  footer.classList.toggle('background');
  page.classList.toggle('stop-scroll');
});

menu.forEach(function (el) {
  el.addEventListener('click', function() {
    header.classList.remove('open');
    main.classList.remove('background');
    footer.classList.remove('background');
    page.classList.remove('stop-scroll');
  });
});

// действия при клике на кнопку 'Escape'
window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    header.classList.remove('open');
    main.classList.remove('background');
    footer.classList.remove('background');
    page.classList.remove('stop-scroll');
  };
});
