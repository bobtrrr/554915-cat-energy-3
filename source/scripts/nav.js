const navButton = document.querySelector('.main-nav__toggle');
const navList = document.querySelector('.main-nav__site-nav');


const toggleMenu = () => {
  navButton.addEventListener('click', () => {
    navButton.classList.toggle('toggle-button--opened');
    navList.classList.toggle('site-nav--opened');
  });
};

export const initToggleMenu = () => toggleMenu();
