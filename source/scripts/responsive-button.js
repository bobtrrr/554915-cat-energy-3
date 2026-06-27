const button = document.querySelector('.hero__button');

const TABLET_WIDTH = 748;

const mediaQuery = window.matchMedia(`(min-width: ${TABLET_WIDTH}px)  `);

const handleScreenChange = (evt) => {
  if (evt.matches) {
    button.classList.remove('button--size-m');
    button.classList.add('button--size-l');

    return;
  }

  button.classList.remove('button--size-l');
  button.classList.add('button--size-m');
};

const responsiveButton = () => {
  if (!button) {
    return;
  }

  mediaQuery.addEventListener('change', handleScreenChange);
  handleScreenChange(mediaQuery);
};

export const initResponsiveButton = () => responsiveButton();
